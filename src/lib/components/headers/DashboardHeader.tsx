import React from "react";
import "twin.macro";

import { Container } from "#/lib/components/StyledComponents";

type Props = Record<string, unknown>;

// TODO:
const DashboardHeader: React.FC<Props> = () => {
   return (
      <header tw="bg-black bg-opacity-40 backdrop-blur-lg backdrop-filter">
         <Container tw="flex h-16 items-center px-2">header</Container>
      </header>
   );
};

export default DashboardHeader;
