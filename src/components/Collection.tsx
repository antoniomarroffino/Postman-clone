import React from "react";
import { FaFolder } from "react-icons/fa";

interface CollectionProps {
  name: string;
}

const Collection: React.FC<CollectionProps> = ({ name }) => {
  return (
    <div className="flex items-center gap-2 p-2 hover:bg-base-300 cursor-pointer rounded">
      <FaFolder className="text-xl" />
      <span>{name}</span>
    </div>
  );
};

export default Collection;
