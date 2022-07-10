import { NextPage } from "next";

export type NextPageWithLayout<I = Record<string, unknown>> = NextPage<I> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
