export function ProjectsSkeleton() {
  return (
    <section id="projects" className="py-24 px-6 bg-background border-b-4 border-foreground">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-16 tracking-tighter">
          PROJECTS
        </h2>
        
        <div className="space-y-8">
          {[1, 2, 3].map((i) => (
            <div key={i}>
              <div className="h-10 w-64 bg-primary border-4 border-foreground mb-8 animate-pulse" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((j) => (
                  <div key={j} className="h-48 bg-primary border-4 border-foreground animate-pulse" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}