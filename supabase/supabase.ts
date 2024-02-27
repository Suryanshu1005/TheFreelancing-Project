import {
  createClientComponentClient,
  createRouteHandlerClient,
} from "@supabase/auth-helpers-nextjs";

export const supabaseComponent = createClientComponentClient();
export const supabaseRouteHandler = (cookies: any) => {
  const supabase = createRouteHandlerClient({cookies});
  return supabase;
};
