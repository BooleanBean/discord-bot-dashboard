import * as React from "react";
import "twin.macro";

import ArrowLink from "#/lib/components/links/ArrowLink";
import PrimaryLink from "#/lib/components/links/PrimaryLink";
import { Container } from "#/lib/components/StyledComponents";

type Props = {
   title: string;
   titleOpacity: number;
};

const StickyHeader: React.FC<Props> = ({ title, titleOpacity }) => {
   return (
      <header className="sticky top-0 z-10 bg-black bg-opacity-40 backdrop-blur-lg backdrop-filter">
         <Container tw="relative flex h-14 items-center px-2">
            <div tw="z-10">
               <ArrowLink as={PrimaryLink} href="/" direction="left">
                  Back to home
               </ArrowLink>
            </div>
            <h4
               style={{ opacity: titleOpacity }}
               tw="absolute left-0 right-0 text-center -translate-x-1/2 transition duration-200"
            >
               {title}
            </h4>
         </Container>
         <hr
            style={{ opacity: titleOpacity }}
            tw="absolute bottom-0 h-px w-full border-gray-800 transition-all duration-200"
         />
      </header>
   );
};

export default StickyHeader;
