import React from "react";
import Collection from "./Collection";

const CollectionList: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Collection key={1} name={"A"} />
      <Collection key={2} name={"B"} />
      <Collection key={3} name={"C"} />
    </div>
  );
};

export default CollectionList;
