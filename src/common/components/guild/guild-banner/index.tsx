import { Snowflake } from "discord-api-types/globals";
import Image, { ImageProps } from "next/image";
import type { FC } from "react";
import { getGuildBannerURL } from "../../../../utils/api";

type Props = {
    id: Snowflake;
    banner?: string | null;
    alt: ImageProps["alt"];
    className?: string;
};

const GuildBanner: FC<Props> = ({ id, banner, className, ...props }) => {
    return (
        <Image
            placeholder="blur"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className={className}
            blurDataURL="https://exploringbits.com/wp-content/uploads/2022/01/discord-banner-4.gif"
            {...props}
            src={getGuildBannerURL(id, banner)}
        />
    );
};

export default GuildBanner;
