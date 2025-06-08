import React from "react";
import { useContext } from "react";
import { useSelector } from "react-redux";

const funnyMessages = [
  "😄 Your order looks delicious! But how about adding a salad next time?",
  "🍕 Pizza again? Your taste buds are happy, but your gym trainer is crying!",
  "🥤 Don't forget to drink water with all that food!",
  "🍔 That burger looks tasty! Maybe add a fruit for dessert?",
  "🍟 Fries are great, but carrots are crunchier!",
  "🍦 Ice cream is cool, but so is a bowl of fresh berries!",
  "🥗 Your cart is awesome, but your mom says add some greens!",
  "🍰 Cake for dinner? Bold move! How about a smoothie too?",
  "🍩 Donuts are a mood, but apples keep the doctor away!",
  "🍛 Spicy food detected! A glass of milk might help!"
];
const categorySuggestions = {
  "Dessert": "🍰 Sweet tooth alert! Maybe add some fruit for balance?",
  "Beverages": "🥤 Drinks are great, but water is even better!",
  "Pizza": "🍕 Pizza is life! But a salad wouldn't hurt.",
  "Burger": "🍔 That burger looks tasty! How about a side of greens?",
  "Snacks": "🍟 Snacks are fun! Try some nuts or seeds for a healthy twist.",
  "Ice Cream": "🍦 Ice cream is cool, but so is a bowl of fresh berries!",
  "Main Course": "🍛 Main course sorted! Maybe add a veggie dish?",
  // Add more categories as needed
};



const Checkout = () => {

  const checkoutItem=useSelector((store) => store.cart.items);
 const itemCat= checkoutItem[0]?.card.info.category;

  const randomMsg =  (itemCat && categorySuggestions[itemCat]) ||
  funnyMessages[Math.floor(Math.random() * funnyMessages.length)];

const handleSwiggyClick = () => {
  window.open("https://www.swiggy.com/", "_blank");
};
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>
      <div className="bg-orange-100 rounded-lg p-4 mb-4 text-orange-800 text-center max-w-md">
        
          {randomMsg}
      </div>
      <p className="text-md text-gray-500 mt-2">
        And Order from Real{" "}
        <button
          onClick={handleSwiggyClick}
          className="text-orange-600  hover:text-orange-800"
        >
          Swiggy
        </button>
      </p>
    </div>
  );
};

export default Checkout;