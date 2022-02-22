import React from "react";

function Menus({ foodLists }) {
  return (
    <div className="grid grid-cols-3 gap-8 mb-14 h-full">
      {foodLists.map((item) => {
        return (
          <div
            key={item.id}
            className="border-2 border-gray-400 rounded-xl flex flex-col"
          >
            <div className="h-3/5">
              <img
                className="h-full w-full object-cover rounded-tl-lg rounded-tr-lg"
                src={item.img_url}
                alt="foods"
              />
            </div>
            <div className="h-2/5">
              <p className="text-2xl p-2 font-semibold text-rose-600">
                {item.title}
              </p>
              <p className="text-xl p-2 text-rose-500">
                ₱{item.price.toFixed(2)}
              </p>
              <p className="text-sm p-2 text-rose-400">{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Menus;
