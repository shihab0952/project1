import { useNavigate } from "react-router-dom";


const Order = ({order}) => {
    const navigate = useNavigate()
    return (
        <div className="container mx-auto py-4 md:px-16 lg:px-24">
            <h2 className="text-2xl font-semibold mb-4 ">Thank You for your order</h2>
             <p>Your Order has been placed succesfully you will receive an email
                confirmation shortly
             </p>
             <div className="mt-6 p-4 border rounded-lg bg-gray-100">
                <h3 className="text-lg font-semibold mb-2">  Order Summery</h3>
                <p>Order Number:{order.orderNumber}</p>
                <div className="mt-4">
                    <h4 className="text-md font-semibold mb-2">Shiping Information</h4>
                    <p>{order.shipingInformation.name}</p>
                    <p>{order.shipingInformation.address}</p>
                    <p>{order.shipingInformation.city}</p>
                    <p>{order.shipingInformation.zip}</p>
                </div>
                <div className="mt-4">
                    <h4 className="text-md font-semibold mb-2">items Ordered</h4>
                    {order.products.map(product =>(
                        <div key={product.id} className="flex justify-between mt-2"> 
                            <p>{product.name} x {product.quantity}</p>
                            <p>${product.price * product.quantity}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-4 flex justify-between">
                    <span>Total Price:</span> 
                    <span className="font-semibold">{order.totalPrice}</span>
                </div>
                </div>
                <div className="mt-6">
                    <button className="bg-green-500 text-white py-2 px-4 hover:bg-gray-700">Order Tracking</button>
                    <button
                    onClick={() => navigate('/')}
                    className="ml-4 bg-red-600 text-white py-2 px-4 hover:bg-red-800">Continue Shoping</button>
                </div>
             
        </div>
    );
};
 
export default Order;