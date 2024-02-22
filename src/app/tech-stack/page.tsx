"use client";

import Title from "@/components/Title";
import TechStackItem from "@/components/tech-stack/Item";
import { cls } from "@/lib/class-name";
import { BACK_END, DEV_OPS, FRONT_END, LANGUAGES } from "@/lib/tech-stack.mock";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useSearchParams, useRouter } from "next/navigation";

const TechStack = () => {
  const params = useSearchParams();
  const [parent, enableAnimations] = useAutoAnimate();

  if (!params?.get("category")) {
    useRouter().push("/tech-stack?category=all");
  }

  const isAll = params?.get("category") === "all";
  const isFrontEnd = isAll || params?.get("category") === "front-end";
  const isBackEnd = isAll || params?.get("category") === "back-end";
  const isDevOps = isAll || params?.get("category") === "dev-ops";
  const isLanguage = isAll || params?.get("category") === "language";

  const languages = LANGUAGES;
  const frontEnd = FRONT_END;
  const backEnd = BACK_END;
  const devOps = DEV_OPS;

  const languagesComponent = () => {
    if (isLanguage) {
      return (
        <>
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
        </>
      );
    }

    return <></>;
  };

  const frontEndComponent = () => {
    if (isFrontEnd) {
      return (
        <>
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
        </>
      );
    }

    return <></>;
  };

  const backEndComponent = () => {
    if (isBackEnd) {
      return (
        <>
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
        </>
      );
    }

    return <></>;
  };

  const devOpsComponent = () => {
    if (isDevOps) {
      return (
        <>
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
        </>
      );
    }

    return <></>;
  };

  return (
    <section className="flex flex-col w-full h-screen">
      <article className="flex flex-col gap-6" ref={parent}>
        {languagesComponent()}
      </article>

      <article
        className={cls("flex flex-col gap-6", isAll ? "mt-6" : "mt-0")}
        ref={parent}
      >
        {frontEndComponent()}
      </article>

      <article
        className={cls("flex flex-col gap-6", isAll ? "mt-6" : "mt-0")}
        ref={parent}
      >
        {backEndComponent()}
      </article>

      <article
        className={cls("flex flex-col gap-6", isAll ? "mt-6" : "mt-0")}
        ref={parent}
      >
        {devOpsComponent()}
      </article>
    </section>
  );
};

export default TechStack;
