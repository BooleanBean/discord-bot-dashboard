import React from "react";

import Header from "#/lib/components/headers/Header";
import { Container } from "#/lib/components/StyledComponents";

type Props = {
   children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
   return (
      <>
         <Header />

         <Container as="main">{children}</Container>

         <footer>footer goes here</footer>
      </>
   );
};

export default Layout;
