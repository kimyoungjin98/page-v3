import PageTemplate from "@/components/page/Template";

interface IProps {
  children: React.ReactNode;
}

const IntroductionTemplate = ({ children }: IProps) => {
  return <PageTemplate title="Introduction">{children}</PageTemplate>;
};

export default IntroductionTemplate;
