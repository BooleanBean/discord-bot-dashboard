import { useEffect, useState } from "react";

import ArrowLink from "#/components/links/ArrowLink";
import PrimaryLink from "#/components/links/PrimaryLink";

type Props = {
  children: React.ReactNode;
  title?: string;
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

    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  });

  return (
    <>
      <div className="sticky top-0 z-10 bg-black bg-opacity-40 backdrop-blur-lg backdrop-filter">
        <div className="container mx-auto flex h-10 items-center px-2">
          <ArrowLink as={PrimaryLink} href="/" direction="left">
            Back to home
          </ArrowLink>
          <h4
            style={{ opacity }}
            className="mx-auto -translate-x-1/2 transition duration-200"
          >
            {title && title}
          </h4>
        </div>
        <div
          style={{ opacity }}
          className="absolute bottom-0 h-px w-full bg-tw-border transition-all duration-200"
        />
      </div>

      <div className="container relative mx-auto">
        <h1
          style={{ opacity: opacity === 0 ? 1 : 1 - opacity }}
          className="absolute top-10 transition duration-200"
        >
          {title && title}
        </h1>
        {children}
      </div>
    </>
  );
};

export default FixedLayout;
