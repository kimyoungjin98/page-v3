"use client";

import { cls } from "@/lib/class-name";

interface IProps {
  children: React.ReactNode;
  icon?: string;
  url?: string;
  description?: string;
}

const TechStackCard = ({ children, icon, url, description }: IProps) => {
  const onClick = () => {
    if (url) window.open(url, "_blank");
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
    <article
      onClick={onClick}
      className={cls(
        "transition-colors flex items-center rounded-md border border-gray-300 p-4 gap-4 bg-white min-h-[6rem]",
        url ? "cursor-pointer" : ""
      )}
    >
      <img src={icon} className="w-10 h-10" />
      <div className="flex flex-col gap-2">
        <p className="font-bold transition-colors text-gray-700">{children}</p>
        {descriptionComponent()}
      </div>
    </article>
  );
};

export default TechStackCard;
