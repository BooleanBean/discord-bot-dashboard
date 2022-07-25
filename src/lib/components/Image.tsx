import NextImage, { ImageProps } from "next/image";
import * as React from "react";

import clsxm from "#/lib/clsxm";

type Props = {
   useSkeleton?: boolean;
   imgClassName?: string;
   blurClassName?: string;
   alt: string;
   width: string | number;
} & (
   | { width: string | number; height: string | number }
   | { layout: "fill"; width?: string | number; height?: string | number }
) &
   ImageProps;

/**
 * TODO: refactor to twin.macro
 */
export default function Image({
   useSkeleton = false,
   src,
   width,
   height,
   alt,
   className,
   imgClassName,
   blurClassName,
   ...rest
}: Props) {
   const [status, setStatus] = React.useState(useSkeleton ? "loading" : "complete");
   const widthIsSet = className?.includes("w-") ?? false;

   return (
      <figure
         style={!widthIsSet ? { width: `${width}px` } : undefined}
         className={className}
      >
         <NextImage
            className={clsxm(
               imgClassName,
               status === "loading" && clsxm("animate-pulse", blurClassName)
            )}
            src={src}
            width={width}
            height={height}
            alt={alt}
            onLoadingComplete={() => setStatus("complete")}
            layout="responsive"
            {...rest}
         />
      </figure>
   );
}
