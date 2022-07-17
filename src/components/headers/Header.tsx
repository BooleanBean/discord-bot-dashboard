import "twin.macro";

import { Container } from "#/components/ExComponents";
import ButtonLink from "#/components/links/ButtonLink";
import PrimaryLink from "#/components/links/PrimaryLink";
import UnstyledLink from "#/components/links/UnstyledLink";

type Props = Record<string, unknown>;

const Header: React.FC<Props> = () => {
  return (
    <header>
      <Container tw="flex h-16 items-center justify-between">
        <div tw="flex h-full flex-1 items-center">
          <UnstyledLink href="/" tw="text-xl font-semibold">
            Discord Bot
          </UnstyledLink>

          <nav tw="ml-10 hidden space-x-4 lg:flex lg:items-center">
            <PrimaryLink href="/settings">API</PrimaryLink>
            <PrimaryLink href="/settings">Docs</PrimaryLink>
            <PrimaryLink href="/settings">Settings</PrimaryLink>
          </nav>
        </div>
        <div tw="flex h-full items-center">
          <ButtonLink href="/sign-in">Sign In</ButtonLink>
        </div>
      </Container>
    </header>
  );
};

export default Header;
