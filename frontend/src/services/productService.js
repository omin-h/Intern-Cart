//fetch data from backend for products

const getProducts = async () => {
    try{
        const response = await fetch('http://localhost:3001/products');

        if(!response.ok){
            throw new Error('Server responded with an error!');
        }
        return await response.json();

    }
    catch(error){
        console.error('Error fetching products:', error);
        return null;
    }
   
}

export { getProducts };