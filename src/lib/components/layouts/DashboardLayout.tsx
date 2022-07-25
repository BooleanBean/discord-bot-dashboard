import * as React from "react";
import { FadeInUpTransition } from "react-transitions-library";
import "twin.macro";

import DashboardSidebar from "#components/DashboardSidebar";
import DashboardHeader from "#components/headers/DashboardHeader";
import { Container } from "#components/StyledComponents";

type Props = {
   children: React.ReactNode;
};

const DashboardLayout: React.FC<Props> = ({ children }) => {
   return (
      <div tw="flex h-full min-h-full">
         <DashboardSidebar />

         <div className="flex-1 overflow-y-auto">
            <DashboardHeader />

            <Container as="main" tw="bg-tw-background-secondary">
               <FadeInUpTransition in>{children}</FadeInUpTransition>
            </Container>
         </div>
      </div>
   );
};

export default DashboardLayout;
