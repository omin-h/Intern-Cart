import React, {useState, useEffect} from 'react'
import getCategories from '../services/categoryService';

const CategoryMenu = ({ onCategorySelect }) => {
    const [categories, setCategories] = useState([]);

    //Get the categories from the service files
    useEffect(() => {
        const loadCategories = async () => {
            const data = await getCategories();
            setCategories(data);
        };
      
        loadCategories();
    }, []);


  return (
    <div>
      <h3>Categories</h3>
      <ul>
        
        <li onClick={() => onCategorySelect('all')} style={{ cursor: 'pointer' }}>
          All
        </li>
        {categories.map((category) => (
          <li
            key={category.id}
            onClick={() => onCategorySelect(category.name)}
            style={{ cursor: 'pointer' }}
          >
            {category.name}
          </li>
        ))}
      </ul>

    </div>
  )
}

export default CategoryMenu;
