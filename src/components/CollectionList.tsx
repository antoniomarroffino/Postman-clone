// src/components/CollectionList.tsx
import React from "react";
import Collection from "./Collection";

const CollectionList: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <Collection
        key={1}
        name="A"
        requests={[
          { id: 1, name: "Request A1", method: "GET", url: "/api/a1" },
          { id: 2, name: "Request A2", method: "POST", url: "/api/a2" },
        ]}
      />
      <Collection
        key={2}
        name="B"
        requests={[
          { id: 3, name: "Request B1", method: "GET", url: "/api/b1" },
        ]}
      />
      <Collection
        key={3}
        name="C"
        requests={[
          { id: 4, name: "Request C1", method: "PUT", url: "/api/c1" },
        ]}
      />
    </div>
  );
};

export default CollectionList;
