import "twin.macro";

import UnstyledLink from "#/lib/components/links/UnstyledLink";
import Seo from "#/lib/components/Seo";

import FixedLayout from "#components/layouts/FixedLayout";

import { NextPageWithLayout } from "#/global-types";

const HelpCenter: NextPageWithLayout = () => {
   return (
      <section tw="flex flex-col items-center">
         <input
            type="search"
            name="Search"
            placeholder="Type something to search..."
            tw="my-8 w-full lg:w-1/2 rounded-lg border-transparent bg-tw-background-secondary font-semibold text-tw-primary-light focus:border-2 focus:border-primary-500 focus:ring-0"
         />
         <div tw="flex w-full flex-col divide-y divide-tw-border sm:flex-row sm:divide-y-0 sm:divide-x sm:px-8 lg:px-12 xl:px-32">
            <div tw="flex w-full flex-col divide-y divide-tw-border">
               <UnstyledLink
                  rel="noopener noreferrer"
                  href="#"
                  tw="flex items-center justify-center p-4 hover:bg-tw-background-secondary sm:py-8 lg:py-12 transition ease-out"
               >
                  Billing
               </UnstyledLink>
               <UnstyledLink
                  rel="noopener noreferrer"
                  href="#"
                  tw="flex items-center justify-center p-4 hover:bg-tw-background-secondary sm:py-8 lg:py-12 transition ease-out"
               >
                  Support
               </UnstyledLink>
               <UnstyledLink
                  rel="noopener noreferrer"
                  href="#"
                  tw="flex items-center justify-center p-4 hover:bg-tw-background-secondary sm:py-8 lg:py-12 transition ease-out"
               >
                  Account
               </UnstyledLink>
            </div>
            <div tw="flex w-full flex-col divide-y divide-tw-border">
               <UnstyledLink
                  rel="noopener noreferrer"
                  href="#"
                  tw="flex items-center justify-center p-4 hover:bg-tw-background-secondary sm:py-8 lg:py-12 transition ease-out"
               >
                  Features
               </UnstyledLink>
               <UnstyledLink
                  rel="noopener noreferrer"
                  href="#"
                  tw="flex items-center justify-center  p-4 hover:bg-tw-background-secondary sm:py-8 lg:py-12 transition ease-out"
               >
                  Thing 1
               </UnstyledLink>
               <UnstyledLink
                  rel="noopener noreferrer"
                  href="#"
                  tw="flex items-center justify-center p-4 hover:bg-tw-background-secondary sm:py-8 lg:py-12 transition ease-out"
               >
                  Thing 2
               </UnstyledLink>
            </div>
            <div tw="hidden w-full divide-y divide-tw-border sm:flex sm:flex-col">
               <UnstyledLink
                  rel="noopener noreferrer"
                  href="#"
                  tw="flex items-center justify-center p-4 hover:bg-tw-background-secondary sm:py-8 lg:py-12 transition ease-out"
               >
                  Thing 3
               </UnstyledLink>
               <UnstyledLink
                  rel="noopener noreferrer"
                  href="#"
                  tw="flex items-center justify-center p-4 hover:bg-tw-background-secondary sm:py-8 lg:py-12 transition ease-out"
               >
                  Privacy
               </UnstyledLink>
               <UnstyledLink
                  rel="noopener noreferrer"
                  href="#"
                  tw="flex items-center justify-center p-4 hover:bg-tw-background-secondary sm:py-8 lg:py-12 transition ease-out"
               >
                  Developers
               </UnstyledLink>
            </div>
         </div>
      </section>
   );
};

HelpCenter.getLayout = (page) => (
   <FixedLayout title="Help Center" isTitleCentered>
      <Seo templateTitle="Help Center" />
      {page}
   </FixedLayout>
);

export default HelpCenter;
