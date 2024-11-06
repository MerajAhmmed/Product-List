export default function Menu({ onShow }) {
  const menu = [
    {
      id: crypto.randomUUID(),
      type: "button",
      lable: "Women",
    },
    {
      id: crypto.randomUUID(),
      type: "button",
      lable: "Men",
    },
    {
      id: crypto.randomUUID(),
      type: "link",
      lable: "Company",
    },
    {
      id: crypto.randomUUID(),
      type: "link",
      lable: "Stores",
    },
  ];
  return (
    <div
      className={`${
        onShow
          ? "block lg:hidden w-full bg-teal-100 p-4 absolute left-0 top-24"
          : "hidden lg:flex lg:ml-8 lg:self-stretch"
      }`}
    >
      <div className="flex h-full space-x-8">
        {menu.map((item) =>
          item.type === "button" ? (
            <div key={item.id} className="flex">
              <div className="relative flex">
     
                <button
                  type="button"
                  className={`relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800 ${
                    onShow
                      ? "border-teal-600 text-teal-600"
                      : "border-transparent text-gray-700 hover:text-gray-800"
                  }`}
                  aria-expanded={onShow}
                >
                  {item.lable}
                </button>
              </div>
            </div>
          ) : (
            <a
              key={item.id}
              href="#"
              className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
            >
              {item.lable}
            </a>
          )
        )}
      </div>
    </div>
  );
}
