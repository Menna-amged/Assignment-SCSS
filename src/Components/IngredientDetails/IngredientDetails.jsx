import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useIngredientDetails, useMealsByIngredient } from '../../Hooks/useMeals';
import style from './IngredientDetails.module.scss';

export default function IngredientDetails() {
  const { ingredientName } = useParams();
  const { data: ingredientDetails, isLoading: isLoadingDetails, error: detailsError } = useIngredientDetails(ingredientName);
  const { data: meals, isLoading: isLoadingMeals, error: mealsError } = useMealsByIngredient(ingredientName);

  if (isLoadingDetails || isLoadingMeals) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  if (detailsError || mealsError) {
    return (
      <div className="text-center text-red-500">
        <h2 className="text-2xl font-bold mb-4">Error loading ingredient details</h2>
        <p>{detailsError?.message || mealsError?.message}</p>
      </div>
    );
  }

  return (
    <div className={style.ingredientDetails}>
      {/* Header Section */}
      <div className="mb-8">
        <Link 
          to="/ingredients" 
          className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4 transition-colors duration-300"
        >
          <i className="fa-solid fa-arrow-left mr-2"></i>
          Back to Ingredients
        </Link>
        
        <div className="flex flex-col items-start  gap-6">
        <div className="flex-1">
            <h1 className="text-4xl font-bold  mb-2">{ingredientName}</h1>
        
          </div>
          <div className="flex-shrink-0">
            <img
              src={`https://www.themealdb.com/images/ingredients/${ingredientName}.png`}
              alt={ingredientName}
              className="w-48 h-48 object-cover rounded-xl shadow-lg"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/128x128?text=No+Image';
              }}
            />
          </div>
          
        
        </div>
      </div>

      {/* Description Section */}
      {ingredientDetails?.description && (
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold  mb-4">About {ingredientName}</h2>
          <p className="text-gray-700 leading-relaxed">
            {ingredientDetails.description}
          </p>
        </div>
      )}

      {/* Meals Section */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold  mb-6">
          Recipes with {ingredientName}
        </h2>
        
        {meals && meals.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {meals.map((meal) => (
              <Link
                key={meal.idMeal}
                to={`/mealdetails/${meal.idMeal}`}
                className="group"
              >
                <div className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="relative">
                    <img
                      src={meal.strMealThumb}
                      alt={meal.strMeal}
                      className="w-full h-48 object-cover group-hover:brightness-110 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-orange-600 transition-colors duration-300">
                      {meal.strMeal}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {meal.strCategory || 'Delicious Recipe'}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <i className="fa-solid fa-utensils text-4xl text-gray-400 mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No recipes found</h3>
            <p className="text-gray-500">No recipes currently use {ingredientName}</p>
          </div>
        )}
      </div>

      {/* Related Ingredients Section */}
      {ingredientDetails?.ingredients && ingredientDetails.ingredients.length > 0 && (
        <div className="bg-white rounded-xl shadow-lg p-6 mt-8">
          <h2 className="text-2xl font-semibold  mb-6">Common Pairings</h2>
          <div className="flex flex-wrap gap-3">
            {ingredientDetails.ingredients.slice(0, 10).map((ingredient, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium"
              >
                {ingredient.name}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 