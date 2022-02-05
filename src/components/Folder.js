import React, { useState } from "react";

export default function Folder({ structureData }) {
  const [expand, setExpand] = useState(false);

  if (structureData.isFolder) {
    return (
      <div>
        <span onClick={() => setExpand(!expand)}>{structureData.name}</span>
        <br />

        <div
          style={{ display: expand ? "block" : "none", paddingLeft: "15px" }}
        >
          {structureData.items.map((item) => {
            return <Folder key={item.name} structureData={item} />;
          })}
        </div>
      </div>
    );
  } else {
    return <div>{structureData.name}</div>;
  }
}
