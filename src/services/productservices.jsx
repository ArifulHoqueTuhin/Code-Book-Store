
export async function getProductList(searchTerm){
    // const response = await fetch(`http://localhost:8000/444/products?name_like=${searchTerm ? searchTerm : ""}`);

    // const response = await fetch(`https://localhost:7139/api/ProductsAPI?name_like=${searchTerm ? searchTerm : ""}`);

    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/ProductsAPI?name_like=${searchTerm ? searchTerm : ""}`);


    if(!response.ok){
        throw { message: response.statusText, status: response.status };
    }

    const data = await response.json()
    return data;
}

export async function getProduct(productId){
    // const response = await fetch(`https://localhost:7139/api/ProductsAPI/${productId}`);

    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/ProductsAPI/${productId}`);


    if(!response.ok){
        throw { message: response.statusText, status: response.status };
    }
    const data = await response.json()
    return data;
}

export async function getFeaturedList(){
    // const response = await fetch("https://localhost:7139/api/FeaturedProductsAPI");

    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/FeaturedProductsAPI`);

    if(!response.ok){
        throw { message: response.statusText, status: response.status };
    }
    const data = await response.json()
    return data;
}