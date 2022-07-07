import type { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth";
import { guilds } from "../../../../../__mocks__/guilds";
import { Guild } from "../../../../common/types";
import { options } from "../../auth/[...nextauth]";

type Data = {
    data: Guild[] | null;
    status: number;
    error: string | null;
};

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const session = await unstable_getServerSession(req, res, options);

    if (session) {
        setTimeout(() => res.status(200).json({ data: guilds, status: 200, error: null }), 3000);
    } else {
        res.status(400).json({ data: null, status: 400, error: "Bad session" });
    }
};
78;
