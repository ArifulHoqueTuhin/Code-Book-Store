
import { Link } from "react-router-dom"
import { useCart } from "../../../context"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faTrash } from "@fortawesome/free-solid-svg-icons";

export const CartCard = ({product}) => {
  const {increaseQuantity, decreaseQuantity, removeFromCart } = useCart();
  return (
    // <div className="flex flex-wrap justify-between border-b dark:border-slate-700 max-w-4xl m-auto p-2 mb-5 ">
    //   <div className="flex">
    //       {/* <a href="">
    //         <img className="w-32 rounded" src={product.poster} alt={product.name} />
    //       </a> */}

    //       <Link to={`/products/${product.productId}`}>
    //         <img className="w-32 rounded" src={product.poster} alt={product.name} />
    //       </Link>
          
    //       <div className="">
    //         <Link to={`/products/${product.productId}`}>
    //           <p className="text-lg ml-2 dark:text-slate-200">{product.name}</p>
    //         </Link> 

       
    //   {/* <button onClick={() => removeFromCart(product)} className="text-base ml-2 text-red-400">Remove</button> */}

    //   <button 
    //         onClick={() => removeFromCart(product)} 
    //         className="text-base ml-2 text-red-400"
    //       >
    //         <FontAwesomeIcon icon={faTrash} className="mr-1" /> Remove
    //       </button>
      
    //       </div>
    //   </div>


    //   <div className="flex items-center space-x-4">
    //     <div className="flex items-center space-x-2">
    //       <button 
    //         onClick={() => decreaseQuantity(product.productId)}
    //           className="p-2 bg-red-500 text-white rounded hover:bg-red-600 flex items-center justify-center"
    //           //  className="text-base ml-1 text-red-500 bg-red-500 text-white rounded"
    //       >
    //         <FontAwesomeIcon icon={faMinus} />
    //       </button>

    //       <span className="text-lg font-semibold dark:text-slate-200">{product.quantity}</span>

    //       <button 
    //         onClick={() => increaseQuantity(product.productId)}
    //         className="p-2 bg-green-500 text-white rounded hover:bg-green-600 flex items-center justify-center"
    //         //  className="text-base ml-2 text-green-400"
    //       >
    //         <FontAwesomeIcon icon={faPlus} />
    //       </button>
    //     </div>
    //     </div>
    //   <div className="text-lg m-2 dark:text-slate-200">
    //     <span>${(product.price * product.quantity).toFixed(2)}</span>
    //   </div>
    // </div>

<div className="flex items-center justify-between border-b dark:border-slate-700 max-w-4xl m-auto p-4 mb-5">
  {/* Left: Product Image & Info */}
  <div className="flex items-center space-x-4 w-3/5">
    <Link to={`/products/${product.productId}`}>
      <img className="w-20 h-20 rounded object-cover" src={product.poster} alt={product.name} />
    </Link>

    <div className="flex-1">
      <Link to={`/products/${product.productId}`}>
        <p className="text-lg font-semibold dark:text-slate-200 truncate max-w-xs">{product.name}</p>
      </Link>
      <button 
        onClick={() => removeFromCart(product)} 
        className="text-red-500 hover:text-red-600 mt-1 flex items-center"
      >
        <FontAwesomeIcon icon={faTrash} className="mr-1" /> Remove
      </button>
    </div>
  </div>

  {/* Right: Quantity Buttons & Price (Fix applied here) */}
  <div className="flex items-center space-x-6">
    <div className="flex items-center space-x-2 bg-gray-100 p-2 rounded">
      <button 
        onClick={() => decreaseQuantity(product.productId)}
        className="w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded-full hover:bg-red-600"
      >
        <FontAwesomeIcon icon={faMinus} />
      </button>

 <span className="text-lg font-semibold dark:text-white dark:bg-gray-700 px-2 py-1 rounded min-w-[24px] text-center">
  {product.quantity}
</span>




      <button 
        onClick={() => increaseQuantity(product.productId)}
        className="w-8 h-8 flex items-center justify-center bg-green-500 text-white rounded-full hover:bg-green-600"
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>

    <span className="text-lg font-semibold dark:text-slate-200">${(product.price * product.quantity).toFixed(2)}</span>
  </div>
</div>


  )
}


// import { Link } from "react-router-dom";
// import { useCart } from "../../../context";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlus, faMinus, faTrash } from "@fortawesome/free-solid-svg-icons";

// export const CartCard = ({ product }) => {
//   const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

//   return (
//     <div className="flex items-center justify-between border-b dark:border-slate-700 max-w-4xl m-auto p-4 mb-5">
//       {/* Left Section: Image & Product Info */}
//       <div className="flex items-center space-x-4 w-3/5">
//         <Link to={`/products/${product.productId}`}>
//           <img className="w-20 h-20 rounded object-cover" src={product.poster} alt={product.name} />
//         </Link>

//         <div className="flex-1">
//           <Link to={`/products/${product.productId}`}>
//             <p className="text-lg font-semibold dark:text-slate-200 truncate max-w-xs">{product.name}</p>
//           </Link>
//           <button 
//             onClick={() => removeFromCart(product)} 
//             className="text-red-500 hover:text-red-600 mt-1 flex items-center"
//           >
//             <FontAwesomeIcon icon={faTrash} className="mr-1" /> Remove
//           </button>
//         </div>
//       </div>

//       {/* Right Section: Quantity & Price */}
//       <div className="flex items-center space-x-6">
//         {/* Quantity Control */}
//         <div className="flex items-center space-x-2">
//           <button 
//             onClick={() => decreaseQuantity(product.productId)}
//             className="p-2 bg-red-500 text-white rounded hover:bg-red-600 flex items-center justify-center"
//           >
//             <FontAwesomeIcon icon={faMinus} />
//           </button>

//           <span className="text-lg font-semibold dark:text-slate-200">{product.quantity}</span>

//           <button 
//             onClick={() => increaseQuantity(product.productId)}
//             className="p-2 bg-green-500 text-white rounded hover:bg-green-600 flex items-center justify-center"
//           >
//             <FontAwesomeIcon icon={faPlus} />
//           </button>
//         </div>

//         {/* Price */}
//         <span className="text-lg font-semibold dark:text-slate-200">${(product.price * product.quantity).toFixed(2)}</span>
//       </div>
//     </div>
//   );
// };
