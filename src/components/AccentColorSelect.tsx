import React from "react";

import clsxm from "#/lib/clsxm";

type Props = {
  itemsList: string[];
  value?: string;
  selectHandler: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const AccentColorSelect: React.FC<Props> = ({
  itemsList,
  value,
  selectHandler,
}) => {
  return (
    <select
      name="color"
      id="color"
      value={value}
      className={clsxm(
        "block max-w-xs rounded bg-primary-200 text-tw-secondary",
        "focus:border-primary-400 focus:outline-none focus:ring focus:ring-primary-400"
      )}
      onChange={(event) => selectHandler(event)}
    >
      <option value="default">Default</option>
      {itemsList.map((item) => (
        <option key={item} value={item}>
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </option>
      ))}
    </select>
  );
};

export default AccentColorSelect;
