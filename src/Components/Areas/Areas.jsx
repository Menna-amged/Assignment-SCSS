import React, { useState } from 'react';
import { useAreas } from '../../Hooks/useMeals';
import { Link } from 'react-router-dom';
import style from './Areas.module.css';

export default function Areas() {
  const { data: areas, isLoading, error } = useAreas();
  const [searchTerm, setSearchTerm] = useState('');

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
        <h2 className="text-2xl font-bold mb-4">Error loading areas</h2>
        <p>{error.message}</p>
      </div>
    );
  }

  const filteredAreas = areas?.filter(area =>
    area.strArea.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  return (
    <div className={style.areas}>
      <div className="mb-8">
        <h1   className=" text-4xl font-extrabold  my-5 bg-gradient-to-r from-orange-400   via-[#ca1023c4] to-[#c90519]  bg-clip-text text-transparent">Cuisine Areas</h1>
    
        
        {/* Search Bar */}
        <div className="relative max-w-md mb-8">
          <input
            type="text"
            placeholder="Search areas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <i className="fa-solid fa-search text-gray-400"></i>
          </div>
        </div>
      </div>

      {/* Areas Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {filteredAreas.map((area) => (
          <Link
            key={area.idArea}
            to={`/area/${area.strArea}`}
            className="group"
          >
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100 overflow-hidden">
              <div className="relative">
                <img
                  src={`https://flagcdn.com/w320/${getCountryCode(area.strArea)}.png`}
                  alt={`${area.strArea} flag`}
                  className="w-full h-48 object-cover group-hover:brightness-110 transition-all duration-300"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/320x240?text=${area.strArea}`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                  {area.strArea}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">
                  Explore traditional recipes from {area.strArea}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredAreas.length === 0 && searchTerm && (
        <div className="text-center py-12">
          <i className="fa-solid fa-search text-4xl text-gray-400 mb-4"></i>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No areas found</h3>
          <p className="text-gray-500">Try searching for a different area</p>
        </div>
      )}
    </div>
  );
} 