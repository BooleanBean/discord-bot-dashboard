import * as React from "react";

import clsx from "#/lib/clsxm";

import UnstyledLink, { UnstyledLinkProps } from "#components/links/UnstyledLink";

// TODO: refactor to twin.macro
const PrimaryLink = React.forwardRef<HTMLAnchorElement, UnstyledLinkProps>(
   ({ children, className, ...rest }, ref) => {
      return (
         <UnstyledLink
            ref={ref}
            {...rest}
            className={clsx(
               "inline-flex items-center",
               "font-medium text-primary-600 hover:text-primary-500",
               "focus:outline-none focus-visible:rounded focus-visible:ring focus-visible:ring-primary-500 focus-visible:ring-offset-2",
               className
            )}
         >
            {children}
         </UnstyledLink>
      );
   }
);

export default PrimaryLink;
