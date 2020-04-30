// Imports from React
import React, { createContext, useReducer } from 'react';
import { MEALS } from '../data/dummy-data';

// create state
const initialState = {
  meals: MEALS,
  orders: [],
};

// Initiate Context
const MealContext = createContext();

// Create a Reducer
const mealReducer = (state, action) => {
  switch (action.type) {
    case 'change_name':
      const updatedMeals = state.meals;
      updatedMeals.forEach(meal => {
        if (meal.id === action.meal.id) {
          meal.title = 'changed name';
        }
      });
      return { ...state, meals: updatedMeals };

    case 'add_meal_to_order':
      // run some functionality
      console.log('this works!!!!!', action.meal.title);

      return state;
    default:
      return state;
  }
};

// creat a Provider
export const MealProvider = ({ children }) => {
  // const []
  const [state, dispatch] = useReducer(mealReducer, initialState);

  const changeName = meal => {
    dispatch({ type: 'change_name', meal });
  };

  const addMealToOrder = meal => {
    dispatch({ type: 'add_meal_to_order', meal });
  };

  return (
    <MealContext.Provider value={{ state, changeName, addMealToOrder }}>
      {children}
    </MealContext.Provider>
  );
};

// exporting my Context

export default MealContext;

// Going export my provider into my App.js file
