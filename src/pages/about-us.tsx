import "twin.macro";

import Layout from "#components/layouts/Layout";
import Seo from "#components/Seo";

import { NextPageWithLayout } from "#/global-types";

const AboutUs: NextPageWithLayout = () => {
   return (
      <section id="hero" tw="py-20">
         <div tw="flex flex-col text-center w-full mb-16">
            <h2 tw="sm:text-3xl">About Us</h2>
            <p tw="lg:w-2/3 mx-auto text-tw-primary-medium mt-4">
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit voluptatum
               voluptatem aliquid voluptate ipsam impedit enim corrupti praesentium libero
               velit ex a doloribus vero necessitatibus, nihil ad qui architecto
               molestias?
            </p>
         </div>
      </section>
   );
};

AboutUs.getLayout = (page) => (
   <Layout>
      <Seo templateTitle="Meet The Team" />
      {page}
   </Layout>
);

export default AboutUs;
