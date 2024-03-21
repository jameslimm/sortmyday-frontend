import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="my-0 mx-auto bg-blue-50 md:w-1/2 h-[calc(100dvh_-_2.5rem)] shadow-xl pt-4 dark:bg-slate-900">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
