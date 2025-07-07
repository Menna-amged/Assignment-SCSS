import React, { useState } from 'react';
import { useIngredients } from '../../Hooks/useMeals';
import { Link } from 'react-router-dom';
import style from './Ingredients.module.scss';

export default function Ingredients() {
  const { data: ingredients, isLoading, error } = useIngredients();
  const [searchTerm, setSearchTerm] = useState('');

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500">
        <h2 className="text-2xl font-bold mb-4">Error loading ingredients</h2>
        <p>{error.message}</p>
      </div>
    );
  }

  const filteredIngredients = ingredients?.filter(ingredient =>
    ingredient.strIngredient.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  return (
    <div className={style.ingredients}>
      <div className="mb-8">
        <h1   className=" text-4xl font-extrabold  my-5 bg-gradient-to-r from-orange-400   via-[#ca1023c4] to-[#c90519]  bg-clip-text text-transparent">Ingredients</h1>
    
        
        {/* Search Bar */}
        <div className="relative max-w-md mb-8">
          <input
            type="text"
            placeholder="Search ingredients..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <i className="fa-solid fa-search text-gray-400"></i>
          </div>
        </div>
      </div>

      {/* Ingredients Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {filteredIngredients.map((ingredient) => (
          <Link
            key={ingredient.idIngredient}
            to={`/ingredient/${ingredient.strIngredient}`}
            className="group"
          >
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100 overflow-hidden">
              <div className="relative">
                <img
                  src={`https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}.png`}
                  alt={ingredient.strIngredient}
                  className="w-full h-48 object-cover group-hover:brightness-110 transition-all duration-300"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/300x200?text=No+Image';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                  {ingredient.strIngredient}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {ingredient.strDescription || 'Explore recipes using this ingredient'}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredIngredients.length === 0 && searchTerm && (
        <div className="text-center py-12">
          <i className="fa-solid fa-search text-4xl text-gray-400 mb-4"></i>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No ingredients found</h3>
          <p className="text-gray-500">Try searching for a different ingredient</p>
        </div>
      )}
    </div>
  );
} 