"use client";

import Image from "next/image";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Next.js</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Flutter</li>
        <li>.NET</li>
        <li>MySQL</li>
        <li>PostgreSQL</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>California State University, Dominguez-Hills</li>
        <li>Udemy</li>
        <li>LinkedIn Learning</li>
        <li>JavaScript</li>
        <li>C/C++</li>
        <li>C#</li>
        <li>Java</li>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>Dart</li>
        <li>Python</li>
        <li>SQL</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>California State University, Dominguez-Hills</li>
        <li>Udemy</li>
        <li>LinkedIn Learning</li>
      </ul>
    ),
  },
];

const About = () => {
  const [tab, settab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      settab(id);
    });
  };
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-start py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/outer-space-dev.png" width={600} height={600} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Overview</h2>
          <p className="text-base md:text-lg">
            Dynamic Software Engineer with a proven track record of crafting
            innovative solutions in both mobile and desktop environments.
            Leverages a passion for hands-on development and continuous learning
            to drive technological advancements and efficiency improvements.
            Known for a meticulous approach to problem-solving and a commitment
            to excellence, I excel in fast-paced settings, bringing both
            technical proficiency and a collaborative spirit to cross-functional
            teams. With strong communication skills and a keen analytical
            mindset, I am adept at translating complex requirements into
            actionable development plans, consistently delivering projects that
            exceed expectations.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab == "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab == "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab == "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
