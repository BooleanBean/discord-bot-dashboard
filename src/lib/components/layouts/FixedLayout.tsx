import React, { useEffect, useState } from "react";
import { FadeInUpTransition } from "react-transitions-library";
import tw from "twin.macro";

import StickyHeader from "#components/headers/StickyHeader";
import { Container } from "#components/StyledComponents";

type Props = {
   children: React.ReactNode;
   title: string;
   isTitleCentered?: boolean;
};

const FixedLayout: React.FC<Props> = ({ children, title, isTitleCentered }) => {
   const [opacity, setOpacity] = useState<number>(0);

   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY > 50) {
            setOpacity(1);
         } else {
            setOpacity(window.scrollY / 50);
         }
      };

      // initialize opacity
      handleScroll();

      document.addEventListener("scroll", handleScroll);
      return () => document.removeEventListener("scroll", handleScroll);
   });

   return (
      <>
         {/* TODO: fix: position stops working when scrolled half of the page */}
         <StickyHeader titleOpacity={opacity} title={title} />

         <Container tw="pb-8">
            <h1
               style={{ opacity: opacity === 0 ? 1 : 1 - opacity }}
               css={[
                  tw`mt-10 transition duration-200`,
                  isTitleCentered && tw`text-center`,
               ]}
            >
               {title}
            </h1>

            {!isTitleCentered && <hr tw="border-tw-border my-10" />}
            <FadeInUpTransition in>{children}</FadeInUpTransition>
         </Container>
      </>
   );
};

export default FixedLayout;
