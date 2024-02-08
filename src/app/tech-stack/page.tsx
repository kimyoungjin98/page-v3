import Title from "@/components/Title";
import TechStackCard from "@/components/tech-stack/Card";
import {
  AWSIcon,
  AndroidIcon,
  AngularIcon,
  CSSIcon,
  DockerIcon,
  ExpressIcon,
  FirebaseIcon,
  HTMLIcon,
  IonicIcon,
  JSIcon,
  JavaIcon,
  KotlinIcon,
  MariaDBIcon,
  MongoDBIcon,
  MySQLIcon,
  NXIcon,
  NestIcon,
  NextIcon,
  NginxIcon,
  NuxtIcon,
  PostgreSQLIcon,
  PrismaIcon,
  ReactIcon,
  SpringIcon,
  TSIcon,
  TailwindIcon,
  TurboIcon,
  TypeORMIcon,
  VueIcon,
} from "@/lib/stack-icons";

const TechStack = () => {
  return (
    <section className="flex flex-col gap-6 w-full h-full">
      <article className="flex flex-col gap-6">
        <article className="flex flex-col gap-6">
          <Title>Language</Title>
          <div className="grid grid-cols-4 gap-6">
            <TechStackCard icon={TSIcon}>TypeScript</TechStackCard>
            <TechStackCard icon={JSIcon}>JavaScript</TechStackCard>
            <TechStackCard icon={JavaIcon}>Java</TechStackCard>
            <TechStackCard icon={KotlinIcon}>Kotlin</TechStackCard>
          </div>
        </article>

        <Title>Front-End</Title>
        <div className="grid grid-cols-4 gap-6">
          <TechStackCard icon={AngularIcon}>Angular</TechStackCard>
          <TechStackCard icon={ReactIcon}>React</TechStackCard>
          <TechStackCard icon={VueIcon}>Vue</TechStackCard>
          <TechStackCard
            icon={NextIcon}
            description="The React Framework for the Web"
          >
            Next.js
          </TechStackCard>
          <TechStackCard
            icon={NuxtIcon}
            description="The Intuitive Vue Framework"
          >
            Nuxt.js
          </TechStackCard>
          <TechStackCard
            icon={IonicIcon}
            description="cross-platform mobile apps from a single code base"
          >
            Ionic
          </TechStackCard>
          <TechStackCard icon={AndroidIcon}>Android</TechStackCard>
          <TechStackCard
            icon={TailwindIcon}
            description="A utility-first CSS framework packed with classes"
          >
            Tailwindcss
          </TechStackCard>
          <TechStackCard icon={HTMLIcon}>HTML5</TechStackCard>
          <TechStackCard icon={CSSIcon}>CSS3</TechStackCard>
        </div>
      </article>

      <article className="flex flex-col gap-6">
        <Title>Back-End</Title>
        <div className="grid grid-cols-4 gap-6">
          <TechStackCard
            icon={NestIcon}
            description="Building Server-Side Application Framework"
          >
            Nest.js
          </TechStackCard>
          <TechStackCard icon={SpringIcon}>Spring(Legacy)</TechStackCard>
          <TechStackCard icon={SpringIcon}>Spring(Boot)</TechStackCard>
          <TechStackCard icon={ExpressIcon}>Express</TechStackCard>
          <TechStackCard
            icon={PrismaIcon}
            description="Node.js and TypeScript ORM"
          >
            Prisma
          </TechStackCard>
          <TechStackCard
            icon={TypeORMIcon}
            description="Node.js and TypeScript ORM"
          >
            TypeORM
          </TechStackCard>
          <TechStackCard icon={PostgreSQLIcon}>PostgreSQL</TechStackCard>
          <TechStackCard icon={MySQLIcon}>MySQL</TechStackCard>
          <TechStackCard icon={MariaDBIcon}>MariaDB</TechStackCard>
          <TechStackCard icon={FirebaseIcon}>Firebase</TechStackCard>
          <TechStackCard icon={MongoDBIcon}>MongoDB</TechStackCard>
        </div>
      </article>

      <article className="flex flex-col gap-6">
        <Title>Dev Ops</Title>
        <div className="grid grid-cols-4 gap-6">
          <TechStackCard icon={NXIcon} description="Monorepo Framework">
            NX
          </TechStackCard>
          <TechStackCard icon={TurboIcon} description="Monorepo Framework">
            Turbo Repo
          </TechStackCard>
          <TechStackCard icon={DockerIcon}>Docker</TechStackCard>
          <TechStackCard icon={NginxIcon}>Nginx</TechStackCard>
          <TechStackCard icon={AWSIcon}>AWS</TechStackCard>
        </div>
      </article>
    </section>
  );
};

export default TechStack;
