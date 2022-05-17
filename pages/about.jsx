import React from "react";
import PageTitle from "../components/common/PageTitle";
import Image from "next/image";

function About() {
  const about = "";
  const clients = [
    { name: "MTN", imgUrl: "/mtn.png", width: 70 },
    { name: "city_power", imgUrl: "/city_power.png", width: 126 },
    { name: "UJ", imgUrl: "/uj.png", width: 70 },
    { name: "moffett", imgUrl: "/moffett.png", width: 70 },
    { name: "aldu", imgUrl: "/aldu.png", width: 70 },
  ];
  return (
    <div className="max-w-7xl mx-auto mb-12">
      <PageTitle description="Our Story" title="Why Choose Us" />

      <div className="p-12">
        <p className="mb-12">
          Builders Ark was established in 2014 by an enthusiastic entrepreneur,
          George Bokaba. As an emerging contractor, Builders Ark is potentially
          amongst small to medium enterprises (SMMEs) offering BUILDING
          CONSTRUCTION, PROJECT MANAGEMENT AND RENOVATIONS. Builders Ark is Led
          by an experienced team, coming from different backgrounds. Their
          Skills and qualifications makes Builders Ark a success it is today. We
          keen to provide a valid Training to our inexperienced stuff and our
          management on regular basis to better adapt to the ever changing
          landscape of our business. So, we can achieve exceptional work with
          every project we undertake.
        </p>
        <p className="mb-12">
          With the experience our team has in construction, its our policy to be
          particular about the projects we undertake, as we guarantee continuous
          excellence from commencement to end. We believe in providing services
          that are complete throughout. Hence, we pride ourselves in getting;
        </p>
        <h6 className="mb-12 italic font-bold">
          “EACH PROJECT DONE RIGHT THE FIRST TIME”
        </h6>
        <h4 className="mb-12 font-bold text-lg"> Our vision</h4>
        <ul className="mb-12 list-disc ml-12">
          <li>
            To Provide expect services through a dedicated and well-trained
            workforce; and
          </li>
          <li>
            To render services of exceptional quality that exceed the
            requirements of our clients and that benefit the community at large
          </li>
        </ul>
        <h4 className="mb-12 font-bold text-md">Our Mission</h4>
        <ul className="mb-12 list-disc ml-12">
          <li>
            To be a leader in providing affordable and innovative construction
            solutions which ensure sustainable socio-economic growth while
            preventing environmental degradation; and
          </li>
          <li>
            To actively participate in the reconstruction and development of our
            society.
          </li>
        </ul>
        <p className="mb-12">
          In order for Builders Ark to achieve the above, we employ and/or
          partner with well trained and dedicated individuals and/or
          corporations that are preferably from disadvantaged background through
          sound recruitment
        </p>

        <h2 className="font-bold ">
          Some clients that trusted us with their projects and we didn’t
          disappoint
        </h2>
        <div className="p-4 flex flex-wrap gap-12">
          {clients.map((item, i) => {
            return (
              <Image
                key={i}
                src={item.imgUrl}
                alt={item.name}
                width={item.width}
                height={70}
                layout="intrinsic"
              />
            );
          })}
        </div>
        <ul className="mb-12 list-disc ml-12 mt-6">
          <li>McCormick properties</li>
          <li>alandick Africa</li>
          <li>moffett and moffett</li>
          <li>Arte lifestyle</li>
          <li>jean Mar construction</li>
          <li>MTN</li>
          <li>aldu construction</li>
          <li>university of Jonannesburg</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
