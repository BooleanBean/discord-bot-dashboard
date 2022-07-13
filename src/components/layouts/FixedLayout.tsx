import { useEffect, useState } from "react";

import BckHeader from "#/components/headers/BckHeader";

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
      <BckHeader titleOpacity={opacity} title={title} />

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
