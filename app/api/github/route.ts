import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const username = 'sthaarwin';
    
    const reposResponse = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
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
    const projects = repos
      .filter((repo: any) => !repo.fork && repo.description)
      .slice(0, 12)
      .map((repo: any) => {
        const lang = repo.language?.toLowerCase() || 'other';
        languageCounts[lang] = (languageCounts[lang] || 0) + 1;

        return {
          name: repo.name.toUpperCase(),
          description: repo.description,
          tags: [
            repo.language || 'Code',
            repo.topics?.[0] || 'Project',
          ].filter(Boolean),
          url: repo.html_url,
          stars: repo.stargazers_count,
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

    return NextResponse.json({ projects, proficiencies });
  } catch (error) {
    console.error('GitHub API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch GitHub data' },
      { status: 500 }
    );
  }
}