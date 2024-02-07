import PageTemplate, { IMenus } from "@/components/page/Template";

interface IProps {
  children: React.ReactNode;
}

const menus: IMenus[] = [
  { name: "All", path: "/tech-stack" },
  { name: "Front-End", path: "/tech-stack/front-end" },
  { name: "Back-End", path: "/tech-stack/back-end" },
  { name: "DevOps", path: "/tech-stack/devops" },
  { name: "ETC", path: "/tech-stack/etc" },
];

const TechStackTemplate = ({ children }: IProps) => {
  return (
    <PageTemplate title="Tech-Stack" menus={menus}>
      {children}
    </PageTemplate>
  );
};

export default TechStackTemplate;
