import { FC, useEffect } from "react";
import { setGuild } from "../../../../setup/guild-manager";
import { useAppDispatch, useAppSelector } from "../../../../setup/hooks";
import { getGuildIconURL } from "../../../../utils/api";
import { useGuilds } from "../../../../utils/api/hooks";

type GuildCardProps = {};

const GuildCard: FC<GuildCardProps> = () => {
	const guild = useAppSelector((state) => state.guild.data);
	const dispatch = useAppDispatch();
	const { data: guilds, isLoading } = useGuilds();

	useEffect(() => {
		dispatch(setGuild(guilds?.[0] ?? null));
	}, [isLoading]);

	if (isLoading && !guild) return <div>loading..</div>;

	return (
		<div className="mb-8 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
			<div className="flex items-center space-x-4 p-2">
				<img
					className="border-2 border-gray-600	w-12 h-12 rounded-xl"
					src={getGuildIconURL(guild?.id!, guild?.icon!)}
					alt={guild?.name}
				/>
				<div className="space-y-1 font-medium dark:text-white">
					<div>{guild?.name}</div>
					<div className="text-sm text-gray-500 dark:text-gray-400">
						Online {guild?.stats?.onlineMemberCount} • {guild?.stats?.memberCount}
					</div>
				</div>
			</div>
		</div>
	);
};

export default GuildCard;
