import * as React from "react";
import "twin.macro";

import { Container } from "#components/StyledComponents";

type Props = Record<string, unknown>;

// TODO:
const DashboardHeader: React.FC<Props> = () => {
   return (
      <header tw="bg-tw-secondary border-b border-gray-800">
         <Container tw="flex h-14 items-center">dashboard header</Container>
      </header>
   );
};

export default DashboardHeader;
