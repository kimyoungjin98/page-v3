import Badge from "../Badge";
import Icon from "../Icon";

interface IProps {
  label?: string;
  icon?: string;
  children?: React.ReactNode;
}

const IntroductionItem = ({ label, children, icon }: IProps) => {
  return (
    <div className="flex pb-2 text-sm px-1 gap-3 items-center rounded w-full border-b border-neutral-700">
      {label && <Badge icon={icon}>{label}</Badge>}
      {children}
    </div>
  );
};

export default IntroductionItem;
