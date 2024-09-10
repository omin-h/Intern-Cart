import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import { getProducts } from '../services/productService';
import './Product.css';

const Product = () => {
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchInput, setSearchInput] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]); 
    const [categories, setCategories] = useState([]);

    // Fetch products from the service files
    useEffect(() => {
        const loadProducts = async () => {
            const data = await getProducts();
            setProducts(data);
            setFilteredProducts(data);

            // Extract unique categories from products
            const uniqueCategories = ['all', ...new Set(data.map(product => product.category))];
            setCategories(uniqueCategories);
        };

        loadProducts();
    }, []);

    // Handle category selection
    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        applyFilters(category, searchInput);
    };

    // Handle search input
    const handleSearch = (term) => {
        setSearchInput(term); 
        applyFilters(selectedCategory, term); 
    };

    // Filter products based on category and search term
    const applyFilters = (category, search) => { 
        let filtered = products;

        // Filter by category
        if (category !== 'all') {
            filtered = products.filter((product) => product.category === category);
        }

        // Filter by search term
        if (search) {
            filtered = filtered.filter((product) =>
                product.name.toLowerCase().includes(search.toLowerCase())
            );
        }

        setFilteredProducts(filtered);
    };

    return (
        <div className='fill'>
            <h2>Shopping Cart</h2>
            <SearchBar className='search-bar' onSearch={handleSearch} />

            <div>
                <h4>Categories</h4>
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => handleCategorySelect(category)}
                        className={`category-button ${selectedCategory === category ? 'active' : ''}`}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                ))}
            </div>

            <div>
                <h4>Products</h4>
                <ul>
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <li key={product.id}>
                                <div className='prod'>
                                    {product.name} | category: {product.category} | Price: Rs.{product.price} | <img className='pr-img' src={product.image} alt={product.name} />
                                </div>
                            </li>
                        ))
                    ) : (
                        <h5>No products found!!</h5>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Product;
