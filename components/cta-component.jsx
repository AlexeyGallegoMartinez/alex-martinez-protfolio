import newsImg from "@/assets/newsImg2.png";
import Image from "next/image";

export default function CtaComponent() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="px-5">
        <Image src={newsImg} alt="Bridge Newsletter Logo" />
        {/* <img className=" " src={newsImg.src} /> */}
      </div>
      <div className="flex flex-col justify-around md:w-[20rem] md:px-5 py-5 md:py-0">
        <div className="flex flex-col justify-center md:items-start items-center">
          <h3 className="text-black font-bold text-md md:text-xl tracking-wider">
            GET OUR WEEKLY
          </h3>
          <h1 className="text-[#00A6FF] font-bold text-xl md:text-4xl tracking-widest">
            NEWSLETTER
          </h1>
        </div>
        <div className="md:px-0 px-10">
          <p className="md:text-lg font-light text-center md:text-start text-sm">
            Get weekly updates on the newest autism stories, case studies and
            news right in your mailbox.{" "}
            <span className="font-bold">Subscribe now!</span>
          </p>
        </div>
      </div>
    </div>
  );
}
