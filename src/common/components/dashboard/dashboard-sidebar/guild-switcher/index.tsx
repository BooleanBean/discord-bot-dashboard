import { Combobox, Transition } from "@headlessui/react";
import { SelectorIcon } from "@heroicons/react/solid";
import { APIGuild } from "discord-api-types/v10";
import Image from "next/image";

import { FC, Fragment, useEffect, useState } from "react";
import { getGuildIconURL } from "../../../../../utils/api";
import { useGuilds } from "../../../../../utils/api/hooks";

type Props = {};

const GuildSwitcher: FC<Props> = () => {
    const { loading, data, error } = useGuilds();
    const [selectedGuild, setSelectedGuild] = useState<APIGuild | null>(null);
    const [query, setQuery] = useState("");
    const [isOpen, setOpen] = useState(false);
    const filteredGuilds =
        query === ""
            ? data
            : data?.filter(g =>
                  g.name
                      .toLowerCase()
                      .replace(/\s+/g, "")
                      .includes(query.toLowerCase().replace(/\s+/g, ""))
              );

    useEffect(() => {
        !loading && setSelectedGuild(data![2]);
    }, [loading]);

    if (loading) return <div>loading...</div>;
    if (!data || !filteredGuilds || !selectedGuild) return <div>No data</div>;
    if (error) return <div>An error occured</div>;

    return (
        <div className="mb-6">
            <Combobox value={selectedGuild} onChange={setSelectedGuild}>
                <div className="relative">
                    <div className="relative">
                        {isOpen && (
                            <Combobox.Input
                                className="rounded-lg w-full text-sm leading-5 bg-gray-800 text-white"
                                displayValue={(guild: APIGuild) => guild.name}
                                onChange={event => setQuery(event.target.value)}
                            />
                        )}

                        {!isOpen && (
                            <div className="flex items-center bg-gray-800 border border-gray-700 rounded-lg p-2">
                                <div className="relative h-12 w-12 overflow-hidden rounded-xl">
                                    <Image
                                        src={getGuildIconURL(
                                            selectedGuild.id,
                                            selectedGuild.icon
                                        )}
                                        blurDataURL="https://seeklogo.com/images/D/discord-icon-new-2021-logo-09772BF096-seeklogo.com.png"
                                        layout="fill"
                                        placeholder="blur"
                                    />
                                </div>
                                <span className="ml-3 text-sm font-semibold">
                                    {selectedGuild.name}
                                    <div className="text-xs text-gray-400">
                                        <span className="text-green-400 text-bold mr-1">
                                            Online 48205
                                        </span>
                                        • 89505
                                    </div>
                                </span>
                            </div>
                        )}
                        <Combobox.Button
                            onClick={() => setOpen(true)}
                            className="absolute inset-y-0 right-0 flex items-center pr-2"
                        >
                            <SelectorIcon
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                            />
                        </Combobox.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                        beforeLeave={() => setOpen(false)}
                        afterLeave={() => {
                            setQuery("");
                        }}
                    >
                        <Combobox.Options className="z-10 divide-y cursor-pointer rounded-lg divide-gray-700 absolute top-12 w-full bg-gray-800 text-white">
                            {filteredGuilds.length === 0 && query !== "" ? (
                                <div className="p-4">Nothing found.</div>
                            ) : (
                                filteredGuilds.map(guild => (
                                    <Combobox.Option
                                        key={guild.id}
                                        className={({ active }) => "p-4"}
                                        value={guild}
                                    >
                                        {({ selected, active }) => (
                                            <div className="flex items-center">
                                                <div className="relative h-12 w-12 overflow-hidden rounded-xl">
                                                    <Image
                                                        src={getGuildIconURL(
                                                            guild.id,
                                                            guild.icon
                                                        )}
                                                        blurDataURL="https://seeklogo.com/images/D/discord-icon-new-2021-logo-09772BF096-seeklogo.com.png"
                                                        layout="fill"
                                                        placeholder="blur"
                                                    />
                                                </div>
                                                <span className="ml-3 text-sm font-semibold">
                                                    {guild.name}
                                                    <div className="text-xs text-gray-400">
                                                        <span className="text-green-400 text-bold mr-1">
                                                            Online 48205
                                                        </span>
                                                        • 89505
                                                    </div>
                                                </span>
                                            </div>
                                        )}
                                    </Combobox.Option>
                                ))
                            )}
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    );
};

export default GuildSwitcher;
