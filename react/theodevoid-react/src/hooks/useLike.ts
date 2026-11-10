import { useState } from "react";

const useLike = () => {
  const [like, setLike] = useState(false);

  const handleLike = () => {
    setLike((prev) => !prev);
  };

  return {
    like,
    handleLike,
  };
};

export default useLike;
