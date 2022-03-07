import { FaRegHeart, FaHeart } from "react-icons/fa";

const Like = ({ isLike, onLike }) => {
  if (isLike) {
    return <FaHeart onClick={onLike} className="liked" />;
  }

  return <FaRegHeart onClick={onLike} />;
};

export default Like;
