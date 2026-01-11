import React from 'react';

const MealSelector = ({ selectedMeal, onSelectMeal }) => {
    const meals = ['Morning', 'Afternoon', 'Night'];

    return (
        <div className="flex justify-center space-x-4 my-6">
            <div className="inline-flex p-1 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                {meals.map((meal) => (
                    <button
                        key={meal}
                        onClick={() => onSelectMeal(meal)}
                        className={`
              px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200
              ${selectedMeal === meal
                                ? 'bg-primary text-white shadow-lg shadow-primary/30'
                                : 'text-gray-400 hover:text-white hover:bg-white/5'}
            `}
                    >
                        {meal}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default MealSelector;
