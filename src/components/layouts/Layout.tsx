import { Container } from "#/components/ExComponents";
import Header from "#/components/headers/Header";

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
