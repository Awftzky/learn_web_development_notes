import { useParams, Link } from "react-router";

const Menu = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>This is Menu</h1>
      <p>{id}</p>
      <Link to="/">Home</Link>
    </div>
  );
};

export default Menu;
