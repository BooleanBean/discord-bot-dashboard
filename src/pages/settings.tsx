import { useTheme } from "next-themes";
import React from "react";
import "twin.macro";

import AccentColorSelect from "#/lib/components/AccentColorSelect";
import FixedLayout from "#/lib/components/layouts/FixedLayout";
import Seo from "#/lib/components/Seo";

import { NextPageWithLayout } from "#/global-types";

const Settings: NextPageWithLayout = () => {
   const { theme, setTheme } = useTheme();

   const mode = theme?.split(" ")[0] || theme;
   const accentColor = theme?.split(" ")[1] || "";

   const handleAccentColorSelect = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
      if (target.value === "default") return setTheme(`${mode}`);
      setTheme(`${mode} ${target.value as typeof colors[number]}`);
   };

   return (
      <>
         <div tw="space-y-16">
            <div>
               <h2>Theme</h2>
               <p tw="mt-2 mb-6 text-tw-primary-dark">
                  Don&apos;t like the theme? No problem, you can select a suitable theme
                  below!
               </p>
               <AccentColorSelect
                  options={colors}
                  value={accentColor}
                  onSelect={handleAccentColorSelect}
               />
            </div>
            <div>
               <h2>Scroll down</h2>
               <p tw="mt-2 mb-6 text-tw-primary-dark">
                  Don&apos;t like the theme? No problem, you can select a suitable theme
                  below!
               </p>
               <AccentColorSelect
                  options={colors}
                  value={accentColor}
                  onSelect={handleAccentColorSelect}
               />
            </div>
            <div>
               <h2>Hope all bugs fixed</h2>
               <p tw="mt-2 mb-6 text-tw-primary-dark">
                  Don&apos;t like the theme? No problem, you can select a suitable theme
                  below!
               </p>
               <AccentColorSelect
                  options={colors}
                  value={accentColor}
                  onSelect={handleAccentColorSelect}
               />
            </div>
            <div>
               <h2>And seems like that i will commit the changes</h2>
               <p tw="mt-2 mb-6 text-tw-primary-dark">
                  Don&apos;t like the theme? No problem, you can select a suitable theme
                  below!
               </p>
               <AccentColorSelect
                  options={colors}
                  value={accentColor}
                  onSelect={handleAccentColorSelect}
               />
            </div>
            <div>
               <h2>Theme</h2>
               <p tw="mt-2 mb-6 text-tw-primary-dark">
                  Don&apos;t like the theme? No problem, you can select a suitable theme
                  below!
               </p>
               <AccentColorSelect
                  options={colors}
                  value={accentColor}
                  onSelect={handleAccentColorSelect}
               />
            </div>
            <div>
               <h2>Theme</h2>
               <p tw="mt-2 mb-6 text-tw-primary-dark">
                  Don&apos;t like the theme? No problem, you can select a suitable theme
                  below!
               </p>
               <AccentColorSelect
                  options={colors}
                  value={accentColor}
                  onSelect={handleAccentColorSelect}
               />
            </div>
            <div>
               <h2>Theme</h2>
               <p tw="mt-2 mb-6 text-tw-primary-dark">
                  Don&apos;t like the theme? No problem, you can select a suitable theme
                  below!
               </p>
               <AccentColorSelect
                  options={colors}
                  value={accentColor}
                  onSelect={handleAccentColorSelect}
               />
            </div>
            <div>
               <h2>Theme</h2>
               <p tw="mt-2 mb-6 text-tw-primary-dark">
                  Don&apos;t like the theme? No problem, you can select a suitable theme
                  below!
               </p>
               <AccentColorSelect
                  options={colors}
                  value={accentColor}
                  onSelect={handleAccentColorSelect}
               />
            </div>
            <div>
               <h2>Theme</h2>
               <p tw="mt-2 mb-6 text-tw-primary-dark">
                  Don&apos;t like the theme? No problem, you can select a suitable theme
                  below!
               </p>
               <AccentColorSelect
                  options={colors}
                  value={accentColor}
                  onSelect={handleAccentColorSelect}
               />
            </div>
         </div>
      </>
   );
};

const colors = ["indigo", "gray"];

Settings.getLayout = (page) => (
   <FixedLayout title="Settings">
      <Seo templateTitle="Settings" />
      {page}
   </FixedLayout>
);

export default Settings;
