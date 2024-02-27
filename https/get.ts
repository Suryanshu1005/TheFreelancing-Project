import {supabaseRouteHandler} from "@/supabase/supabase";
import {createMiddlewareClient} from "@supabase/auth-helpers-nextjs";
import {ReadonlyRequestCookies} from "next/dist/server/web/spec-extension/adapters/request-cookies";
import {NextResponse} from "next/server";
import type {NextRequest} from "next/server";

export const isAuth = async (req: NextRequest) => {
  const res = NextResponse.next();

  const supabase = createMiddlewareClient({req, res});
  const {data, error} = await supabase.auth.getSession();

  return data;
};

export const getUser = async (cookies: () => ReadonlyRequestCookies) => {
  const supabase = supabaseRouteHandler(cookies);

  const {data: user} = await supabase.auth.getUser();

  return {user};
};
