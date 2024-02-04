interface IProps {
  title: string;
  children: React.ReactNode;
  menus?: { name: string; path: string }[];
}

const PageTemplate = ({ children, menus, title }: IProps) => {
  const menuComponent = () => {
    if (menus && menus.length > 0) {
      return (
        <article className="flex flex-col min-w-[10rem] mt-[5rem] h-full border-r">
          {menus.map((item) => (
            <p
              key={item.path}
              className="text-gray-400 cursor-pointer hover:underline underline-offset-4"
            >
              {item.name}
            </p>
          ))}
        </article>
      );
    }

    return <></>;
  };

  return (
    <section className="flex gap-6 w-full h-full p-6">
      {menuComponent()}
      <article className="flex flex-col gap-6 p-4 w-full h-full">
        <div className="flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-6 w-full">
            <p className="text-gray-200 text-2xl font-semibold">{title}</p>
          </div>
          <div className="w-full h-px bg-gray-700"></div>
        </div>
        <div className="w-full h-full overflow-y-auto">{children}</div>
      </article>
    </section>
  );
};

export default PageTemplate;
