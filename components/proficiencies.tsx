'use client';

interface Proficiency {
  name: string;
  percentage: number;
}

interface ProficienciesProps {
  proficiencies: Proficiency[];
}

export function Proficiencies({ proficiencies }: ProficienciesProps) {
  if (proficiencies.length === 0) return null;

  return (
    <section id="proficiencies" className="py-16 px-6 bg-secondary border-b-4 border-foreground">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-2xl font-bold text-secondary-foreground mb-8 tracking-tight">LANGUAGE PROFICIENCIES</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {proficiencies.map((tech) => (
            <div 
              key={tech.name} 
              className="border-4 border-foreground bg-background px-4 py-3 font-bold text-foreground text-center text-sm"
            >
              {tech.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}