import { useState } from "react";
import ButtonSvg from "../svg/headerSvg/ButtonSvg";
import CreateAccount from "./CreateAccount";
import Logo from "./Logo";
import Menu from "./Menu";

export default function Header() {
  const [mobileMenuToogle, setMobileMenuToggle] = useState(false);

  function toggleMenu() {
    setMobileMenuToggle((prev) => !prev);
    console.log("ToogleMobileMenu", !mobileMenuToogle);
  }
  return (
    <header className="relative bg-white">
      <p className="flex h-10 items-center justify-center bg-teal-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
        Get free delivery on orders over $100
      </p>

      <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-b border-gray-200">
          <div className="flex h-16 items-center">
            {/* <!-- Mobile menu toggle, controls the 'mobileMenuOpen' state. --> */}
            <button
              type="button"
              className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
              onClick={toggleMenu}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open menu</span>
              <ButtonSvg />
            </button>

            <Logo />
            <Menu onShow={mobileMenuToogle} />
            <CreateAccount />
          </div>
        </div>
      </nav>
    </header>
  );
}
