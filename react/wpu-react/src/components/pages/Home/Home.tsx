import { useEffect, useState } from "react";
import SubmitButton from "../../ui/button";
import PropsButton from "../../ui/button/PropsButton";
import { InformationCard } from "../../ui/card/InformationCard";
import styles from "./Home.module.css";
import { useQuery } from "@tanstack/react-query";

const Makanan = [
  {
    name: "Burger",
    price: 10000,
  },
  {
    name: "Fries",
    price: 50000,
  },
];

interface dataAPI {}

const Home = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const showButton = true;
  const url = "https://wpu-cafe.vercel.app/api/menu";

  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  // }, []);

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["datamenu"],
    queryFn: async () => {
      return await fetch(url).then((response) => response.json());
    },
  });

  console.log(data);
  return (
    <div className={darkMode ? styles.dark : styles.light}>
      <SubmitButton />
      {showButton === true ? (
        <PropsButton onClick={() => setDarkMode(!darkMode)}>
          <h1>Ini Button Besar!</h1>
        </PropsButton>
      ) : (
        ""
      )}

      {Makanan.map((item, index) => (
        <InformationCard
          key={`Makanan ke ${index}`}
          NamaMakanan={item.name}
          HargaMakanan={item.price}
        />
      ))}

      <SubmitButton />
    </div>
  );
};

export default Home;
