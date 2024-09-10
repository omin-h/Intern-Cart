import React, { useState, useEffect } from 'react';
import CategoryMenu from './CategoryMenu';
import SearchBar from './SearchBar';
import { getProducts } from '../services/productService';

const Product = () => {
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchInput, setSearchInput] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]); 

    //fetch products from the service files
    useEffect(() => {
        const loadProducts = async () => {
            const data = await getProducts();
            setProducts(data);
            setFilteredProducts(data); 
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
        <div>
            <h1>Shopping Cart</h1>
            <SearchBar onSearch={handleSearch} />
            <CategoryMenu onCategorySelect={handleCategorySelect} />
            <div>
                <h3>Products</h3>
                <ul>
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <li key={product.id}>
                                {product.name} - {product.category} - ${product.price}
                            </li>
                        ))
                    ) : (
                        <p>No products found.</p>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Product;
