export default function SubmitEmailComponent({ action }) {
  return (
    <>
      <form action={action} className="flex w-full mt-10 px-10 md:px-0">
        <input
          className="border-l rounded-tl-md rounded-bl-md border-t border-b py-1 px-5 w-full"
          placeholder="Email Address"
          type="email"
          required
          id="email"
          name="email"
        />
        <button
          className="bg-[#00A6FF] text-white border-[#00A6FF]
                     border-l border-t border-b rounded-tr-md rounded-br-md px-2 md:px-10 py-2
                     hover:bg-opacity-80 hover:border-opacity-80 duration-500"
        >
          Subscribe
        </button>
      </form>
      <p className="text-gray-300 pt-5 italic font-light text-xs md:text-md">
        Your email is safe with us, we do not spam
      </p>
    </>
  );
}
