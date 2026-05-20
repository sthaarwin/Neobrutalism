import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function fetchGitHubData() {
  console.log('Fetching GitHub data...');
  
  const configPath = path.join(__dirname, '../app/api/github-config.ts');
  const configContent = fs.readFileSync(configPath, 'utf-8');
  
  const usernameMatch = configContent.match(/username:\s*['"]([^'"]+)['"]/);
  const username = usernameMatch ? usernameMatch[1] : 'sthaarwin';

  const reposResponse = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
    {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'Neobrutalism-Porfolio',
      }
    }
  );

  if (!reposResponse.ok) {
    throw new Error(`GitHub API error: ${reposResponse.status}`);
  }

  const repos = await reposResponse.json();

  const categoryMatches = configContent.match(/name:\s*['"]([^'"]+)['"][\s\S]*?repos:\s*\[([\s\S]*?)\]/g);
  const categories = [];
  
  if (categoryMatches) {
    for (const match of categoryMatches) {
      const nameMatch = match.match(/name:\s*['"]([^'"]+)['"]/);
      const colorMatch = match.match(/color:\s*['"]([^'"]+)['"]/);
      const textColorMatch = match.match(/textColor:\s*['"]([^'"]+)['"]/);
      const reposMatch = match.match(/repos:\s*\[([\s\S]*?)\]/);
      
      if (nameMatch && reposMatch) {
        const reposList = reposMatch[1]
          .split(',')
          .map(r => r.trim().replace(/['"]/g, ''))
          .filter(Boolean);
        
        categories.push({
          name: nameMatch[1],
          color: colorMatch ? colorMatch[1] : 'bg-primary',
          textColor: textColorMatch ? textColorMatch[1] : 'text-foreground',
          repos: reposList,
        });
      }
    }
  }

  const excludePatterns = ['dotfiles', 'nvim', 'vim', 'emacs', 'config', 'setup'];
  const includeForks = ['pulseai'];

  const repoMap = new Map(repos.map(r => [r.name.toLowerCase(), r]));
  const languageCounts = {};

  const categorizedProjects = categories.map(category => {
    const projects = category.repos
      .map(repoName => repoMap.get(repoName.toLowerCase()))
      .filter(repo => {
        if (!repo) return false;
        
        const nameLower = repo.name.toLowerCase();
        if (excludePatterns.some(pattern => nameLower.includes(pattern))) {
          return false;
        }
        
        if (repo.fork && !includeForks.some(f => f.toLowerCase() === nameLower)) {
          return false;
        }
        
        return true;
      })
      .map(repo => {
        const lang = (repo.language || 'other').toLowerCase();
        if (lang !== 'other') {
          languageCounts[lang] = (languageCounts[lang] || 0) + 1;
        }

        return {
          name: repo.name.toUpperCase(),
          description: repo.description || '',
          tags: [repo.language || 'Code', repo.topics?.[0] || 'Project'].filter(Boolean),
          url: repo.html_url,
          stars: repo.stargazers_count,
        };
      });

    return {
      name: category.name,
      color: category.color,
      textColor: category.textColor,
      projects,
    };
  });

  const totalLanguages = Object.values(languageCounts).reduce((a, b) => a + b, 0);
  const proficiencies = Object.entries(languageCounts)
    .map(([lang, count]) => ({
      name: lang.charAt(0).toUpperCase() + lang.slice(1),
      percentage: Math.round((count / totalLanguages) * 100),
    }))
    .sort((a, b) => b.percentage - a.percentage)
    .slice(0, 8);

  const data = { categories: categorizedProjects, proficiencies };
  
  const outputPath = path.join(__dirname, '../public/data/github.json');
  fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
  
  console.log(`Data saved to ${outputPath}`);
  console.log(`Categories: ${categorizedProjects.length}`);
  console.log(`Total projects: ${categorizedProjects.reduce((acc, cat) => acc + cat.projects.length, 0)}`);
}

fetchGitHubData().catch(console.error);