//fetch categories from backend
const getCategories = async () => {
    try{
        const response = await fetch('http://localhost:5000/api/categories');

        if(!response.ok){
            throw new Error('Server responded with an error!');
        }
        return await response.json();

    }
    catch(error){
        console.error(error);
        return null;
    }
   
}

export { getCategories };