

import { Routes, Route } from "react-router-dom";
import { HomePage, ProductPage } from "../pages";
import { ProductDetail } from "../pages";
import { Login } from "../pages";
import { Register } from "../pages";
import { CartPage } from "../pages";
import { ProtectedRoute } from "./protectedroutes";
import { OrderPage } from "../pages/order/orderpage";
import { DashboardPage } from "../pages";
import { PageNotFound } from "../pages";

export const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="products" element={<ProductPage />} />
     
        <Route path="products/:productId" element={<ProductDetail />} />


        
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="cart" element={<ProtectedRoute><CartPage /></ProtectedRoute>} />
        <Route path="order-summary" element={<ProtectedRoute><OrderPage /></ProtectedRoute>} />
        <Route path="dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
        <Route path="*" element={<PageNotFound />} />

    </Routes>
    </>
  )
}



// json-server --watch data/db.json --port 8000