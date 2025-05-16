"use client";

import { useFormStatus } from "react-dom";

// To use useFormStatus it need to be in a separat ecomponent like this and then
// such component must be rendered with a <form>
export default function FormSubmit() {
  const status = useFormStatus();
  // if (status.pending) {
  // }

  return (
    <button
      className="bg-[#00A6FF] text-white border-[#00A6FF]
               border-l border-t border-b rounded-tr-md rounded-br-md px-2 md:px-10 py-2
               hover:bg-opacity-80 hover:border-opacity-80 duration-500"
    >
      {/* {status.pending ? "Subscribe" : "Submitting..."} */}
      Subscribe
    </button>
  );
}
