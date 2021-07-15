import { React } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCategories } from "../utils/api";
import { Link } from "react-router-dom";

const Nav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((categoriesData) => {
      setCategories(categoriesData);
    });
  }, []);

  return (
    <nav className="App-games">
      <Link to="api/categories">
        <h3>Games Categories</h3>
      </Link>
      {categories.map((category) => {
        return <Link to={`/game/${category.slug}`}>{category.slug}</Link>;
      })}
    </nav>
  );
};

export default Nav;
