import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../../utilis/tools";

export default function Experience() {
  return (
    <div id="skills" className="md:my-24 my-10">
      <div className="text-white ">
        <h1 className="font-black text-white md:text-[50px] text-[60px]">
          Experience
        </h1>
        <p className="my-3 animate-slideLeft opacity-0 leading-[30px] max-w-3xl">
          Ability to analyze and evaluate networks, identify issues and provide
          solutions to ensure networks are operating efficiently. Ability to
          design, implement and troubleshoot Wi-FI and security infrastructure.
          Time management.
        </p>
      </div>
      <VerticalTimeline>
        {experiences.map((exp, i) => (
          <VerticalTimelineElement
            key={i}
            date={exp.date}
            contentStyle={{
              backgroundColor: "#1d1836",
              borderRadius: "20px",
            }}
            iconStyle={{ background: exp.iconBg, color: "#fff" }}
            icon={exp.icon}>
            <div>
              <h3 className=" text-[24px]  font-black">{exp.title}</h3>
              <h1 className=" text-[12px] font-black ">{exp.company_name}</h1>
            </div>

            <ul className="mt-5  list-disc ml-5 space-y-2">
              {exp.points.map((point, index) => (
                <li key={index} className=" text-[14px] pl-1 tracking-wider">
                  {point}
                </li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}
