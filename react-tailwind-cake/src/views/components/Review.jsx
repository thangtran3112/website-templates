import Rater from "react-rater";
import "react-rater/lib/react-rater.css";

export const Review = ({ name, text, description, image, rate }) => {
  return (
    <div className="rounded-lg border p-10 shadow-lg transition-all duration-300 hover:shadow-primary-300">
      <Rater interactive={false} total={5} rating={rate} />
      <p className="my-6">{text}</p>
      <div className="flex gap-5">
        <figure className="h-[80px] w-[80px] overflow-hidden rounded-full border-[3px] border-primary-500 lg:h-[100px] lg:w-[100px]">
          <img className="h-full w-full object-cover" src={image} alt={name} />
        </figure>
        <div className="self-center">
          <h6 className="text-xl font-bold text-shuttle-gray-900">{name}</h6>
          <p className="text-shuttle-gray-400">{description}</p>
        </div>
      </div>
    </div>
  );
};
