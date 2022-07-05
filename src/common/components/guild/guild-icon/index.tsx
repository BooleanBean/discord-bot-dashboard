import { Snowflake } from "discord-api-types/globals";
import Image, { ImageProps } from "next/image";
import type { FC } from "react";
import { getGuildIconURL } from "../../../../utils/api";

type Props = {
    id: Snowflake;
    icon?: string | null;
    alt: ImageProps["alt"];
    className?: string;
};

const GuildIcon: FC<Props> = ({ id, icon, className, ...props }) => {
    return (
        <Image
            placeholder="blur"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className={className}
            blurDataURL="https://seeklogo.com/images/D/discord-icon-new-2021-logo-09772BF096-seeklogo.com.png"
            {...props}
            src={getGuildIconURL(id, icon)}
        />
    );
};

export default GuildIcon;
