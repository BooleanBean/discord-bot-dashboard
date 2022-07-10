import { useTheme } from "next-themes";
import React from "react";

import AccentColorSelect from "#/components/AccentColorSelect";

type Props = Record<string, unknown>;

const Settings: React.FC<Props> = () => {
  const { theme, setTheme } = useTheme();

  const mode = theme?.split(" ")[0] || theme;
  const accentColor = theme?.split(" ")[1] || "";

  const handleAccentColor = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === "default") return setTheme(`${mode}`);

    setTheme(`${mode} ${event.target.value as typeof colorList[number]}`);
  };

  return (
    <div>
      <AccentColorSelect
        itemsList={colorList}
        value={accentColor}
        selectHandler={handleAccentColor}
      />
    </div>
  );
};

const colorList = ["indigo", "gray"];

export default Settings;
