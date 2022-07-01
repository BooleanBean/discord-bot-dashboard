import { signIn } from "next-auth/react";
import Head from "next/head";
import PrimaryButton from "../../common/components/buttons/primary";
import type { NextPageWithLayout } from "../../common/types";

const SignIn: NextPageWithLayout = () => {
	const handleSignIn = async () => {
		await signIn("discord", { redirect: true });
	};

	return (
		<>
			<Head>
				<title>Sign In | Clay Bot</title>
				<meta name="description" content="A bot." />
			</Head>

			<div className="h-screen w-screen flex items-center justify-center">
				<PrimaryButton onClick={handleSignIn}>Sign In</PrimaryButton>
			</div>
		</>
	);
};

export default SignIn;
