import { useState } from "react";

export default function CreateAccount() {
  const [currency, setCurrency] = useState("CAD");
  return (
    <div className="ml-auto flex items-center">
      <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
        <a
          href="#"
          className="text-sm font-medium text-gray-700 hover:text-gray-800"
        >
          Sign in
        </a>
        <span className="h-6 w-px bg-gray-200" aria-hidden="true"></span>
        <a
          href="#"
          className="text-sm font-medium text-gray-700 hover:text-gray-800"
        >
          Create account
        </a>
      </div>

      <div className="hidden lg:ml-8 lg:flex">
        <a
          href="#"
          className="flex items-center text-gray-700 hover:text-gray-800"
        >
          <img
            src="https://tailwindui.com/img/flags/flag-canada.svg"
            alt=""
            className="block h-auto w-5 flex-shrink-0"
          />
          <span className="ml-3 block text-sm font-medium">{currency}</span>
          <span className="sr-only"> change currency</span>
        </a>
      </div>
    </div>
  );
}
