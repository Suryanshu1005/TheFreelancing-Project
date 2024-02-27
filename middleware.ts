import {NextResponse} from "next/server";
import type {NextRequest} from "next/server";
import {isAuth} from "./https/get";
import {Session} from "@supabase/supabase-js";
import {supabaseComponent} from "./supabase/supabase";
import {redirect} from "next/navigation";

interface session {
  session: Session | null;
}

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const data: session = await isAuth(request);
  const pathname = request.nextUrl.pathname;
  const homepageUrl = request.url;

  // if (pathname === "/") {
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }

  // if (!data?.session && pathname === "/home") {
  //   return NextResponse.redirect(new URL("/", request.url));
  // }

  // if (data?.session && pathname === "/login") {
  //   return NextResponse.redirect(new URL("/home", request.url));
  // }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/home", "/", "/login"],
};
