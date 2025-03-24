import Search from "../Search/Search";
import Logo from "../Logo/Logo";
import NumResult from "../NumResult/NumResult";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
      <NumResult />
    </nav>
  );
};

export default Navbar;
