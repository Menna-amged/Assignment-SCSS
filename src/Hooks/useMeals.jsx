import React from 'react'
import { useQuery } from "@tanstack/react-query";
import axios from 'axios';

// API Base URL
const API_BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

// Hook for fetching all ingredients
export const useIngredients = () => {
  return useQuery({
    queryKey: ['ingredients'],
    queryFn: async () => {
      const response = await axios.get(`${API_BASE_URL}/list.php?i=list`);
      return response.data.meals || [];
    },
  });
};

// Hook for fetching meals by ingredient
export const useMealsByIngredient = (ingredient) => {
  return useQuery({
    queryKey: ['mealsByIngredient', ingredient],
    queryFn: async () => {
      const response = await axios.get(`${API_BASE_URL}/filter.php?i=${ingredient}`);
      return response.data.meals || [];
    },
    enabled: !!ingredient,
  });
};

// Hook for fetching ingredient details
export const useIngredientDetails = (ingredientName) => {
  return useQuery({
    queryKey: ['ingredientDetails', ingredientName],
    queryFn: async () => {
      // Since TheMealDB doesn't have a direct ingredient details endpoint,
      // we'll fetch meals that use this ingredient and extract ingredient info
      const response = await axios.get(`${API_BASE_URL}/filter.php?i=${ingredientName}`);
      const meals = response.data.meals || [];
      
      if (meals.length > 0) {
        // Get the first meal to extract ingredient details
        const mealResponse = await axios.get(`${API_BASE_URL}/lookup.php?i=${meals[0].idMeal}`);
        const meal = mealResponse.data.meals?.[0];
        
        if (meal) {
          // Extract ingredient information from the meal
          const ingredients = [];
          for (let i = 1; i <= 20; i++) {
            const ingredient = meal[`strIngredient${i}`];
            const measure = meal[`strMeasure${i}`];
            if (ingredient && ingredient.trim()) {
              ingredients.push({
                name: ingredient,
                measure: measure || '',
              });
            }
          }
          
          return {
            name: ingredientName,
            description: meal.strInstructions,
            image: `https://www.themealdb.com/images/ingredients/${ingredientName}.png`,
            meals: meals,
            ingredients: ingredients,
          };
        }
      }
      
      return null;
    },
    enabled: !!ingredientName,
  });
};

// Hook for fetching all areas
export const useAreas = () => {
  return useQuery({
    queryKey: ['areas'],
    queryFn: async () => {
      const response = await axios.get(`${API_BASE_URL}/list.php?a=list`);
      return response.data.meals || [];
    },
  });
};

// Hook for fetching meals by area
export const useMealsByArea = (area) => {
  return useQuery({
    queryKey: ['mealsByArea', area],
    queryFn: async () => {
      const response = await axios.get(`${API_BASE_URL}/filter.php?a=${area}`);
      return response.data.meals || [];
    },
    enabled: !!area,
  });
};

export default function useMeals() {
  return (
    <>
      
    </>
  )
}
