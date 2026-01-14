import React from "react";
import { useEffect, useState } from "react";
import AOS from "aos";

type Project = {
  name: string;
  description: string;
  skills?: string[];
  link?: string;
};

type Props = {
  projects: any[];
  accentColor: string;
};

export default function ProjectsList({ projects, accentColor }: Props) {
  const [expanded, setExpanded] = useState(false);

  const visible = projects.slice(0, 3);
  const hidden = projects.slice(3);

  useEffect(() => {
    AOS.refresh();
  }, [expanded]);

  return (
    <div className="space-y-8">
      {visible.map((project, index) => (
        <ProjectCard
          key={project.name}
          project={project}
          index={index}
          accentColor={accentColor}
        />
      ))}

      {expanded &&
        hidden.map((project, index) => (
          <ProjectCard
            key={project.name}
            project={project}
            index={index + 3}
            accentColor={accentColor}
          />
        ))}

      {hidden.length > 0 && (
        <button
          onClick={() => setExpanded((v) => !v)}
          className="mt-6 px-6 py-3 rounded-xl bg-gray-900 text-white"
        >
          {expanded ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
}

function ProjectCard({
  project,
  index,
  accentColor,
}: {
  project: Project;
  index: number;
  accentColor: string;
}) {
  const Component = project.link ? "a" : "div";
  const linkProps = project.link
    ? {
        href: project.link,
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : {};

  return (
    <div
      className="group relative"
      data-aos="fade-left"
      data-aos-delay={index * 100}
    >
      <Component
        {...linkProps}
        className={`block relative p-4 sm:p-6 md:p-8 bg-gray-50 rounded-xl sm:rounded-2xl border border-gray-200 transition-all duration-300 ${
          project.link
            ? "hover:bg-white hover:shadow-xl hover:border-gray-300 hover:-translate-y-1"
            : ""
        }`}
      >
        {project.link && (
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 flex items-center justify-center bg-gray-900 rounded-full text-white transition-all duration-300 group-hover:bg-gray-700">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 17L17 7M17 7H7M17 7V17"
              />
            </svg>
          </div>
        )}

        <div className="space-y-4">
          <div>
            <span className="text-sm font-mono" style={{ color: accentColor }}>
              0{index + 1}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-1">
              {project.name}
            </h3>
          </div>

          <p
            className={`text-base sm:text-lg text-gray-600 leading-relaxed ${
              project.link ? "pr-12 sm:pr-14 md:pr-16" : ""
            }`}
          >
            {project.description}
          </p>

          {project.skills?.length && (
            <div className="flex flex-wrap gap-2 pt-2">
              {project.skills.map((skill) => (
                <span
                  key={skill}
                  className={`px-3 py-1 bg-gray-900 text-white rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 ${
                    project.link ? "group-hover:bg-gray-800" : ""
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      </Component>
    </div>
  );
}
