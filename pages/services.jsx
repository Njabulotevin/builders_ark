import React from "react";
import PageTitle from "../components/common/PageTitle";

function Services() {
  const services = [
    {
      title: "Project Management",
      description:
        "Buying, planning and contracting can consume both time and costs. Leave it to the experts. From the first meeting with the client, buying of land, architectural designs and constructing of your home. We provide a great assistance in cabbing costs, procurement, and risk assessment. Without compromising quality, we ensure budget is adhered to, time is of essence and compliance as	well as safety is a priority",
    },
    {
      title: "General Construction",
      description:
        "with this service, expect exceptional service. We are greatly skilled and intensively experienced for any projects regardless of the complexity. From foundation, to roof to moving in, a Turn-key option ensures that we turn architecture into reality",
    },
    {
      title: "Renovation",
      description:
        "Renovations should be investments not a liability. Finishing are to enhance the building and give it a better value. Be it, residential home, office block or industrial building, we go with the latest trends and set our own trends.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto mb-12">
      <PageTitle description="What we do" title="Our Services" />
      <div className="p-6">
        {services.map((item, i) => {
          return (
            <div key={i} className="">
              <div className="bg-primary text-white p-2 rounded mb-6">
                {item.title}
              </div>
              <div className="mb-6 text-darkGray">
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
