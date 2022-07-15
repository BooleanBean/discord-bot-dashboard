import Container from "#/components/Container";
import Header from "#/components/headers/Header";

import MainTag from "#/tags/MainTag";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />

      <Container as={MainTag}>{children}</Container>

      <footer>footer goes here</footer>
    </>
  );
};

export default Layout;
