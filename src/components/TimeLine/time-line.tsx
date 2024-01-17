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


const TimeLineTSX: React.FC = (iconsArray: any) => {
  return (
    <>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work hover:scale-110 duration-300"
          contentStyle={{ background: "rgb(234, 234, 236)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(234, 234, 236)" }}
          date={<span className="pasos text-black md:text-white">PASO 1</span>}
          icon={
            <div className="flex justify-center items-center w-full h-full">
              <img 
                src={icon1.src}
                alt="Consulta Inicial"
                className="w-[60%] h-[60%] object-contain"
              />
            </div>
          }
          iconStyle={{ background: "rgb(51, 51, 51)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title text-gray-800 font-extrabold">CONSULTA INICIAL</h3>
          <p className="text-gray-600">Reunión con nosotros para definir el objetivo y propósito del evento o
experiencia presencial</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work hover:scale-110 duration-300"
          contentStyle={{ background: "rgb(234, 234, 236)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(234, 234, 236)" }}
          date={<span className="pasos text-black md:text-white">PASO 2</span>}
          icon={
            <div className="flex justify-center items-center w-full h-full">
              <img 
                src={icon2.src}
                alt="Propuesta Personalizada"
                className="w-[60%] h-[60%] object-contain"
              />
            </div>
          }
          iconStyle={{ background: "rgb(51, 51, 51)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title text-gray-800 font-extrabold">PROPUESTA PERSONALIZADA</h3>
          <p className="text-gray-600">Creamos una propuesta adaptada a tus expectativas y las de tu comunidad</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work hover:scale-110 duration-300"
          contentStyle={{ background: "rgb(234, 234, 236)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(234, 234, 236)" }}
          date={<span className="pasos text-black md:text-white">PASO 3</span>}
          icon={
            <div className="flex justify-center items-center w-full h-full">
              <img 
                src={icon3.src}
                alt="Asesoramiento"
                className="w-[60%] h-[60%] object-contain"
              />
            </div>
          }
          iconStyle={{ background: "rgb(51, 51, 51)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title text-gray-800 font-extrabold">ASESORAMIENTO</h3>
          <p className="text-gray-600">Enfoque completamente personalizado y seguimiento continuo para cubrir tus necesidades y deseos</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work hover:scale-110 duration-300"
          contentStyle={{ background: "rgb(234, 234, 236)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(234, 234, 236)" }}
          date={<span className="pasos text-black md:text-white">PASO 4</span>}
          icon={
            <div className="flex justify-center items-center w-full h-full">
              <img 
                src={icon4.src}
                alt="Gestión Logística"
                className="w-[60%] h-[60%] object-contain"
              />
            </div>
          }
          iconStyle={{ background: "rgb(51, 51, 51)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title text-gray-800 font-extrabold">GESTIÓN LOGÍSTICA</h3>
          <p className="text-gray-600">Búsqueda exhaustiva de proveedores y espacios con la mejor relación calidad-
precio</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work hover:scale-110 duration-300"
          contentStyle={{ background: "rgb(234, 234, 236)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(234, 234, 236)" }}
          date={<span className="pasos text-black md:text-white">PASO 5</span>}
          icon={
            <div className="flex justify-center items-center w-full h-full">
              <img 
                src={icon5.src}
                alt="Hosting de la Experiencia"
                className="w-[60%] h-[60%] object-contain"
              />
            </div>
          }
          iconStyle={{ background: "rgb(51, 51, 51)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title text-gray-800 font-extrabold">HOSTING DE LA EXPERIENCIA</h3>
          <p className="text-gray-600">Dirigiremos y coordinaremos presencialmente tu evento para que todo salga según lo planeado.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <a
    target="_blank"
    rel="noopener noreferrer"
    href="https://docs.google.com/forms/d/e/1FAIpQLSfjYNuh1_sX66Bujs5HlaoJSuSMJ6kYkM2xcQqYA91WuP8u6A/viewform"
      className="hover:text-white mt-10 rounded-full w-72 text-center py-4 font-bold before:ease relative overflow-hidden text-white shadow-[1px_3px_5px_0px_rgba(255,255,255,0.5)] hover:shadow-[0px_0px_10px_2px_rgba(255,255,255,0.5)] transition-all before:absolute before:right-0 before:top-0 before:h-16 before:w-4 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-yellow-500 hover:before:-translate-x-72 bg-gradient-to-br from-gray-300 via-yellow-600 to-yellow-800 hover:scale-110">
        CREA TU EXPERIENCIA
      </a>
    </>
  );
};

export default TimeLineTSX;
