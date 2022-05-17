import React from "react";

function PageTitle({ description, title }) {
  return (
    <div className="p-12">
      <h3 className="text-primary text-md mb-2">{description}</h3>
      <h1 className="text-darkGray font-bold text-2xl">{title}</h1>
    </div>
  );
}

export default PageTitle;
