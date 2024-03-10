const IconBadge = ({ icon, text }) => {
  return (
    <>
      <span className="relative text-3xl text-black transition-all duration-300 hover:text-green-600 hover:cursor-pointer">
        {icon}
        <span className="bg-yellow-500 text-sm rounded-full min-h-5 min-w-5 absolute flex items-center justify-center -top-1 -left-2 transition-all duration-300 hover:text-white">
          {text}
        </span>
      </span>
    </>
  );
};

export default IconBadge;
