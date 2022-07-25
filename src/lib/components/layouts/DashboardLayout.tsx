import React from "react";
import { FadeInUpTransition } from "react-transitions-library";
import "twin.macro";

import DashboardSidebar from "#/lib/components/DashboardSidebar";
import DashboardHeader from "#/lib/components/headers/DashboardHeader";

type Props = {
   children: React.ReactNode;
};

const DashboardLayout: React.FC<Props> = ({ children }) => {
   return (
      <div tw="flex h-full min-h-full">
         <DashboardSidebar />

         <div className="flex-1">
            <DashboardHeader />
            <FadeInUpTransition in>{children}</FadeInUpTransition>
         </div>
      </div>
   );
};

export default DashboardLayout;
