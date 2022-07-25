import "twin.macro";

import UnstyledLink, { UnstyledLinkProps } from "#/lib/components/links/UnstyledLink";

type Props = UnstyledLinkProps & {
   icon: React.ReactNode;
};

export default function FooterIcon({ icon, children, ...rest }: Props) {
   return (
      <UnstyledLink
         tw="transition-opacity duration-200 ease-out hover:opacity-75"
         target="_blank"
         rel="noreferrer"
         {...rest}
      >
         <span tw="sr-only">{children}</span>
         {icon}
      </UnstyledLink>
   );
}
