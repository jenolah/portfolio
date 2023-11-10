import { ExperienceCard } from "@/app/about/components/ExperienceCard";
import type { Experience } from "@/app/about/components/ExperienceCard";
import { EducationCard } from "@/app/about/components/EducationCard";
import { SkillCard } from "@/app/about/components/SkillCard";
import { PictureFrame } from "./components/PictureFrame";

const experiences: Experience[] = [
  {
    title: "Javascript Developer",
    company: "Kinsta, Budapest",
    date: "Jan 2022 - Present - 1 yr 11 mos",
    description: [
      <p>
        As a member of the Frontend Architect team, I oversaw the maintenance
        and expansion of an internal <b>component library</b>,{" "}
        <b>refactoring legacy code</b> and implementing fresh designs throughout
        the application.
      </p>,
      <p>
        Additionally, I served as the <b>Project Owner</b> for a 6-month
        project, leading a team of junior developers. This role required
        effective stakeholder communication, feature gathering, task allocation,
        and responsibility for ticket creation, documentation, and the execution
        of <b>agile ceremonies.</b>
      </p>,
    ],
    skills: [
      "Project Management",
      "TypeScript",
      "JavaScript",
      "React.js",
      "CSS",
    ],
  },
  {
    title: "Quality Assurance Associate",
    company: "Kinsta, Budapest",
    date: "Aug 2020 - Jan 2022 - 1 yr 6 mos",
    description: [
      <p>
        I was responsible for conducting manual{" "}
        <b>smoke tests, feature tests and regression tests</b>, keeping close
        contact with design and development, documenting test cases and writing
        automated tests in <b>nightwatch.js.</b>
      </p>,
    ],
    skills: ["Nightwatch.js", "Quality Assurance"],
  },
  {
    title: "Manual Software Tester",
    company: "Bug Factory Kft, Budapest",
    date: "Oct 1019 - Jul 2020 - 10 mos",
    description: [
      <p>
        I led and supervised a team, managed tasks, trained new colleagues and
        organized testing processes. I also conducted manual testing on Android
        and iOS mobile apps with documentation of test results.
      </p>,
    ],
    skills: ["Team leading", "New Hire Training", "Quality Assurance"],
  },
];

export default function Page() {
  return (
    <div
      className="bg-white text-slate-950"
      style={{ width: "21cm", height: "29.7cm" }}
    >
      <div className="grid grid-cols-4 grid-rows-6 h-full">
        <div className="py-2 bg-green-100 col-span-3 flex flex-col justify-center font-mono">
          <h1 className="text-center text-6xl">Jen Olah</h1>
          <h2 className="text-center">Web developer</h2>
        </div>
        <PictureFrame />
        <div className="grid col-span-3 row-span-5">
          <ExperienceCard experiences={experiences} />
        </div>
        <div className="flex flex-col gap-6 pl-4 bg-green-100 row-span-5">
          <SkillCard
            skillType="Skills &#129337;"
            skills={[
              "HTML / CSS",
              "JavaScript",
              "TypeScript",
              "React.js",
              "Git",
              "yarn / npm",
              "Next.js",
            ]}
          />
          <SkillCard
            skillType="Languages &#127468;&#127463;"
            skills={["English - Native", "Hungarian - Native"]}
          />
          <SkillCard
            skillType="Education &#127891;"
            title="Brockhill Park College"
            date="2015 - 2017"
            description="A Levels:"
            skills={["Mathematics", "Physics", "Chemistry"]}
          />
        </div>
      </div>
    </div>
  );
}
