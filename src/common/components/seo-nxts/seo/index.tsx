import { NextSeo, NextSeoProps } from "next-seo";
import { FC } from "react";

type Props = NextSeoProps & {};

const Seo: FC<Props> = ({ ...props }) => {
    return <NextSeo {...props} />;
};

export default Seo;
