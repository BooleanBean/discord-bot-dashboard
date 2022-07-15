import { NextPage } from "next";

export type NextPageWithLayout<P = Record<string, unknown>> = NextPage<P> & {
  /**
   * Render the page in the provided layout.
   * @example Page.getLayout = (page) => (<Layout>{page}</Layout>)
   */
  getLayout?: (page: ReactElement) => ReactNode;
};
