import React, { useState } from "react";
import { motion } from "framer-motion";
import { RadioGroup } from "@headlessui/react";
import { CreditCardIcon, CheckCircleIcon } from "@heroicons/react/24/solid";

const plans = [
  { name: "Basic", price: "$9.99/month" },
  { name: "Pro", price: "$19.99/month" },
  { name: "Enterprise", price: "$49.99/month" },
];

export function BillingSettings() {
  const [selectedPlan, setSelectedPlan] = useState(plans[1]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">
        Billing Settings
      </h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Select a Plan
          </h3>
          <RadioGroup value={selectedPlan} onChange={setSelectedPlan}>
            <div className="space-y-4">
              {plans.map((plan) => (
                <RadioGroup.Option
                  key={plan.name}
                  value={plan}
                  className={({ checked }) =>
                    `${
                      checked
                        ? "bg-purple-600 bg-opacity-75 text-white"
                        : "bg-white bg-opacity-10"
                    } relative rounded-lg px-5 py-4 cursor-pointer flex focus:outline-none`
                  }
                >
                  {({ checked }) => (
                    <>
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center">
                          <div className="text-sm">
                            <RadioGroup.Label
                              as="p"
                              className={`font-medium ${
                                checked ? "text-white" : "text-gray-300"
                              }`}
                            >
                              {plan.name}
                            </RadioGroup.Label>
                            <RadioGroup.Description
                              as="span"
                              className={`inline ${
                                checked ? "text-purple-100" : "text-gray-500"
                              }`}
                            >
                              {plan.price}
                            </RadioGroup.Description>
                          </div>
                        </div>
                        {checked && (
                          <div className="flex-shrink-0 text-white">
                            <CheckCircleIcon className="w-6 h-6" />
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Payment Method
          </h3>
          <div className="bg-white bg-opacity-10 rounded-lg p-4 flex items-center space-x-4">
            <CreditCardIcon className="h-8 w-8 text-pink-400" />
            <div>
              <p className="text-white font-medium">Visa ending in 4242</p>
              <p className="text-gray-400 text-sm">Expires 12/2024</p>
            </div>
          </div>
        </div>
        <motion.button
          className="w-full px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:from-pink-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-all duration-300 ease-in-out"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Update Billing Information
        </motion.button>
      </div>
    </motion.div>
  );
}
