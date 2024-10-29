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

        <div className='pagination'>
            <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            />

        <div className='pagination'>
            <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            />
            </div>

            <div className='filter'>
            <Filter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategorySelect={handleCategorySelect}
            />
        </div>

        <div className='sort'>
            <Sort onSort={handleSort} />
        </div>

        <div className='cart'>
            <Cart cart={cart} onAddToCart={handleAddToCart} />

        </div>

        <div className='cart'>
            <Cart cart={cart} onAddToCart={handleAddToCart} />
        </div>

    </div>
  )
}

export default Upper