import * as React from "react";
import { FadeInUpTransition } from "react-transitions-library";

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
         <Container as="main">
            <FadeInUpTransition in>{children}</FadeInUpTransition>
         </Container>
         <Footer />
      </>
   );
};

export default Layout;
