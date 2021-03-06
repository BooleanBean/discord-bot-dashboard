import Link, { LinkProps } from "next/link";
import * as React from "react";

import clsx from "#/lib/clsxm";

export type UnstyledLinkProps = {
   href: string;
   children: React.ReactNode;
   openNewTab?: boolean;
   nextLinkProps?: Omit<LinkProps, "href">;
   className?: string;
} & React.ComponentPropsWithRef<"a">;

// TODO: refactor to twin.macro
const UnstyledLink = React.forwardRef<HTMLAnchorElement, UnstyledLinkProps>(
   ({ children, href, openNewTab, className, nextLinkProps, ...rest }, ref) => {
      const isNewTab =
         openNewTab !== undefined
            ? openNewTab
            : href && !href.startsWith("/") && !href.startsWith("#");

      if (!isNewTab) {
         return (
            <Link href={href} {...nextLinkProps}>
               <a ref={ref} {...rest} className={className}>
                  {children}
               </a>
            </Link>
         );
      }

      return (
         <a
            ref={ref}
            target="_blank"
            rel="noopener noreferrer"
            href={href}
            {...rest}
            className={clsx("cursor-newtab", className)}
         >
            {children}
         </a>
      );
   }
);

export default UnstyledLink;
