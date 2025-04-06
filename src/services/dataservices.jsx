

function getSession(){
    const token = JSON.parse(sessionStorage.getItem("token"));
    const cbid = JSON.parse(sessionStorage.getItem("cbid"));
    return {token, cbid};
}

export async function getUser(){
    const browserData = getSession();
    const requestOptions = {
        method: "GET",
        headers: {"Content-Type": "application/json", Authorization: `Bearer ${browserData.token}`}
    }
    // const response = await fetch(`http://localhost:8000/600/users/${browserData.cbid}`, requestOptions);

    // const response = await fetch(`https://localhost:7139/api/User/${browserData.cbid}`, requestOptions);

    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/User/${browserData.cbid}`, requestOptions);

    if(!response.ok){
        throw { message: response.statusText, status: response.status };
    }
    const data = await response.json();
    return data;
}

// export async function getUserOrders(){
//     const browserData = getSession();
//     const response = await fetch(`http://localhost:8000/660/orders?user.id=${browserData.cbid}`, {
//         method: "GET",
//         headers: {"Content-Type": "application/json", Authorization: `Bearer ${browserData.token}`}
//     });
//     const data = await response.json();
//     return data;
// }

export async function getUserOrders(){
    const browserData = getSession();
    // const response = await fetch(`https://localhost:7139/api/Order/user/${browserData.cbid}`, {
    //     method: "GET",
    //     headers: {"Content-Type": "application/json", Authorization: `Bearer ${browserData.token}`}
    // });

    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/Order/user/${browserData.cbid}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${browserData.token}`
        }
    });
    
    if(!response.ok){
        throw { message: response.statusText, status: response.status };
    }
    const data = await response.json();
    console.log(data)
    return data;
}



// export async function createOrder(cartList, total, user){
//     const browserData = getSession();
//     const order = {
//         cartList: cartList,
//         amount_paid: total,
//         quantity: cartList.length,
//         user: {
//             name: user.name,
//             email: user.email,
//             id: user.id
//         }
//     }
//     const response = await fetch("http://localhost:8000/660/orders", {
//     method: "POST",
//     headers: { "Content-Type": "application/json", Authorization: `Bearer ${browserData.token}` },
//     body: JSON.stringify(order)
//     });
//     const data = await response.json();
//     return data;



// }


export async function createOrder(cartList, total, user) {
    const browserData = getSession();

    // console.log(cartList)

    
    const orderItems = cartList.map(item => ({
        productId: item.productId,
        price: item.price,
        quantity: item.quantity ?? 1
    }));

   
    const order = {
        userId: user.id, 
        userEmail: user.email, 
        amountPaid: total,
        quantity: cartList.length, 
        orderDate: new Date().toISOString(), 
        orderItems: orderItems
    };

    console.log("Sending Order Payload:", order);

    const requestOptions ={

        method: "POST",
        headers: { 
            "Content-Type": "application/json", 
            Authorization: `Bearer ${browserData.token}` 
        },
        body: JSON.stringify(order)

    }

    
    // const response = await fetch("https://localhost:7139/api/Order", {
    //     method: "POST",
    //     headers: { 
    //         "Content-Type": "application/json", 
    //         Authorization: `Bearer ${browserData.token}` 
    //     },
    //     body: JSON.stringify(order)
    // });
    
    // const response = await fetch("https://localhost:7139/api/Order", requestOptions);

    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/Order`, requestOptions);


    if(!response.ok){
        throw { message: response.statusText, status: response.status };
    }
    

    // Parse the response data
    const data = await response.json();
    console.log(data);
    return data;
    
}



// export async function createOrder(cartList, total, user) {
//     try {
//         const browserData = getSession();

//         if (!user || !user.id || !user.email) {
//             throw new Error("Invalid user data: Ensure user is logged in.");
//         }

//         if (!cartList || cartList.length === 0) {
//             throw new Error("Cart is empty. Cannot place an order.");
//         }

//         // Prepare order items
//         const orderItems = cartList.map(item => ({
//             productId: item.id,
//             price: item.price,
//             quantity: item.quantity
//         }));

//         // Prepare order payload
//         const order = {
//             userId: user.id,  // Fixed case issue
//             userEmail: user.email,  // Fixed case issue
//             amountPaid: total || 0,
//             quantity: cartList.length, 
//             orderDate: new Date().toISOString(),
//             orderItems: orderItems
//         };

//         console.log("Sending Order Payload:", order);

//         // API request
//         const response = await fetch("https://localhost:7139/api/Order", {
//             method: "POST",
//             headers: { 
//                 "Content-Type": "application/json", 
//                 Authorization: `Bearer ${browserData?.token || ""}`
//             },
//             body: JSON.stringify(order)
//         });

//         const data = await response.json();

//         if (!response.ok) {
//             console.error("Order API Error:", data);
//             throw new Error(data.title || "Failed to place order.");
//         }

//         console.log("Order Successful:", data);
//         return data;

//     } catch (error) {
//         console.error("Create Order Error:", error.message);
//         return { success: false, error: error.message };
//     }
// }
