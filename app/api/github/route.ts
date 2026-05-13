import { NextResponse } from 'next/server';
import { config } from '../github-config';

export async function GET() {
  try {
    const reposResponse = await fetch(
      `https://api.github.com/users/${config.username}/repos?sort=updated&per_page=100`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'Neobrutalism-Porfolio',
        },
        next: { revalidate: 3600 }
      }
    );

    if (!reposResponse.ok) {
      throw new Error(`GitHub API error: ${reposResponse.status}`);
    }

    const repos = await reposResponse.json();

    const languageCounts: Record<string, number> = {};
    const excludePatterns = config.excludePatterns.map(p => p.toLowerCase());

    const repoMap = new Map(repos.map((r: any) => [r.name.toLowerCase(), r]));

    const categorizedProjects = config.categories.map(category => {
      const projects = category.repos
        .map(repoName => repoMap.get(repoName.toLowerCase()))
        .filter((repo): repo is any => {
          if (!repo) return false;
          
          const nameLower = repo.name.toLowerCase();
          if (excludePatterns.some(pattern => nameLower.includes(pattern))) {
            return false;
          }
          
          if (repo.fork && !config.includeForks.some(f => f.toLowerCase() === nameLower)) {
            return false;
          }
          
          return true;
        })
        .map(repo => {
          const lang = repo.language?.toLowerCase() || 'other';
          languageCounts[lang] = (languageCounts[lang] || 0) + 1;
          
          const customDesc = config.customDescriptions?.[repo.name.toLowerCase()];
          const description = repo.description || customDesc || 'No description available';

          return {
            name: repo.name.toUpperCase(),
            description,
            tags: [
              repo.language || 'Code',
              repo.topics?.[0] || 'Project',
            ].filter(Boolean),
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
      .filter(([lang]) => lang !== 'other')
      .map(([lang, count]) => ({
        name: lang.charAt(0).toUpperCase() + lang.slice(1),
        percentage: Math.round((count / totalLanguages) * 100),
      }))
      .sort((a, b) => b.percentage - a.percentage)
      .slice(0, 8);

    return NextResponse.json({ categories: categorizedProjects, proficiencies });
  } catch (error) {
    console.error('GitHub API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch GitHub data' },
      { status: 500 }
    );
  }
}