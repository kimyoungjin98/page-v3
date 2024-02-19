import Icon from "../Icon";

type Props = {
  url?: string;
  description?: string;
};

export const TeckStackItemChild = ({ url, description }: Props) => {
  const linkComponent = () => {
    if (!url) return <></>;

    const onClick = (ev: any) => {
      ev.stopPropagation();
      window.open(url, "_blank");
    };

    return (
      <a
        onClick={onClick}
        target="_blank"
        rel="noreferrer"
        className="flex gap-2 items-center text-sm font-semibold text-blue-700 hover:underline cursor-pointer"
      >
        <Icon
          name="ic:outline-insert-link"
          className="size-5 bg-blue-700 mt-1"
        />
        Go to homepage
      </a>
    );
  };

  const descriptionComponent = () => {
    if (description) {
      return (
        <p className="font-semibold transition-colors text-gray-500 text-sm">
          {description}
        </p>
      );
    }

    return <></>;
  };

  return (
    <div className="flex flex-col">
      {linkComponent()}
      {descriptionComponent()}
    </div>
  );
};
