import * as React from "react";
import "twin.macro";

type Props = {
   options: string[];
   value?: string;
   onSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const AccentColorSelect: React.FC<Props> = ({ options, value, onSelect }) => {
   return (
      <select
         name="color"
         id="color"
         value={value}
         tw="block max-w-xs rounded bg-primary-200 text-tw-secondary focus:border-primary-400 focus:outline-none focus:ring focus:ring-primary-400"
         onChange={onSelect}
      >
         <option value="default">Default</option>
         {options.map((option) => (
            <option key={option} value={option}>
               {option.charAt(0).toUpperCase() + option.slice(1)}
            </option>
         ))}
      </select>
   );
};

export default AccentColorSelect;
