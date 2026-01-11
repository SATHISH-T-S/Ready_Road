import React from 'react';

const MealSelector = ({ selectedMeal, onSelectMeal, categories }) => {
    const meals = categories && categories.length > 0 ? categories : ['Morning', 'Afternoon', 'Night'];

    return (
        <div className="center my-6">
            <div className="meal-selector-container">
                {meals.map((meal) => (
                    <button
                        key={meal}
                        onClick={() => onSelectMeal(meal)}
                        className={`meal-option ${selectedMeal === meal ? 'active' : ''}`}
                    >
                        {meal}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default MealSelector;
