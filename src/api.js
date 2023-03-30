import { API_URL } from "./config";

const getMealById = async (mealId) => {
    const response = await fetch(API_URL + 'lookup.php?i=' + mealId);
    return await response.json();        
};

const getAllCategories = async () => {
    const response = await fetch(API_URL + 'categories.php');
    return await response.json(); 
};

const getFilteredByCategory = async (category) => {
    const response = await fetch(API_URL + 'filter.php?c=' + category);
    return await response.json(); 
};

const getFilteredByArea = async (area) => {
    const response = await fetch(API_URL + 'filter.php?a=' + area);
    return await response.json(); 
};

export {getMealById, getAllCategories, getFilteredByCategory, getFilteredByArea};
