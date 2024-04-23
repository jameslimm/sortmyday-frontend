import UserMenu from "../../userMenu/UserMenu";
import Logo from "./Logo";
import LoginLink from "./LoginLink";
import { useGetUserQuery } from "../../user/userSlice";

const Header = () => {
  // Header component.  Check if there is a user account (i.e. a user is logged in)
  // - if so, show the user menu, otherwise show a login link.
  const { data: user } = useGetUserQuery();

  return (
    <header className="flex justify-between items-center mx-auto bg-blue-50 w-full md:w-2/3 xl:w-1/2 h-10 relative dark:bg-slate-900">
      <Logo />
      <div>{user ? <UserMenu /> : <LoginLink />}</div>
    </header>
  );
};

export default Header;
