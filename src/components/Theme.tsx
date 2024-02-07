import { useThemeStore } from "@/hooks/theme.store";
import Icon from "./Icon";

const Theme = () => {
  const store = useThemeStore();

  const iconDarkActive =
    store.theme === "dark" ? "bg-white" : "bg-gray-300 hover:bg-gray-700";
  const iconLightActive =
    store.theme === "light" ? "bg-gray-700" : "bg-gray-500 hover:bg-white";
  const wrapperDarkActive =
    store.theme === "dark" ? "bg-neutral-800" : "bg-transparent";
  const wrapperLightActive =
    store.theme === "light" ? "bg-neutral-300" : "bg-transparent";
  const containerActive =
    store.theme === "dark" ? "border-gray-800" : "border-gray-200";

  const darkWraperClassName = `group cursor-pointer w-7 h-7 flex items-center justify-center ${wrapperDarkActive} rounded-full`;
  const lightWraperClassName = `group cursor-pointer w-7 h-7 flex items-center justify-center ${wrapperLightActive} rounded-full`;
  const containerClassName = `bg-transparent rounded-full p-1 px-2 flex gap-2 ${containerActive} border`;
  const iconDarkClassName = `w-5 h-5 ${iconDarkActive} transition-colors`;
  const iconLightClassName = `w-5 h-5 ${iconLightActive} transition-colors`;

  const setLight = () => {
    store.setTheme("light");
  };

  const setDark = () => {
    store.setTheme("dark");
  };

  return (
    <div className={containerClassName}>
      <div className={lightWraperClassName} onClick={setLight}>
        <Icon
          name="material-symbols-light:light-mode"
          className={iconLightClassName}
        />
      </div>
      <div className={darkWraperClassName} onClick={setDark}>
        <Icon
          name="material-symbols-light:dark-mode"
          className={iconDarkClassName}
        />
      </div>
    </div>
  );
};

export default Theme;
