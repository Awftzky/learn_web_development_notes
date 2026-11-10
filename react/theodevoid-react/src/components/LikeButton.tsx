import { Heart } from "lucide-react";
import useLike from "../hooks/UseLike";

const Like = () => {
  const { like, handleLike } = useLike();
  return (
    <>
      <button type="button" onClick={handleLike}>
        <Heart fill={like ? "red" : "none"} />
      </button>
    </>
  );
};

export default Like;
