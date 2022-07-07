import { Guild } from "../src/common/types";

export const guilds: Guild[] = [
    {
        id: "992478224401567887",
        name: "Test Guild",
        description: "This is a test guild.",
        icon: null,
        owner_id: "4474979879879823",
        prefix: "!",
        stats: {
            member_count: 20,
            online_member_count: 4,
            commands_used: 60,
            new_members: -20,
            messages_sent: 546
        }
    },
    {
        id: "992478346199961741",
        name: "Test Guild 2",
        description: "This is a test guild.",
        icon: null,
        owner_id: "4474979879879823",
        prefix: "?",
        stats: {
            member_count: 2003,
            online_member_count: 1509,
            commands_used: 10,
            new_members: 35,
            messages_sent: 79546
        }
    },
    {
        id: "992478143304695894",
        name: "Test Guild 3",
        description: "This is a test guild.",
        icon: null,
        owner_id: "4474979879879823",
        prefix: "?",
        stats: {
            member_count: 2003,
            online_member_count: 1509,
            commands_used: 60,
            new_members: 257,
            messages_sent: 4546
        }
    }
];
