import React from "react";
import Collection from "./Collection";

const CollectionList: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 p-2">
      <Collection
        name="A"
        requests={[
          { id: 1, name: "Request A1", method: "GET", url: "/api/a1" },
          { id: 2, name: "Request A2", method: "POST", url: "/api/a2" },
        ]}
      />
      <Collection
        name="B"
        requests={[
          { id: 3, name: "Request B1", method: "GET", url: "/api/b1" },
        ]}
      />
      <Collection name="C" requests={[]} />
    </div>
  );
};

export default CollectionList;
