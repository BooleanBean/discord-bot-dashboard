import { getToken } from "next-auth/jwt";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
	const { pathname } = req.nextUrl;

	if (pathname.startsWith("/_next") || pathname.startsWith("/api/auth")) {
		return NextResponse.next();
	}

	const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
	const accessableRoutes = ["/auth/sign-in"];

	if (session && accessableRoutes.includes(pathname)) {
		req.nextUrl.pathname = "/";
		return NextResponse.redirect(req.nextUrl);
	}

	if (!session) {
		if (accessableRoutes.includes(pathname)) return NextResponse.rewrite(req.nextUrl);

		req.nextUrl.pathname = "/auth/sign-in";
		return NextResponse.redirect(req.nextUrl);
	}

	return NextResponse.next();
}
