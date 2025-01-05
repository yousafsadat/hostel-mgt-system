import React, { useState } from "react";
import Sidebar from "../../components/Dashboard/Sidebar";

const Mess = () => {
  const [menu, setMenu] = useState({
    Monday: {
      breakfast: "Pancakes, Juice, Coffee",
      teabreak: "Biscuits, Tea",
      lunch: "Rice, Chicken, Salad",
      dinner: "Pasta, Meatballs, Vegetables",
    },
    Tuesday: {
      breakfast: "Omelette, Toast, Coffee",
      teabreak: "Muffins, Tea",
      lunch: "Pasta, Meatballs, Vegetables",
      dinner: "Pizza, Garlic Bread, Salad",
    },
    Wednesday: {
      breakfast: "Cereal, Milk, Orange Juice",
      teabreak: "Sandwiches, Tea",
      lunch: "Burgers, Fries, Coleslaw",
      dinner: "Chicken Curry, Rice, Peas",
    },
    Thursday: {
      breakfast: "Smoothie, Croissant, Tea",
      teabreak: "Cookies, Coffee",
      lunch: "Pizza, Garlic Bread, Salad",
      dinner: "Fish, Rice, Broccoli",
    },
    Friday: {
      breakfast: "Fruit Salad, Yogurt, Toast",
      teabreak: "Scones, Tea",
      lunch: "Fish, Rice, Peas",
      dinner: "Grilled Steak, Mashed Potatoes, Salad",
    },
  });

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="p-8 w-full">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Mess Menu</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.keys(menu).map((day) => (
            <div
              key={day}
              className="p-6 bg-white shadow-md rounded-lg flex flex-col"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">{day}</h3>

              <div className="space-y-2">
                {Object.keys(menu[day]).map((mealTime) => (
                  <div key={mealTime}>
                    <h4 className="font-medium text-gray-700 capitalize">
                      {mealTime}
                    </h4>
                    <p className="text-gray-600">{menu[day][mealTime]}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mess;
