import horizontalDots from "@/assets/horizontalDots.png";
import verticalDots from "@/assets/verticalDots.png";
import Title from "./title";
import Image from "next/image";

export default function CardUI({ children }) {
  return (
    <div className="flex flex-col justify-center items-center mt-0 h-screen">
      <Title />
      <div className=" relative bg-white mx-10 md:mx-0 md:px-20 py-[5rem] rounded-xl shadow-xs shadow-white font-poppins">
        <Image
          className="absolute -top-10 -right-10"
          src={horizontalDots}
          alt="Background Horizontal Dots"
        />
        <Image
          className="absolute -bottom-10 -left-10"
          src={verticalDots}
          alt="Background Vertical Dots"
        />
        <>{children}</>
      </div>
    </div>
  );
}
