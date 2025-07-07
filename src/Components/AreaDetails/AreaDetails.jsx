import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useMealsByArea } from '../../Hooks/useMeals';
import style from './AreaDetails.module.scss';

export default function AreaDetails() {
  const { areaName } = useParams();
  const { data: meals, isLoading, error } = useMealsByArea(areaName);

  // Function to get country code from area name
  const getCountryCode = (areaName) => {
    const countryMap = {
      'American': 'us',
      'British': 'gb',
      'Chinese': 'cn',
      'French': 'fr',
      'Indian': 'in',
      'Italian': 'it',
      'Japanese': 'jp',
      'Jamaican': 'jm',
      'Kenyan': 'ke',
      'Malaysian': 'my',
      'Mexican': 'mx',
      'Moroccan': 'ma',
      'Polish': 'pl',
      'Portuguese': 'pt',
      'Russian': 'ru',
      'Spanish': 'es',
      'Thai': 'th',
      'Tunisian': 'tn',
      'Turkish': 'tr',
      'Vietnamese': 'vn',
      'Unknown': 'un',
      'Canadian': 'ca',
      'Dutch': 'nl',
      'Egyptian': 'eg',
      'Filipino': 'ph',
      'Greek': 'gr',
      'Irish': 'ie',
      'Croatian': 'hr',
      'Norwegian': 'no',
      'Peruvian': 'pe',
      'Lebanese': 'lb',
      'Ethiopian': 'et',
      'Finnish': 'fi',
      'Pakistani': 'pk',
      'Indonesian': 'id',
      'Australian': 'au',
      'Fusion': 'un',
      'Miscellaneous': 'un',
      'Algerian': 'dz',
      'Austrian': 'at',
      'Bangladeshi': 'bd',
      'Belgian': 'be',
      'Brazilian': 'br',
      'Bulgarian': 'bg',
      'Central European': 'un',
      'Eastern European': 'un',
      'English': 'gb',
      'German': 'de',
      'Icelandic': 'is',
      'Iranian': 'ir',
      'Israeli': 'il',
      'Kuwaiti': 'kw',
      'Middle Eastern': 'un',
      'Nordic': 'un',
      'South American': 'un',
      'South East Asian': 'un',
      'Syrian': 'sy',
      'Taiwanese': 'tw',
      'Uzbekistani': 'uz',
      'Yemenite': 'ye'
    };
    
    return countryMap[areaName] || 'un';
  };

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
        <h2 className="text-2xl font-bold mb-4">Error loading area details</h2>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <div className={style.areaDetails}>
      {/* Header Section */}
      <div className="mb-8">
        <Link 
          to="/areas" 
          className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4 transition-colors duration-300"
        >
          <i className="fa-solid fa-arrow-left mr-2"></i>
          Back to Areas
        </Link>
        
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="flex-shrink-0">
            <img
              src={`https://flagcdn.com/w320/${getCountryCode(areaName)}.png`}
              alt={`${areaName} flag`}
              className="w-32 h-32 object-cover rounded-xl shadow-lg"
              onError={(e) => {
                e.target.src = `https://via.placeholder.com/128x128?text=${areaName}`;
              }}
            />
          </div>
          
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">{areaName}</h1>
            <p className="text-gray-600 text-lg">
              Discover {meals?.length || 0} traditional recipes from {areaName}
            </p>
          </div>
        </div>
      </div>

      {/* Meals Section */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Traditional Recipes from {areaName}
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
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                      {meal.strMeal}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {meal.strCategory || 'Traditional Recipe'}
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
            <p className="text-gray-500">No recipes currently available from {areaName}</p>
          </div>
        )}
      </div>
    </div>
  );
} 