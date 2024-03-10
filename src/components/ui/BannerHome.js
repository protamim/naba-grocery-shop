import { leckerli } from "@/app/layout";
import { bannerBg, bannerImage } from "@/assets/home";
import Image from "next/image";
import ActionButton from "./ActionButton";

const BannerHome = () => {
  return (
    <>
      <div
        className="min-h-[65vh] overflow-hidden -z-[1] relative flex justify-center items-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${bannerBg.src})` }}
      >
        <Image
          className="hidden lg:block mx-auto absolute top-1/2 left-[65%] -translate-x-1/2 -translate-y-1/2 transition-all ease-in-out duration-300 hover:scale-110"
          src={bannerImage}
          alt="Naba"
          width="100%"
          height="100%"
          priority
        />
        <div className="absolute w-full h-auto pl-4 flex gap-y-3 flex-col items-start">
          <h4 className={`${leckerli.className} bg-yellow-400 py-2 pl-5 pr-8 entry-subtile text-3xl rounded-md mb-5`}>Garden Fresh Fruits</h4>
          <h2 className={`${leckerli.className} text-8xl text-black`}>Feel The Taste</h2>
          <p className="text-lg font-semibold gradient-text max-w-xl mb-4">
            When an unknown printer took a galley of type and scrambled it to
            make ype specimen urvived not only five centurieswhen an unknown
            printer.
          </p>
          <ActionButton>Shop Now</ActionButton>
        </div>
      </div>
    </>
  );
};

export default BannerHome;
