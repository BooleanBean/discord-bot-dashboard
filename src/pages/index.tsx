import Seo from "../common/components/seo-nxts/seo";
import Layout from "../common/layouts/Layout";
import { NextPageWithLayout } from "../common/types";

type Props = {};

const Home: NextPageWithLayout<Props> = () => {
    return (
        <>
            <Seo title="Home" />
            <div>under construction</div>
        </>
    );
};

Home.getLayout = page => {
    return <Layout>{page}</Layout>;
};

export default Home;
