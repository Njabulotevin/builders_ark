import React from "react";
import PageTitle from "../../components/common/PageTitle";
import Link from "next/link";
import Head from "next/head";

function Index() {
  const projects = [
    {
      project: "House Moffet",
      imgUrl: "",
      title: "Site 1118 Oubaai Golf Estate",
      duration: "Duration: 20 months",
    },
    {
      project: "House Coetze",
      imgUrl: "",
      title: "Site 954 Oubaai Golf Estate",
      duration: "Duration: 11 months",
    },
    {
      project: "House Reebok",
      imgUrl: "",
      title: "Site 0001 Grootbrak",
      duration: "Duration: 20 months",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto mb-20">
      <Head>
        <title>Projects</title>
        <meta
          name="description"
          content="Builders Ark was established in 2014 by an enthusiastic entrepreneur,
          George Bokaba. As an emerging contractor."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageTitle description="Our work" title="Projects" />
      <div className="flex flex-wrap gap-12 px-6">
        {projects.map((item, i) => {
          return (
            <Project
              key={i}
              project={item.project}
              duration={item.duration}
              title={item.title}
            />
          );
        })}
      </div>
    </div>
  );
}

function Project({ imgUrl, project, title, duration }) {
  return (
    <Link href={`/projects/${project.replace(/ /g, "_")}`}>
      <div>
        <div className="w-[350px] h-[282px] bg-darkGray hover:rounded cursor-pointer ">
          <div className="w-[350px] h-[282px] bg:transparent hover:rounded hover:bg-primary opacity-70"></div>
        </div>
        <div className="mt-6">
          <h3 className="font-bold">{title}</h3>
          <h4 className="text-primary">{project}</h4>
          <p className="text-xs">{duration}</p>
        </div>
      </div>
    </Link>
  );
}

export default Index;
