import { TbPigMoney } from "react-icons/tb";
import { RiSecurePaymentFill } from "react-icons/ri";
import { MdSupportAgent } from "react-icons/md";
import { HiOutlineTruck } from "react-icons/hi2";

export const FeatureBox = () => {
  return (
    <div className="grid grid-cols-12 gap-5 py-5">
      <div className="col-span-12 flex sm:col-span-6 lg:col-span-3">
        <div className="flex w-full flex-col items-center justify-center gap-2 rounded-lg bg-white p-5 transition-all duration-300 hover:shadow-lg hover:shadow-primary-300">
          <HiOutlineTruck className="text-5xl text-primary-400" />
          <div className="text-center">
            <h6 className="font-bold capitalize">Free Shipping</h6>
            <p className="break-all text-sm text-shuttle-gray-400">
              For all order of $100
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-12 flex sm:col-span-6 lg:col-span-3">
        <div className="flex w-full flex-col items-center justify-center gap-2 rounded-lg bg-white p-5 transition-all duration-300 hover:shadow-lg hover:shadow-primary-300">
          <TbPigMoney className="text-5xl text-primary-400" />
          <div className="text-center">
            <h6 className="font-bold capitalize">Money Back</h6>
            <p className="break-all text-sm text-shuttle-gray-400">
              With a 30 day
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-12 flex sm:col-span-6 lg:col-span-3">
        <div className="flex w-full flex-col items-center justify-center gap-2 rounded-lg bg-white p-5 transition-all duration-300 hover:shadow-lg hover:shadow-primary-300">
          <RiSecurePaymentFill className="text-5xl text-primary-400" />
          <div className="text-center">
            <h6 className="font-bold capitalize">Secure Payment</h6>
            <p className="break-all text-sm text-shuttle-gray-400">
              Secured payment
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-12 flex sm:col-span-6 lg:col-span-3">
        <div className="flex w-full flex-col items-center justify-center gap-2 rounded-lg bg-white p-5 transition-all duration-300 hover:shadow-lg hover:shadow-primary-300">
          <MdSupportAgent className="text-5xl text-primary-400" />
          <div className="text-center">
            <h6 className="font-bold capitalize">Online Support</h6>
            <p className="break-all text-sm text-shuttle-gray-400">
              Support 24/7
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
