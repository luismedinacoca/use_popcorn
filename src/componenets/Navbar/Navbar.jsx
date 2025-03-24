import Search from "../Search/Search";
import Logo from "../Logo/Logo";
import NumResult from "../NumResult/NumResult";

const Navbar = ({ movies }) => {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
      <NumResult movies={movies} />
    </nav>
  );
};

export default Navbar;
