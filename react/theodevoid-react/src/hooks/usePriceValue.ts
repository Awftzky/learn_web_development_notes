import { useSearchParams } from "react-router";

const usePriceValue = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handlePriceCustomValue = (sortValue: string) => {
    searchParams.set("sort", sortValue);
    setSearchParams(searchParams);
  };
  return { searchParams, handlePriceCustomValue };
};
export default usePriceValue;
