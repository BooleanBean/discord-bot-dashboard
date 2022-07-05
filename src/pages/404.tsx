import Image from "next/image";
import Link from "next/link";
import NotFoundImage from "../assets/imgs/not-found.gif";
import PrimaryButton from "../common/components/buttons/primary";

const NotFound = () => {
    return (
        <div className="relative h-screen bg-pink-200">
            <Image
                placeholder="blur"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                blurDataURL={NotFoundImage.src}
                src={NotFoundImage}
            />
            <div className="inset-0 bg-black opacity-30 absolute"></div>
            <div className="relative h-full flex flex-col justify-center items-center">
                <h4 className="text-4xl font-semibold uppercase mb-4">Got Lost?</h4>
                <Link href="/app/guilds" passHref>
                    <PrimaryButton>Go back</PrimaryButton>
                </Link>
            </div>
        </div>
    );
};
export default NotFound;
