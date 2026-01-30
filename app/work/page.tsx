"use client";
import React from "react";
import "../work.css";
import "../header.css";
import FullpageProviderWork from "@/components/fullpageProviderWork";
import { Cursor } from "@/components/cursor";
import { HeaderNavigation } from "@/components/headerNavigation";
import { WorkSection } from "@/components/workPage/workSection";

const projectsData = [
  {
    title: (
      <>
        Prime Talent <br /> Institute
      </>
    ),
    description: "4 Years - Institutional Leadership",
    link: "#",
    imageLink: "/img/projects/1.avif",
  },
  {
    title: (
      <>
        Aounix <br /> Solutions
      </>
    ),
    description: "3 Years - Software House",
    link: "#",
    imageLink: "/img/projects/2.avif",
  },
  {
    title: (
      <>
        2000+ <br /> Students Trained
      </>
    ),
    description: "International Major Achievement",
    link: "#",
    imageLink: "/img/projects/3.avif",
  },
  {
    title: (
      <>
        Unity Game <br /> Development
      </>
    ),
    description: "International Certification",
    link: "#",
    imageLink: "/img/projects/4.avif",
  },

  {
    title: (
      <>
        AI Online <br /> Exam System
      </>
    ),
    description: "Secured Examination Systems",
    link: "#",
    imageLink: "/img/projects/5.avif",
  },
  {
    title: (
      <>
        Digital Ads <br /> & Branding
      </>
    ),
    description: "Overseas Client Solutions",
    link: "#",
    imageLink: "/img/projects/6.avif",
  },
];
//test
export default function WorkPage() {
  return (
    <>
      <Cursor />
      <HeaderNavigation />
      <FullpageProviderWork>
        <div id="fullpage">
          <div className="background">
            PROJECTS
            <br />
            PROJECTS
          </div>

          {projectsData.map((item, index) => (
            <WorkSection
              key={index}
              item={item}
              index={index}
              length={projectsData.length}
              color={index % 2 !== 0 ? "Light" : "Dark"}
            />
          ))}
        </div>
      </FullpageProviderWork>
    </>
  );
}
