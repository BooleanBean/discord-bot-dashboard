import Seo from "../common/components/seo-nxts/seo";
import Layout from "../common/layouts/Layout";
import { NextPageWithLayout } from "../common/types";
import UnstyledLink from "../links/unstyled-link";

type Props = {};

const Home: NextPageWithLayout<Props> = () => {
    return (
        <>
            <Seo title="Home" />
            <div><UnstyledLink href="http://v1.dsh.booleanbean.tk/">Click here to go current deployement</UnstyledLink></div>
        </>
    );
};

Home.getLayout = page => {
    return <Layout>{page}</Layout>;
};

export default Home;
