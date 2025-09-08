import React from "react";
const plans = [
  {
    name: "StudyNet Pro",
    price: "200 NPR",
    duration: "1 Month",
    features: [
      "Teacher's Lecture Videos",
      "PYQ Solutions",
      "Faculty Quizzes"
    ],
  },
  {
    name: "StudyNet Expert",
    price: "400 NPR",
    duration: "2 Months",
    features: [
      "All features from Pro",
      "PYQ Solutions Classes",
      "Direct Q&A with Experts"
    
    ],
  },
  {
    name: "StudyNet Expert",
    price: "500 NPR",
    duration: "3 Months",
    features: [
      "All features from Expert",
      "Teacher Lecture Videos",
      "Various Workshops",
      "Verified Notes from Qualified Teachers",
    ],
  },
];

const PremiumSection = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-2 text-center">Premium Plans</h2>
      <h1 className="text-xl mb-6 text-center">"Get Ad free experience in all three plans"</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md p-6 hover:scale-105 transition-transform"
          >
            <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
            <p className="text-lg font-bold text-blue-600">{plan.price}</p>
            <p className="text-sm text-gray-500 mb-4">{plan.duration}</p>
            <ul className="text-gray-700 mb-4 space-y-2">
              {plan.features.map((feature, fIdx) => (
                <li key={fIdx}>✅ {feature}</li>
              ))}
            </ul>
            <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
              Subscribe Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PremiumSection;
