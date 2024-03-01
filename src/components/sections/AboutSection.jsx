import { twMerge } from "tailwind-merge";

function AboutSection() {
  const textClasses =
    "w-full mx-auto px-4 mt-5 mb-5 font-brownLight text-xl text-brown font-light max-w-screen-md text-center";
  return (
    <>
      <h3
        className={twMerge(
          textClasses,
          "mt-[7.5rem] mb-8 font-shipporiReg text-[2rem] font-normal "
        )}
      >
        About
      </h3>
      <p className={textClasses}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
        debitis, molestiae nostrum autem earum eaque sint deleniti, ea beatae,
        accusamus iste quae? Illo provident facilis incidunt earum eveniet
        tempore repellat?
      </p>
      <p className={textClasses}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
        debitis, molestiae nostrum autem earum eaque sint deleniti, ea beatae,
        accusamus iste quae? Illo provident facilis incidunt earum eveniet
        tempore repellat?
      </p>
      <p className={twMerge(textClasses, "mb-[7.5rem]")}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
        debitis, molestiae nostrum autem earum eaque sint deleniti, ea beatae,
        accusamus iste quae? Illo provident facilis incidunt earum eveniet
        tempore repellat?
      </p>
    </>
  );
}

export default AboutSection;
