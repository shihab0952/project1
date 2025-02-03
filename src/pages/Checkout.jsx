import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const Checkout = ({setOrder}) => {
  const [billingToggle, setBillingToggle] = useState(true);
  const [shipingToggle, setShipingToggle] = useState(false);
  const [paymentToggle, setPaymentToggle] = useState(false);

  const [paymentMethod, setPaymentMethod] = useState("cod");

  const [shipingInfo, setShipingInfo] = useState({
    address:'',
    city:'',
    zip:''
  })

  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate()


  const handleOrder = () =>{
    const newOrder = {
      products: cart.products,
      orderNumber:"12344",
      shipingInformation:shipingInfo,
      totalPrice: cart.totalPrice
    };
    setOrder(newOrder)
    navigate('/order-confirmation')
  };



  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      <h3 className="text-2xl font-semibold mb-4">Order Summery</h3>
      <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
        <div className="md:w-2/3">
          <div className="border p-2 mb-6">
            <div
              className="flex items-center justify-between"
              onClick={() => setBillingToggle(!billingToggle)}
            >
              <h3 className="text-lg font-semibold mb-2">
                Billing information{" "}
              </h3>
              {billingToggle ? <FaAngleUp /> : <FaAngleDown />}
            </div>

            <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}>
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  className="w-full px-3 py-2 border"
                />
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700">E-mail</label>
                  <input
                    type="email"
                    name="E-mail"
                    placeholder="Enter Name"
                    className="w-full px-3 py-2 border"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700">phone</label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Enter Phone #"
                    className="w-full px-3 py-2 border"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* {shiping method} */}
        <div className="md:w-2/3">
          <div className="border p-2 mb-6">
            <div
              className="flex items-center justify-between"
              onClick={() => setShipingToggle(!shipingToggle)}
            >
              <h3 className="text-lg font-semibold mb-2">
                Shiping Information{" "}
              </h3>
              {shipingToggle ? <FaAngleUp /> : <FaAngleDown />}
            </div>

            <div className={`space-y-4 ${shipingToggle ? "" : "hidden"}`}>
              <div>
                <label className="block text-gray-700">Address</label>
                <input
                  type="text"
                  name="Address"
                  placeholder="Enter Address"
                  className="w-full px-3 py-2 border"
                  onChange={(e) => setShipingInfo({...shipingInfo,
                    address: e.target.value
                  })}
                />
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700">City</label>
                  <input
                    type="text"
                    name="City"
                    placeholder="Enter Your City"
                    className="w-full px-3 py-2 border"
                    onChange={(e) => setShipingInfo({...shipingInfo,
                      city: e.target.value
                    })}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700">Zip Code</label>
                  <input
                    type="text"
                    name="Zip Code"
                    placeholder="Enter Zip Code"
                    className="w-full px-3 py-2 border"
                    onChange={(e) => setShipingInfo({...shipingInfo,
                      zip: e.target.value
                    })}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border"></div>
      </div>

      {/*payment*/}

      <div className="border p-2 mb-6">
        <div
          className="flex items-center justify-between"
          onClick={() => setPaymentToggle(!paymentToggle)}
        >
          <h3 className="text-lg font-semibold mb-2">Paymnent information </h3>
          {paymentToggle ? <FaAngleUp /> : <FaAngleDown />}
        </div>

        <div className={`space-y-4 ${paymentToggle ? "" : "hidden"}`}>
          <div className="flex items-center mb-2">
            <input
              type="radio"
              name="Payment"
              checked={paymentMethod === "cod"}
              onChange={() => setPaymentMethod("cod")}
            />
            <label className="block text-gray-700">Cash On delivery</label>
          </div>

          <div className="flex items-center mb-2">
            <input
              type="radio"
              name="Payment"
              checked={paymentMethod === "dc"}
              onChange={() => setPaymentMethod("dc")}
            />
            <label className="block text-gray-700">Debit Card</label>
          </div>
        </div>
        {paymentMethod === "dc" && (
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <h3 className="text-xl font-semibold mb-4">
              Debit Card Information
            </h3>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Card number
              </label>
              <input
                type="text"
                placeholder="Enter card Number"
                className="border p-2 w-full rounded"
                required
              />
            </div>
            <div className="flex justify-between mb-4">
              <label
                htmlFor=""
                className="block text-gray-700 font-semibold mb-2"
              >
                Card holder name
              </label>
              <input
                type="text"
                placeholder="MM/YY"
                className="border p-2 w-full rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-3">
                Card holder Name
              </label>
              <input
                type="text"
                placeholder="Enter Card Holder Name"
                className="border p-2 w-full rounded"
                required
              />
            </div>
            <div className="flex justify-between mb-4">
              <div className="w-1/2 mr-2">
                <label className="block text-gray-700 font-semibold mb-2">
                  Expire date
                </label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="border p-2 w-full rounded"
                  required
                />
              </div>
              <div className="w-1/2 ml-2">
                <label className="block text-gray-700 font-semibold mb-2">
                  CVV
                </label>
                <input
                  type="text"
                  placeholder="CVV"
                  className="border p-2 w-full rounded"
                  required
                />
              </div>
            </div>
          </div>
        )}

        <div className="md:w1/3 bg-white p-6 rounded-lg shadow-md border">
          <h3 className="text-lg font-semibold mb-4">Order summery</h3>
          <div className="space-y-4">
            {cart.products.map((product) => (
              <div key={product.id} className="flex justify-between">
                <div className="flex items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-contain rounded"
                  />
                  <div className="ml-4">
                    <h4 className="text-md font-semibold">{product.name}</h4>
                    <p className="text-gray-600">
                      ${product.price} x {product.quantity}
                    </p>
                  </div>
                </div>
                <div className="text-gray-800">
                  ${product.price}*{product.Quantity}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 border-t pt-4">
            <div className="flex justify-between">
              <span>Total Price</span>
              <span className="text-semibold">${cart.totalPrice.toFixed(2)}</span>
            </div>
          </div>
          <button className="w-full bg-red-600 text-white py-2 mt-6
          hover:bg-red-800" 
          onClick={handleOrder}>Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
