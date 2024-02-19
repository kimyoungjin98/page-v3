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

interface Item {
	content?: string;
	icon?: string;
	description?: string;
}

export const LANGUAGES: Item[] = [
	{ content: "TypeScript", icon: TSIcon },
	{ content: "JavaScript", icon: JSIcon },
	{ content: "Java", icon: JavaIcon },
	{ content: "Kotlin", icon: KotlinIcon },
]

export const FRONT_END: Item[] = [
	{ content: "Angular", icon: AngularIcon },
	{ content: "React", icon: ReactIcon },
	{ content: "Vue", icon: VueIcon },
	{ content: "Next.js", icon: NextIcon, description: "React Framework" },
	{ content: "Nuxt.js", icon: NuxtIcon, description: "Vue.js Framework" },
	{ content: "Ionic", icon: IonicIcon, description: "Cross-Platform Mobile App Framework" },
	{ content: "Android", icon: AndroidIcon },
	{ content: "Tailwindcss", icon: TailwindIcon, description: "Utility-First CSS Framework" },
	{ content: "HTML5", icon: HTMLIcon },
	{ content: "CSS3", icon: CSSIcon },
];

export const BACK_END: Item[] = [
	{ content: "Nest.js", icon: NestIcon, description: "Node.js & TypeScript Server Framework" },
	{ content: "Spring(Legacy)", icon: SpringIcon, description: "Java Framework" },
	{ content: "Spring(Boot)", icon: SpringIcon, description: "Java Framework" },
	{ content: "Express", icon: ExpressIcon, description: "Node.js Server Framework" },
	{ content: "Prisma", icon: PrismaIcon, description: "TypeScript ORM" },
	{ content: "TypeORM", icon: TypeORMIcon, description: "TypeScript ORM" },
	{ content: "PostgreSQL", icon: PostgreSQLIcon, description: "Relational Database" },
	{ content: "MySQL", icon: MySQLIcon, description: "Relational Database" },
	{ content: "MariaDB", icon: MariaDBIcon, description: "Relational Database" },
	{ content: "Firebase", icon: FirebaseIcon, description: "Realtime & NoSQL Database" },
	{ content: "MongoDB", icon: MongoDBIcon, description: "NoSQL Database" },
]

export const DEV_OPS: Item[] = [
	{ content: "NX", icon: NXIcon, description: "Monorepo Framework" },
	{ content: "Turbo Repo", icon: TurboIcon, description: "Monorepo Framework" },
	{ content: "Docker", icon: DockerIcon },
	{ content: "Nginx", icon: NginxIcon },
	{ content: "AWS", icon: AWSIcon },
]