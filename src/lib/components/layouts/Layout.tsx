import React from "react";
import { FadeInUpTransition } from "react-transitions-library";

import Footer from "#/lib/components/Footer";
import Header from "#/lib/components/headers/Header";
import { Container } from "#/lib/components/StyledComponents";

type Props = {
   children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
   return (
      <>
         <Header />
         <Container as="main">
            <FadeInUpTransition in>{children}</FadeInUpTransition>
         </Container>
         <Footer />
      </>
   );
};

export default Layout;
