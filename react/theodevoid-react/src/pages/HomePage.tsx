import { Link } from "lucide-react";

const HomePage = () => {
  return (
    <div>
      <h1>this Is HomePage</h1>

      <Link to={"/term"}>Menuju halaman Term</Link>
    </div>
  );
};

export default HomePage;
