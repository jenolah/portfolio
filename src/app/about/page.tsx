import { ExperienceCard } from "@/app/components/ExperienceCard";
import { EducationCard } from "@/app/components/EducationCard";
import { SkillCard } from "@/app/components/SkillCard";

export default function Page() {
  return (
    <div className="p-6 bg-white p-6 text-slate-950">
      <h1 className="text-center text-6xl">Jen Olah</h1>
      <h2 className="text-center">Web developer</h2>
      <h2 className="text-4xl my-2">&#128187; Experience</h2>
      <div className="grid grid-cols-3 gap-7 justify-items-center">
        <div className="grid col-span-2 gap-4">
          <ExperienceCard
            title="Javascript Developer"
            company="Kinsta, Budapest"
            date="Jan 2022 - Present - 1 yr 11 mos"
            description={[
              "As a member of the Frontend Architect team, I oversaw the maintenance and expansion of an internal component library, refactoring legacy code and implementing fresh designs throughout the application.",
              "Additionally, I served as the Project Owner for a 6-month project, leading a team of junior developers in the creation of an internal budget tracking application. This role required effective stakeholder communication, feature gathering, task allocation, and responsibility for ticket creation, documentation, and the execution of agile ceremonies.",
            ]}
            skills={[
              "Project Management",
              "TypeScript",
              "JavaScript",
              "React.js",
              "CSS",
            ]}
          />
          <ExperienceCard
            title="Quality Assurance Associate"
            company="Kinsta, Budapest"
            date="Aug 2020 - Jan 2022 - 1 yr 6 mos"
            description={[
              "I was responsible for conducting manual smoke tests, feature tests and regression tests, keeping close contact with design and development, documenting test cases and writing automated tests in nightwatch.js.",
            ]}
            skills={["Nightwatch.js", "Quality Assurance"]}
          />
          <ExperienceCard
            title="Manual Software Tester"
            company="Bug Factory Kft, Budapest"
            date="Oct 1019 - Jul 2020 - 10 mos"
            description={[
              "I led and supervised a team, managed tasks, trained new colleagues, authored documentation, and organized testing processes. I also conducted testing on Android and iOS mobile apps, with thorough documentation of test results.",
            ]}
            skills={[
              "Team leading",
              "New Hire Training",
              "Quality Assurance",
              "Software Documentation",
            ]}
          />
        </div>
        <div className="flex flex-col gap-6">
          <EducationCard
            school="Brockhill Park College"
            date="2015 - 2017"
            aLevels={["Mathematics", "Physics", "Chemistry"]}
          />
          <SkillCard
            skillType="&#129337; Skills"
            skills={["JavaScript", "TypeScript", "React.js"]}
          />
          <SkillCard
            skillType="&#127468;&#127463; Languages"
            skills={["English", "Hungarian"]}
          />
        </div>
      </div>
    </div>
  );
}
