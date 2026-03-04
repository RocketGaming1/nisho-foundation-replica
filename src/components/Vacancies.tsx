import { ExternalLink } from "lucide-react";

const Vacancies = () => {
  const vacancies = [
    {
      title: "General Intern",
      link: "https://www.nishofoundation.com/vacancies/",
    },
    {
      title: "Editorial and production intern",
      link: "https://www.nishofoundation.com/vacancies-editorial-intern/",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            VACANCIES
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {vacancies.map((vacancy, index) => (
            <a
              key={index}
              href={vacancy.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 border border-border hover:border-primary bg-card transition-all duration-200"
            >
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                {vacancy.title}
                <ExternalLink className="h-4 w-4" />
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vacancies;
