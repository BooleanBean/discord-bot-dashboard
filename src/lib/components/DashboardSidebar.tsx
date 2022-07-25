import * as React from "react";
import "twin.macro";

type Props = Record<string, unknown>;

const DashboardSidebar: React.FC<Props> = () => {
   return (
      <aside tw="w-60 bg-tw-background flex-shrink-0 border-r border-tw-border">
         sidebar
      </aside>
   );
};

export default DashboardSidebar;
