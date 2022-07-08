import Layout from "../common/layouts/Layout";
import { NextPageWithLayout } from "../common/types";

type Props = {};

const Home: NextPageWithLayout<Props> = () => {
    return <div>under construction</div>;
};

Home.getLayout = page => {
    return <Layout>{page}</Layout>;
};

export default Home;
