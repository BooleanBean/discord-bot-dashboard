import type { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth";
import { guilds } from "../../../../../__mocks__/guilds";
import { Guild } from "../../../../common/types";
import { options } from "../../auth/[...nextauth]";

type Data = {
    data: Guild | null;
    status: number;
    error: string | null;
};

async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const session = await unstable_getServerSession(req, res, options);
    const { guildId } = req.query;

    if (session) {
        const guild = guilds.find(g => g.id === guildId) ?? null;

        !guild && res.status(404).json({ data: null, status: 404, error: "Bad guild" });

        setTimeout(
            () => res.status(200).json({ data: guild, status: 200, error: null }),
            3000
        );
    } else {
        res.status(400).json({ data: null, status: 400, error: "Bad session" });
    }
}

export default handler;
