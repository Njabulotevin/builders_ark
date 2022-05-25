import React from "react";

function PageTitle({ description, title }) {
  return (
    <div className="mb-12 flex p-12 gap-2">
      <div className="h-[2px] mt-[11px] w-12 bg-primary"></div>
      <div className="">
        <h3 className="text-primary text-md mb-2">{description}</h3>
        <h1 className="text-darkGray font-bold text-2xl">{title}</h1>
      </div>
    </div>
  );
}

export default PageTitle;
