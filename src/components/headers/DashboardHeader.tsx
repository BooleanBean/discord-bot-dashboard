import "twin.macro";

import { Container } from "#/components/ExComponents";

type Props = Record<string, unknown>;

const BckHeader: React.FC<Props> = () => {
  return (
    <header tw="bg-black bg-opacity-40 backdrop-blur-lg backdrop-filter">
      <Container tw="flex h-16 items-center px-2">header</Container>
    </header>
  );
};

export default BckHeader;
