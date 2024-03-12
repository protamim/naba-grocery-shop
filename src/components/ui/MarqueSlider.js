import Link from "next/link";
import Marquee from "react-fast-marquee";
import { BsAsterisk } from "react-icons/bs";

const MarqueeSlider = () => {
  return (
    <>
      <section className="px-4">
        <Marquee className="bg-stone-50 mb-8 py-5 overflow-hidden" pauseOnHover={true} gradient={true} gradientWidth={100}>
          <h4 className="flex gap-x-5 items-center text-xl">
            <span className="text-green-600 ml-5 font-medium">
              <BsAsterisk />
            </span>
            <Link href="#">
              First your free trial and enjoy 1 months of NABA for
              <strong> $2/months </strong>
              on select plans.
            </Link>
          </h4>
          <h4 className="flex gap-x-5 items-center text-xl">
            <span className="text-green-600 ml-5 font-medium">
              <BsAsterisk />
            </span>
            <Link href="#">
              Next your pro enjoy 5 months of NABA for
              <strong> $10/month </strong>
              on select plans.
            </Link>
          </h4>
          <h4 className="flex gap-x-5 items-center text-xl">
            <span className="text-green-600 ml-5 font-medium">
              <BsAsterisk />
            </span>
            <Link href="#">
              Previus your pro enjoy 10 months of NABA for
              <strong> $20/month </strong>
              on select plans.
            </Link>
          </h4>
          <h4 className="flex gap-x-5 items-center text-xl">
            <span className="text-green-600 ml-5 font-medium">
              <BsAsterisk />
            </span>
            <Link href="#">
              Start your free trial and enjoy 5 months of NABA for
              <strong> $5/month </strong>
              on select plans.
            </Link>
          </h4>
          <h4 className="flex gap-x-5 items-center text-xl">
            <span className="text-green-600 ml-5 font-medium">
              <BsAsterisk />
            </span>
            <Link href="#">
              Next your pro enjoy 12 months of NABA for
              <strong> $50/month </strong>
              on select plans.
            </Link>
          </h4>
        </Marquee>
      </section>
    </>
  );
};

export default MarqueeSlider;
