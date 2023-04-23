import { useEffect, useState } from "react";
import ConfigPrimaryBtn from "../configPrimaryButton";

function appearanceConfig({ setSnackVisible }) {
  const [checked, setChecked] = useState("dark");

  useEffect(() => {
    (async () => {
      const theme = await getTheme();
      setChecked(theme === "dark");
    })();
  }, []);

  const getTheme = async () => {
    return await window.electronAPI.fetchSetting("preferredTheme");
  };

  const changeTheme = async () => {
    if (!checked) {
      window.electronAPI.saveSettings({ preferredTheme: "light" });
      document.documentElement.classList.remove("dark");
    } else {
      window.electronAPI.saveSettings({ preferredTheme: "dark" });
      document.documentElement.classList.add("dark");
    }
    setSnackVisible(true)
  };

  return (
    <div className="px-7 py-5">
      <div>
        <p className="font-roboto font-bold text-palette-gray100 dark:text-palette-gray50 text-[18pt]">
          Appearance
        </p>
        <p className="font-roboto text-palette-gray100 dark:text-palette-gray50 text-[8pt]">
          Settings for the general appearance of the application.
        </p>
        <div className="mt-6">
          <div className="flex">
            <div>
              <p className="font-roboto text-palette-gray100 dark:text-palette-gray50 text-[10pt]">
                Dark Mode
              </p>
              <p className="font-roboto text-palette-gray100 dark:text-palette-gray50 text-[8pt]">
                Enable / Disable dark mode theme.
              </p>
            </div>
            <input
              type="checkbox"
              className="ml-32"
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
          </div>
        </div>
        <div className="flex flex-row-reverse mt-36 mr-3 gap-x-2">
          <div onClick={changeTheme}>
            <ConfigPrimaryBtn Title={"Apply"} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default appearanceConfig;
