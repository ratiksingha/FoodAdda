import React from "react";

import { useNavigate } from "react-router-dom";
import { Ghost } from "lucide-react";
import { motion } from "framer-motion";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-md bg-white p-8 rounded-2xl shadow-2xl border border-gray-200"
      >
        <div className="flex justify-center mb-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-indigo-100 text-indigo-700 p-4 rounded-full"
          >
            <Ghost size={40} />
          </motion.div>
        </div>
        <h1 className="text-3xl font-bold mb-2">Oops! Page not found</h1>
        <p className="text-gray-600 mb-6">
          It seems you've ventured into the void. The page you're looking for doesn't exist.
        </p>
        <button
  onClick={() => navigate("/")}
  className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
>
  Take Me Home
</button>
      </motion.div>
    </div>
  );
};

export default Error;
