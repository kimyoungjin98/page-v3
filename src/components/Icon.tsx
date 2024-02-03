export interface IconProps {
  name: string;
  className?: string;
  onClick?: () => void;
}

export const Icon: React.FC<IconProps> = ({
  name,
  className = "w-4 h-4",
  onClick,
}) => {
  const src = encodeURI(`https://api.iconify.design/${name}.svg`);

  const style = {
    maskImage: `url(${src})`,
    WebkitMaskImage: `url(${src})`,
    maskSize: "cover",
    WebkitMaskSize: "cover",
  };

  if (src) {
    return (
      <div
        onClick={onClick}
        style={style}
        className={"relative " + className}
      ></div>
    );
  }
};

export default Icon;
