import { FaShippingFast, FaGift } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { LiaPercentageSolid } from "react-icons/lia";
import { MdOutlineContactSupport } from "react-icons/md";

const FeaturesSection = () => {
  return (
    <>
      <section className="pb-10 px-4">
        <div className="py-8 grid gap-y-6 grid-cols-1 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-10 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {/* Item - 1 */}
          <div className="flex items-center gap-x-7 group">
            {/* Icon */}
            <span className="text-5xl text-green-600 transition-all duration-300 ease-in-out group-hover:text-yellow-400">
              <FaShippingFast />
            </span>
            {/* Information */}
            <div className="flex flex-col gap-y-1">
              <h6 className="text-xl text-black font-medium">Free Shipping</h6>
              <p className="text-sm font-normal text-stone-800">
                Orders $50 or more
              </p>
            </div>
          </div>

          {/* Item - 2 */}
          <div className="flex items-center gap-x-7 group">
            {/* Icon */}
            <span className="text-5xl text-green-600 transition-all duration-300 ease-in-out group-hover:text-yellow-400">
              <FaMoneyCheckDollar />
            </span>
            {/* Information */}
            <div className="flex flex-col gap-y-1">
              <h6 className="text-xl text-black font-medium">Save Money</h6>
              <p className="text-sm font-normal text-stone-800">
                At lowest price
              </p>
            </div>
          </div>

          {/* Item - 3 */}
          <div className="flex items-center gap-x-7 group">
            {/* Icon */}
            <span className="text-5xl text-green-600 transition-all duration-300 ease-in-out group-hover:text-yellow-400">
              <FaGift />
            </span>
            {/* Information */}
            <div className="flex flex-col gap-y-1">
              <h6 className="text-xl text-black font-medium">
                100% return policy
              </h6>
              <p className="text-sm font-normal text-stone-800">
                Any time return products
              </p>
            </div>
          </div>

          {/* Item - 4 */}
          <div className="flex items-center gap-x-7 group">
            {/* Icon */}
            <span className="text-5xl text-green-600 transition-all duration-300 ease-in-out group-hover:text-yellow-400">
              <LiaPercentageSolid />
            </span>
            {/* Information */}
            <div className="flex flex-col gap-y-1">
              <h6 className="text-xl text-black font-medium">
                Best Deal Offer
              </h6>
              <p className="text-sm font-normal text-stone-800">
                Grab Your Gear and Go
              </p>
            </div>
          </div>

          {/* Item - 5 */}
          <div className="flex items-center gap-x-7 group">
            {/* Icon */}
            <span className="text-5xl text-green-600 transition-all duration-300 ease-in-out group-hover:text-yellow-400">
              <MdOutlineContactSupport />
            </span>
            {/* Information */}
            <div className="flex flex-col gap-y-1">
              <h6 className="text-xl text-black font-medium">Support 24/7</h6>
              <p className="text-sm font-normal text-stone-800">
                Contact us 24 hours a day
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default FeaturesSection;
