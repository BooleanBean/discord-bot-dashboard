import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import MainLayout from "../../../../common/layouts/MainLayout";
import { NextPageWithLayout } from "../../../../common/types";
import { useCurrentUser } from "../../../../utils/api/hooks";

type GuildProps = {};

const Guild: NextPageWithLayout<GuildProps> = () => {
    const router = useRouter();
    const { data: currentUser, loading, error } = useCurrentUser();

    if (loading) return <div>loading...</div>;
    if (!currentUser) return <div>No data</div>;
    if (error) return <div>An error occured</div>;

    return (
        <>
            <Head>
                <title>Guild Dashboard | Clay</title>
                <meta name="description" content="A bot." />
            </Head>

            <div className="bg-yellow-100 rounded-lg py-5 px-6 my-10 text-black">
                Hello {currentUser.username}, the site currently being viewed is in alpha version,
                it may contain major changes or errors & bugs.
            </div>

            <div>
                <h2 className="mb-2 text-3xl font-semibold tracking-wide">
                    Hello, {currentUser.username}!
                </h2>
                <p className="mb-6 text-lg font-normal text-gray-400">
                    Here are the some statistics might you want to see
                </p>
                <section>
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
                        <div className="bg-gray-800 rounded-lg overflow-hidden">
                            <div className="p-5">
                                <p className="mb-3 text-xs font-semibold leading-none tracking-wide text-gray-500 uppercase">
                                    New Members
                                </p>
                                <h2 className="text-3xl font-extrabold leading-none text-gray-200 truncate">
                                    +4,563
                                </h2>
                            </div>
                            <Link href="settings" passHref>
                                <a className="transition duration-200 ease-out hover:bg-gray-600/80 block text-sm bg-gray-700 text-indigo-500 w-full h-full px-4 py-2">
                                    View joined members
                                </a>
                            </Link>
                        </div>
                        <div className="bg-gray-800 rounded-lg overflow-hidden">
                            <div className="p-5">
                                <p className="mb-3 text-xs font-semibold leading-none tracking-wide text-gray-500 uppercase">
                                    Commands Executed
                                </p>
                                <h2 className="text-3xl font-extrabold leading-none text-gray-200 truncate">
                                    +4,563
                                </h2>
                            </div>
                            <Link href="settings" passHref>
                                <a className="transition duration-200 ease-out hover:bg-gray-600/80 block text-sm bg-gray-700 text-indigo-500 w-full h-full px-4 py-2">
                                    View joined members
                                </a>
                            </Link>
                        </div>
                        <div className="bg-gray-800 rounded-lg overflow-hidden">
                            <div className="p-5">
                                <p className="mb-3 text-xs font-semibold leading-none tracking-wide text-gray-500 uppercase">
                                    New Members
                                </p>
                                <h2 className="text-3xl font-extrabold leading-none text-gray-200 truncate">
                                    +4,563
                                </h2>
                            </div>
                            <Link href="settings" passHref>
                                <a className="transition duration-200 ease-out hover:bg-gray-600/80 block text-sm bg-gray-700 text-indigo-500 w-full h-full px-4 py-2">
                                    View joined members
                                </a>
                            </Link>
                        </div>
                        <div className="bg-gray-800 rounded-lg overflow-hidden">
                            <div className="p-5">
                                <p className="mb-3 text-xs font-semibold leading-none tracking-wide text-gray-500 uppercase">
                                    New Members
                                </p>
                                <h2 className="text-3xl font-extrabold leading-none text-gray-200 truncate">
                                    +4,563
                                </h2>
                            </div>
                            <Link href="settings" passHref>
                                <a className="transition duration-200 ease-out hover:bg-gray-600/80 block text-sm bg-gray-700 text-indigo-500 w-full h-full px-4 py-2">
                                    View joined members
                                </a>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

Guild.getLayout = page => {
    return <MainLayout>{page}</MainLayout>;
};

export default Guild;
