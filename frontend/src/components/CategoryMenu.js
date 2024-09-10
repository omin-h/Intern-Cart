import React, { useEffect, useState } from 'react';
import { getCategories } from '../services/categoryService';

const CategoryMenu = () => {
  const [categories, setCategories] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadCategories = async () => {
    try {
      const categoryData = await getCategories();
      setCategories(categoryData); 
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    loadCategories();
  }, []);

  if (loading) return <p>Loading categories...</p>;

  if (!categories || categories.length === 0) {
    return <p>No categories available</p>;
  }

  return (
    <ul>
      {categories.map((category) => (
        <li key={category.id}>{category.name}</li>
      ))}
    </ul>
  );
};

export default CategoryMenu;
