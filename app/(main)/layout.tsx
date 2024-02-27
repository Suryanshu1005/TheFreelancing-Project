import {cookies} from "next/headers";
import {NextRequest} from "next/server";
import Navbar from "../components/Navbar/Navbar";

interface MainLayoutProps {
  children: React.ReactNode;
  req: NextRequest;
}

const MainLayout: React.FC<MainLayoutProps> = ({children}) => {
  return (
    <div className="h-full">
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
