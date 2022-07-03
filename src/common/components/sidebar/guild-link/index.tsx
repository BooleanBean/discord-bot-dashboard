import Link from "next/link";
import { useRouter } from "next/router";
import type { FC } from "react";
import { classNames } from "../../../../utils";
import { getIcon } from "../../../../utils/icons";
import { NavigationLink } from "../../../types";

type GuildLinkProps = {
	link: NavigationLink;
};

const GuildLink: FC<GuildLinkProps> = ({ link }) => {
	const router = useRouter();

	return (
		<Link href={link.href} passHref>
			<a
				className={classNames(
					router.asPath === link.href
						? "after:content-[''] after:left-0 after:absolute after:w-[0.25rem] after:h-6 after:rounded-xl after:bg-cyan-400  bg-gray-700/70 text-white/80"
						: "text-white/70 hover:bg-gray-700/80 hover:text-white",
					"relative w-full whitespace-nowrap flex items-center px-4 py-2 rounded-lg duration-100 transition-colors ease-out"
				)}
				aria-current={router.asPath === link.href ? "page" : undefined}
			>
				<span className="w-6 h-6">{getIcon(link.icon)}</span>
				<span className="ml-3 font-medium text-md">{link.name}</span>
			</a>
		</Link>
	);
};

export default GuildLink;
