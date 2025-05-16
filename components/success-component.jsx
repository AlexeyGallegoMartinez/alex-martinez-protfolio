export default function SuccessComponent({ headline, description }) {
  return (
    <div className="flex flex-col justify-center items-center py-10 px-5 md:px-0 mt-40 bg-white mx-60 rounded-md">
      <div className="bg-green-100 text-green-500 rounded-full w-16 h-16 flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <h1 className="md:text-2xl font-bold mt-4 text-green-500 font-poppins">
        {headline}
      </h1>
      <p className="py-5 text-green-500 text-sm md:text-md text-center">
        {description}
      </p>
      {/* <button></button> */}
    </div>
  );
}
