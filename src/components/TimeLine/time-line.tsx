import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
//import Meeting from "../../assets/initialMeetingIcon.png";
import icon1 from "@/icons/timeline/1.svg";
import icon2 from "@/icons/timeline/2.svg";
import icon3 from "@/icons/timeline/3.svg";
import icon4 from "@/icons/timeline/4.svg";
import icon5 from "@/icons/timeline/5.svg";

type TimeLineProps = {
  timelineData: {
    TITLE: string;
    PASO_1: string;
    PASO_1_TITLE: string;
    PASO_1_CONTENT: string;
    PASO_2: string;
    PASO_2_TITLE: string;
    PASO_2_CONTENT: string;
    PASO_3: string;
    PASO_3_TITLE: string;
    PASO_3_CONTENT: string;
    PASO_4: string;
    PASO_4_TITLE: string;
    PASO_4_CONTENT: string;
    PASO_5: string;
    PASO_5_TITLE: string;
    PASO_5_CONTENT: string;
  };
};



const TimeLineTSX: React.FC<TimeLineProps> = ({ timelineData }) => {
  return (
    <>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work hover:scale-110 duration-300"
          contentStyle={{ background: "rgb(234, 234, 236)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(234, 234, 236)" }}
          date={<span className="pasos text-black md:text-white">{timelineData.PASO_1}</span>}
          icon={
            <div className="flex justify-center items-center w-full h-full">
              <img 
                src={icon1.src}
                alt={timelineData.PASO_1_TITLE}
                className="w-[60%] h-[60%] object-contain"
              />
            </div>
          }
          iconStyle={{ background: "rgb(51, 51, 51)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title text-gray-800 font-extrabold">{timelineData.PASO_1_TITLE}</h3>
          <p className="text-gray-600">{timelineData.PASO_1_CONTENT}</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work hover:scale-110 duration-300"
          contentStyle={{ background: "rgb(234, 234, 236)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(234, 234, 236)" }}
          date={<span className="pasos text-black md:text-white">{timelineData.PASO_2}</span>}
          icon={
            <div className="flex justify-center items-center w-full h-full">
              <img 
                src={icon2.src}
                alt={timelineData.PASO_2_TITLE}
                className="w-[60%] h-[60%] object-contain"
              />
            </div>
          }
          iconStyle={{ background: "rgb(51, 51, 51)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title text-gray-800 font-extrabold">{timelineData.PASO_2_TITLE}</h3>
          <p className="text-gray-600">{timelineData.PASO_2_CONTENT}</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work hover:scale-110 duration-300"
          contentStyle={{ background: "rgb(234, 234, 236)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(234, 234, 236)" }}
          date={<span className="pasos text-black md:text-white">{timelineData.PASO_3}</span>}
          icon={
            <div className="flex justify-center items-center w-full h-full">
              <img 
                src={icon3.src}
                alt={timelineData.PASO_3_TITLE}
                className="w-[60%] h-[60%] object-contain"
              />
            </div>
          }
          iconStyle={{ background: "rgb(51, 51, 51)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title text-gray-800 font-extrabold">{timelineData.PASO_3_TITLE}</h3>
          <p className="text-gray-600">{timelineData.PASO_3_CONTENT}</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work hover:scale-110 duration-300"
          contentStyle={{ background: "rgb(234, 234, 236)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(234, 234, 236)" }}
          date={<span className="pasos text-black md:text-white">{timelineData.PASO_4}</span>}
          icon={
            <div className="flex justify-center items-center w-full h-full">
              <img 
                src={icon4.src}
                alt={timelineData.PASO_4_TITLE}
                className="w-[60%] h-[60%] object-contain"
              />
            </div>
          }
          iconStyle={{ background: "rgb(51, 51, 51)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title text-gray-800 font-extrabold">{timelineData.PASO_4_TITLE}</h3>
          <p className="text-gray-600">{timelineData.PASO_4_CONTENT}</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work hover:scale-110 duration-300"
          contentStyle={{ background: "rgb(234, 234, 236)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(234, 234, 236)" }}
          date={<span className="pasos text-black md:text-white">{timelineData.PASO_5}</span>}
          icon={
            <div className="flex justify-center items-center w-full h-full">
              <img 
                src={icon5.src}
                alt={timelineData.PASO_5_TITLE}
                className="w-[60%] h-[60%] object-contain"
              />
            </div>
          }
          iconStyle={{ background: "rgb(51, 51, 51)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title text-gray-800 font-extrabold">{timelineData.PASO_5_TITLE}</h3>
          <p className="text-gray-600">{timelineData.PASO_5_CONTENT}</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <a
    target="_blank"
    rel="noopener noreferrer"
    href="https://docs.google.com/forms/d/e/1FAIpQLSfjYNuh1_sX66Bujs5HlaoJSuSMJ6kYkM2xcQqYA91WuP8u6A/viewform"
      className="hover:text-white mt-10 uppercase rounded-full w-72 text-center py-4 font-bold before:ease relative overflow-hidden text-white shadow-[1px_3px_5px_0px_rgba(255,255,255,0.5)] hover:shadow-[0px_0px_10px_2px_rgba(255,255,255,0.5)] transition-all before:absolute before:right-0 before:top-0 before:h-16 before:w-4 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-yellow-500 hover:before:-translate-x-72 bg-gradient-to-br from-gray-300 via-yellow-600 to-yellow-800 hover:scale-110">
        {timelineData.BUTTON}
      </a>
    </>
  );
};

export default TimeLineTSX;
