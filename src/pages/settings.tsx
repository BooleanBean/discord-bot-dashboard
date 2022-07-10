import { useTheme } from "next-themes";

import AccentColorSelect from "#/components/AccentColorSelect";
import FixedLayout from "#/components/layouts/FixedLayout";

import { NextPageWithLayout } from "#/global-types";

const Settings: NextPageWithLayout = () => {
  const { theme, setTheme } = useTheme();

  const mode = theme?.split(" ")[0] || theme;
  const accentColor = theme?.split(" ")[1] || "";

  const handleAccentColor = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === "default") return setTheme(`${mode}`);

    setTheme(`${mode} ${event.target.value as typeof colorList[number]}`);
  };

  return (
    <div className="md:py-26 py-20">
      <div className="mt-8 space-y-16">
        <div>
          <h2>Theme</h2>
          <p className="mt-2 mb-6 text-tw-primary-dark">
            Don&apos;t like the theme? No problem, you can select a suitable
            theme below!
          </p>
          <AccentColorSelect
            itemsList={colorList}
            value={accentColor}
            selectHandler={handleAccentColor}
          />
        </div>
        <div>
          <h2>Scroll down</h2>
          <p className="mt-2 mb-6 text-tw-primary-dark">
            Don&apos;t like the theme? No problem, you can select a suitable
            theme below!
          </p>
          <AccentColorSelect
            itemsList={colorList}
            value={accentColor}
            selectHandler={handleAccentColor}
          />
        </div>
        <div>
          <h2>Hope all bugs fixed</h2>
          <p className="mt-2 mb-6 text-tw-primary-dark">
            Don&apos;t like the theme? No problem, you can select a suitable
            theme below!
          </p>
          <AccentColorSelect
            itemsList={colorList}
            value={accentColor}
            selectHandler={handleAccentColor}
          />
        </div>
        <div>
          <h2>And seems like that i will commit the changes</h2>
          <p className="mt-2 mb-6 text-tw-primary-dark">
            Don&apos;t like the theme? No problem, you can select a suitable
            theme below!
          </p>
          <AccentColorSelect
            itemsList={colorList}
            value={accentColor}
            selectHandler={handleAccentColor}
          />
        </div>
        <div>
          <h2>Theme</h2>
          <p className="mt-2 mb-6 text-tw-primary-dark">
            Don&apos;t like the theme? No problem, you can select a suitable
            theme below!
          </p>
          <AccentColorSelect
            itemsList={colorList}
            value={accentColor}
            selectHandler={handleAccentColor}
          />
        </div>
        <div>
          <h2>Theme</h2>
          <p className="mt-2 mb-6 text-tw-primary-dark">
            Don&apos;t like the theme? No problem, you can select a suitable
            theme below!
          </p>
          <AccentColorSelect
            itemsList={colorList}
            value={accentColor}
            selectHandler={handleAccentColor}
          />
        </div>
      </div>
    </div>
  );
};

const colorList = ["indigo", "gray"];

Settings.getLayout = (page) => (
  <FixedLayout title="Settings">{page}</FixedLayout>
);

export default Settings;
