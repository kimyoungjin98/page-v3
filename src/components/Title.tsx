import Icon from "./Icon";

interface IProps {
  children: React.ReactNode;
  icon?: string;
  emoji?: string;
}

const Title = ({ icon, children, emoji }: IProps) => {
  return (
    <div className="flex gap-2 items-center">
      {icon ? <Icon name={icon} className="w-8 h-8 bg-gray-200" /> : <></>}
      {emoji ? <p className="text-2xl mb-1">{emoji}</p> : <></>}
      <p className="text-xl text-gray-200 font-semibold">{children}</p>
    </div>
  );
};

export default Title;
