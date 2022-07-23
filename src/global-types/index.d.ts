import { NextPage } from "next";
import styledImport, { css as cssImport, CSSProp } from "styled-components";
import "twin.macro";

export type NextPageWithLayout<P = Record<string, unknown>> = NextPage<P> & {
   /**
    * Render the page in the provided layout.
    * @example Page.getLayout = (page) => (<Layout>{page}</Layout>)
    */
   getLayout?: (page: ReactElement) => ReactNode;
};

declare module "twin.macro" {
   const styled: typeof styledImport;
   const css: typeof cssImport;
}

declare module "react" {
   interface HTMLAttributes<T> extends DOMAttributes<T> {
      css?: CSSProp;
      tw?: string;
   }
   interface SVGProps extends SVGProps<SVGSVGElement> {
      css?: CSSProp;
      tw?: string;
   }
}
