import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="my-0 flex-1 mx-auto bg-blue-50 w-full md:w-2/3 xl:w-1/2 shadow-xl pt-4 dark:bg-slate-900">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
