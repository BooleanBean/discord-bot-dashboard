import "twin.macro";

import Layout from "#components/layouts/Layout";
import Seo from "#components/Seo";

import { NextPageWithLayout } from "#/global-types";

const MeetTheTeam: NextPageWithLayout = () => {
   return (
      <section id="hero" tw="py-20">
         <div tw="flex flex-col text-center w-full mb-16">
            <h2 tw="sm:text-3xl">Meet The Team</h2>
            <p tw="lg:w-2/3 mx-auto text-tw-primary-medium mt-4">
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit voluptatum
               voluptatem aliquid voluptate ipsam impedit enim corrupti praesentium libero
               velit ex a doloribus vero necessitatibus, nihil ad qui architecto
               molestias?
            </p>
         </div>
         <div tw="flex flex-wrap -m-2">
            <div tw="p-2 lg:w-1/3 md:w-1/2 w-full">
               <div tw="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                  <div tw="flex-grow">
                     <h4>BooleanBean</h4>
                     <small tw="text-tw-primary-dark">Founder</small>
                  </div>
               </div>
            </div>
            <div tw="p-2 lg:w-1/3 md:w-1/2 w-full">
               <div tw="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                  <div tw="flex-grow">
                     <h4>Beyo Teas</h4>
                     <small tw="text-tw-primary-dark">GFX Designer</small>
                  </div>
               </div>
            </div>
            <div tw="p-2 lg:w-1/3 md:w-1/2 w-full">
               <div tw="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                  <div tw="flex-grow">
                     <h4>Beyo Teas</h4>
                     <small tw="text-tw-primary-dark">GFX Designer</small>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

MeetTheTeam.getLayout = (page) => (
   <Layout>
      <Seo templateTitle="Meet The Team" />
      {page}
   </Layout>
);

export default MeetTheTeam;
