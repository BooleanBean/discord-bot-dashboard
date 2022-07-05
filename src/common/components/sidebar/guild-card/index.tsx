import { FC } from "react";
import { getGuildIconURL } from "../../../../utils/api";

type GuildCardProps = {};

const GuildCard: FC<GuildCardProps> = () => {
    return (
        <div className="mb-8 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center space-x-4 p-2">
                <img
                    className="border-2 border-gray-600	w-12 h-12 rounded-xl"
                    src={getGuildIconURL("")}
                    alt={"Example"}
                />
                <div className="space-y-1 font-medium dark:text-white">
                    <div>Example guild</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                        Online 48205 • 89505
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GuildCard;
