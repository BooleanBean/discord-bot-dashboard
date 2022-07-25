import * as React from "react";

import Footer from "#/lib/components/footer";

import Header from "#components/headers/Header";
import { Container } from "#components/StyledComponents";

type Props = {
   children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
   return (
      <>
         <Header />
         <Container as="main">{children}</Container>
         <Footer />
      </>
   );
};

export default Layout;
