import React from 'react'

const Upper = () => {
  return (
    <div className='fill'>
        <SearchBar onSearch={handleSearch} categories={categories} onCategorySelect={handleCategorySelect} />
        <div className='product-container'>
            {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
            ))}

        </div>

        <div className='upperDiv'>
            <div className='upperDiv1'>
                <h1>Shop</h1>
                <p>Home</p>
                <p>Shop</p>
            </div>
            <div className='upperDiv2'>
                <h1>Shop</h1>
                <p>Home</p>
                <p>Shop</p>
            </div>
        </div>

        <div className='upperDiv'>
            <div className='upperDiv1'>
                <h1>Shop</h1>
                <p>Home</p>
                <p>Shop</p>
            </div>
            <div className='upperDiv2'>
                <h1>Shop</h1>
                <p>Home</p>
                <p>Shop</p>
            </div>
        </div>

        <div className='search'>
            <input type='text' placeholder='Search for products' />
            <button>Search</button>

        </div>

    </div>
  )
}

export default Upper