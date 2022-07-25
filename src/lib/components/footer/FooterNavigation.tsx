import "twin.macro";

import UnderlineLink from "#/lib/components/links/UnderlineLink";
import { UnstyledLinkProps } from "#/lib/components/links/UnstyledLink";

type Props = {
   category: string;
   items: Item[];
};

type Item = UnstyledLinkProps;

export default function FooterNavigation({ items, category }: Props) {
   return (
      <nav>
         <h6 tw="font-bold uppercase text-primary-500 text-xs">{category}</h6>

         <ul tw="mt-4 space-y-2">
            {items.map((item) => (
               <li key={item.href}>
                  <UnderlineLink {...item} />
               </li>
            ))}
         </ul>
      </nav>
   );
}
