import React, { useEffect, useState } from "react";
import "twin.macro";

import StickyHeader from "#/lib/components/headers/StickyHeader";
import { Container } from "#/lib/components/StyledComponents";

type Props = {
   children: React.ReactNode;
   title: string;
};

const FixedLayout: React.FC<Props> = ({ children, title }) => {
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
         <StickyHeader titleOpacity={opacity} title={title} />

         <Container>
            <h1
               style={{ opacity: opacity === 0 ? 1 : 1 - opacity }}
               tw="mt-10 transition duration-200"
            >
               {title}
            </h1>

            <hr tw="border-gray-800 my-10" />

            {children}
         </Container>
      </>
   );
};

export default FixedLayout;
