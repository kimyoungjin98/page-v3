import PageTemplate, { IMenus } from "@/components/page/Template";

interface IProps {
  children: React.ReactNode;
}

const menus: IMenus[] = [
  { name: "All", path: "/tech-stack", query: { category: "all" } },
  { name: "Language", path: "/tech-stack", query: { category: "language" } },
  {
    name: "Front-End",
    path: "/tech-stack",
    query: { category: "front-end" },
  },
  {
    name: "Back-End",
    path: "/tech-stack",
    query: { category: "back-end" },
  },
  {
    name: "DevOps",
    path: "/tech-stack",
    query: { category: "dev-ops" },
  },
];

const TechStackTemplate = ({ children }: IProps) => {
  return (
    <PageTemplate title="Tech-Stack" menus={menus}>
      {children}
    </PageTemplate>
  );
};

export default TechStackTemplate;
