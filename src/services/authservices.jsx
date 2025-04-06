

export async function login(authDetail){
    const requestOptions = {
        method: "POST",
        headers: {"content-Type": "application/json"},
        body: JSON.stringify(authDetail)
    }
        
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/User/login`, requestOptions);


    // const response = await fetch("https://localhost:7139/api/User/login", requestOptions);
    const data = await response.json();

    if(data.token){
    sessionStorage.setItem("token", JSON.stringify(data.token));
    sessionStorage.setItem("cbid", JSON.stringify(data.user.id));
    }

    return data;
}

export async function register(authDetail){
    const requestOptions = {
        method: "POST",
        headers: {"content-Type": "application/json"},
        body: JSON.stringify(authDetail)
      }
  
    //   const response = await fetch("https://localhost:7139/api/User/register", requestOptions);

    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/User/register`, requestOptions);

      const data = await response.json();
        
    //   if(data.accessToken){
    //     sessionStorage.setItem("token", JSON.stringify(data.accessToken));
    //     sessionStorage.setItem("cbid", JSON.stringify(data.user.id));
    //   }

      return data;
}

export function logout(){
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("cbid");
}