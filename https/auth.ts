import {supabaseComponent} from "@/supabase/supabase";

export const loginWithGoogle = async () => {
  const {data, error} = await supabaseComponent.auth.signInWithOAuth({
    provider: "google",
    options: {
      queryParams: {
        access_type: "online",
        prompt: "consent",
      },
      redirectTo: `${location.origin}/auth/callback`,
    },
  });

  // console.log("data???", data);
  // console.log("error???", error);
  return {data, error};
};
