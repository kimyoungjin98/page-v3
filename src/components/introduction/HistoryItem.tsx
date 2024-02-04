interface IProps {
  date: string;
  children: React.ReactNode;
}

const IntroductionHistoryItem = ({ date, children }: IProps) => {
  return (
    <div className="flex gap-2 items-center">
      <p className="px-2 py-1 pb-1.5 rounded-md bg-white text-gray-700 font-semibold">
        {date}
      </p>
      <p>{children}</p>
    </div>
  );
};

export default IntroductionHistoryItem;
