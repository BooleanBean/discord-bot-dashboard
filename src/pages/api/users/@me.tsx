import type { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";
import { APIResponse, PartialGuild } from "../../../common/types";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<APIResponse<PartialGuild>>
) {
	try {
		const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

		const result = await fetch("http://discord.com/api/users/@me", {
			headers: {
				Authorization: `Bearer ${session?.accessToken}`
			}
		});

		const data = await result.json();

		return res.json({
			isLoading: !data.message && !data,
			isError: data.message ? data : null,
			data: !data.message ? data : undefined
		});
	} catch (error) {
		return res.json({
			isLoading: false,
			isError: error,
			data: undefined
		});
	}
}
