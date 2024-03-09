import {cookies} from "next/headers";
import {NextRequest} from "next/server";
import Navbar from "../components/Navbar/Navbar";
import {getUser} from "@/https/get";

interface MainLayoutProps {
  children: React.ReactNode;
  req: NextRequest;
}

const MainLayout: React.FC<MainLayoutProps> = async ({children}) => {
  const {user} = await getUser(cookies);
  const userId: string | undefined = user && user?.user?.id;
  return (
    <div className="h-full">
      <Navbar
        user={userId}
        profile_url={user.user?.user_metadata.avatar_url}
        full_name={user.user?.user_metadata.full_name}
        email={user.user?.user_metadata.email}
      />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
