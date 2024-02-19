import Title from "@/components/Title";
import TechStackItem from "@/components/tech-stack/Item";
import { BACK_END, DEV_OPS, FRONT_END, LANGUAGES } from "@/lib/tech-stack.mock";

const TechStack = () => {
  const languages = LANGUAGES;
  const frontEnd = FRONT_END;
  const backEnd = BACK_END;
  const devOps = DEV_OPS;

  return (
    <section className="flex flex-col gap-6 w-full h-full">
      <article className="flex flex-col gap-6">
        <article className="flex flex-col gap-6">
          <Title>Language</Title>
          <div className="flex flex-col lg:grid grid-cols-4 gap-3">
            {languages.map((language, index) => (
              <TechStackItem
                key={index}
                icon={language.icon}
                description={language.description}
              >
                {language.content}
              </TechStackItem>
            ))}
          </div>
        </article>

        <Title>Front-End</Title>
        <div className="flex flex-col lg:grid grid-cols-4 gap-3">
          {frontEnd.map((front, index) => (
            <TechStackItem
              key={index}
              description={front.description}
              icon={front.icon}
            >
              {front.content}
            </TechStackItem>
          ))}
        </div>
      </article>

      <article className="flex flex-col gap-6">
        <Title>Back-End</Title>
        <div className="flex flex-col lg:grid grid-cols-4 gap-3">
          {backEnd.map((back, index) => (
            <TechStackItem
              key={index}
              description={back.description}
              icon={back.icon}
            >
              {back.content}
            </TechStackItem>
          ))}
        </div>
      </article>

      <article className="flex flex-col gap-6">
        <Title>Dev Ops</Title>
        <div className="flex flex-col lg:grid grid-cols-4 gap-3">
          {devOps.map((dev, index) => (
            <TechStackItem
              key={index}
              description={dev.description}
              icon={dev.icon}
            >
              {dev.content}
            </TechStackItem>
          ))}
        </div>
      </article>
    </section>
  );
};

export default TechStack;
