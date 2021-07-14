import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="App-header">
      <Link to="/">
        <h1>NC Games Reviews</h1>
      </Link>
    </header>
  );
};

export default Header;
