import Image from "next/image";
import { FC } from "react";
import { getGuildIconURL } from "../../../../utils/api";

type GuildCardProps = {};

const GuildCard: FC<GuildCardProps> = () => {
    return (
        <div className="mb-8 h-20 rounded-lg border shadow-lg bg-gray-800 border-gray-700 flex items-center justify-center">
            <div className="relative h-12 w-12 overflow-hidden rounded-xl">
                <Image
                    src={getGuildIconURL("")}
                    blurDataURL="https://seeklogo.com/images/D/discord-icon-new-2021-logo-09772BF096-seeklogo.com.png"
                    layout="fill"
                    placeholder="blur"
                />
            </div>
            <div className="ml-3">
                <div className="text-sm font-semibold tracking-tight text-white">
                    Clay's Support
                </div>
                <div className="text-xs text-gray-400">
                    <span className="text-green-400 text-bold">Online </span>48205 • 89505
                </div>
            </div>
        </div>
    );
};

export default GuildCard;
