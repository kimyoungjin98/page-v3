import Icon from "../Icon";

interface IProps {
  label: string;
  icon: string;
  children: React.ReactNode;
}

const IntroductionCard = ({ label, children, icon }: IProps) => {
  return (
    <div className="flex px-6 p-4 gap-4 items-center bg-white rounded-xl border-gray-200 w-full">
      <Icon name={icon} className="size-10 bg-neutral-800" />
      <div className="flex flex-col gap-1">
        <p className="font-bold text-neutral-800">{label}</p>
        <p className="text-lg font-semibold text-neutral-700">{children}</p>
      </div>
    </div>
  );
};

export default IntroductionCard;
