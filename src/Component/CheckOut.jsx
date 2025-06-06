import React from "react";



const Checkout = () => {

const handleSwiggyClick = () => {
  window.open("https://www.swiggy.com/", "_blank");
};
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>
      <div className="bg-orange-100 rounded-lg p-4 mb-4 text-orange-800 text-center max-w-md">
        😄 Your order looks delicious! But how about adding a salad next time?
      </div>
      <p className="text-md text-gray-500 mt-2">
        And Order from Real{" "}
        <button
          onClick={handleSwiggyClick}
          className="text-orange-600 underline hover:text-orange-800"
        >
          Swiggy
        </button>
      </p>
    </div>
  );
};

export default Checkout;