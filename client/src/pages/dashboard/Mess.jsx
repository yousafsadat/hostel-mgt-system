import React, { useState } from 'react';

const Mess = () => {
  const [menu, setMenu] = useState({
    Monday: {
      breakfast: 'Pancakes, Juice, Coffee',
      teabreak: 'Biscuits, Tea',
      lunch: 'Rice, Chicken, Salad',
      dinner: 'Pasta, Meatballs, Vegetables',
    },
    Tuesday: {
      breakfast: 'Omelette, Toast, Coffee',
      teabreak: 'Muffins, Tea',
      lunch: 'Pasta, Meatballs, Vegetables',
      dinner: 'Pizza, Garlic Bread, Salad',
    },
    Wednesday: {
      breakfast: 'Cereal, Milk, Orange Juice',
      teabreak: 'Sandwiches, Tea',
      lunch: 'Burgers, Fries, Coleslaw',
      dinner: 'Chicken Curry, Rice, Peas',
    },
    Thursday: {
      breakfast: 'Smoothie, Croissant, Tea',
      teabreak: 'Cookies, Coffee',
      lunch: 'Pizza, Garlic Bread, Salad',
      dinner: 'Fish, Rice, Broccoli',
    },
    Friday: {
      breakfast: 'Fruit Salad, Yogurt, Toast',
      teabreak: 'Scones, Tea',
      lunch: 'Fish, Rice, Peas',
      dinner: 'Grilled Steak, Mashed Potatoes, Salad',
    },
  });

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Mess Menu</h2>
      
      <div className="space-y-6">
        {Object.keys(menu).map((day) => (
          <div key={day} className="p-4 bg-white shadow-md rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{day}</h3>
            
            {Object.keys(menu[day]).map((mealTime) => (
              <div key={mealTime} className="mb-3">
                <h4 className="font-medium text-gray-700 capitalize">{mealTime}</h4>
                <p className="text-gray-600">{menu[day][mealTime]}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mess;
