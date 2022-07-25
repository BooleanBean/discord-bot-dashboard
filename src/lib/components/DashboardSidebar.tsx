import React from "react";
import "twin.macro";

type Props = Record<string, unknown>;

const DashboardSidebar: React.FC<Props> = () => {
   return <aside tw="w-60 bg-tw-secondary flex-shrink-0">Sidebar</aside>;
};

export default DashboardSidebar;
