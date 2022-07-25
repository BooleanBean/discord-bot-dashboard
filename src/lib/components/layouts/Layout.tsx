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
         <FadeInUpTransition in>
            <Container as="main">{children}</Container>
         </FadeInUpTransition>
         <Footer />
      </>
   );
};

export default Layout;
