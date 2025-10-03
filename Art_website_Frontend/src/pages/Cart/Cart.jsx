import { useEffect, useState } from "react";
import { FaBackspace, FaDollarSign, FaLock, FaShoppingCart, FaStar } from "react-icons/fa";
import { FaShield } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function Cart() {
    const [empty, setEmpty] = useState(true);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [total, setTotal] = useState(0);
    const [cart, setCart] = useState([]);

    const navigate = useNavigate()

    useEffect(() => {
        const loadCart = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/carts"); 
                if (!response.ok) throw new Error("Failed to fetch cart data.");
                const data = await response.json();
                setCart(data);
            } catch (err) {
                console.error("Error: ", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        loadCart();
    }, []);

    const handleDeleteItem = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/cart/${id}`, {
                method: "DELETE",
            });

            if (!response.ok) throw new Error("Failed to delete item");

            setCart((prevCart) => prevCart.filter((item) => item._id !== id));
        } catch (err) {
            console.error("Error deleting item:", err);
            setError(err.message);
        }
    };


    useEffect(() => {
        setEmpty(cart.length === 0);

        const totalPrice = cart.reduce((sum, item) => sum + (item.price + item.delivery), 0);
        setTotal(totalPrice);
    }, [cart]);

    if (loading) {
        return <div className="p-20 text-center">Loading cart...</div>;
    }

    if (error) {
        return <div className="p-20 text-center text-red-600">Error: {error}</div>;
    }

    return (
        <>
            <div className="grid-cols-1 md:grid-cols-2 grid md:p-20 p-10 bg-teal-50 gap-10">
                {/* Cart Section */}
                <div className="bg-white rounded p-10">
                    <h1 className="font-semibold">Cart</h1>
                    {empty ? (
                        <div className="text-center m-20">
                            <FaShoppingCart className="text-8xl mx-auto mb-3" />
                            <p>Your Cart Is Empty.</p>
                            <button className="w-full bg-black text-white hover:bg-teal-600 rounded mt-10" onClick={()=>navigate('/category/all')}>
                                Browse Art
                            </button>
                        </div>
                    ) : (
                        <div>
                            {cart.map((item) => (
                                <div
                                    key={item._id}
                                    className="sm:grid-cols-1 md:grid-cols-1 grid lg:grid-cols-[30%,50%] gap-10 p-5 shadow relative mb-5"
                                >
                                    <div className="w-36 h-40">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-center"
                                        />
                                    </div>
                                    <div>
                                        <div className="flex items-center ">
                                            <b>{item.name}</b>
                                            <FaBackspace className="absolute right-5 cursor-pointer"
                                                onClick={() => handleDeleteItem(item._id)} />
                                        </div>
                                        <p>{item.author}</p>
                                        <p>{item.category}</p>
                                        <div className="flex">
                                            <p className="text-black font-medium">Shipping</p>
                                            <p className="absolute right-5">{item.shipping}</p>
                                        </div>
                                        <div className="flex">
                                            <p className="text-black font-medium">ArtWorkTotal</p>
                                            <p className="absolute right-5">${item.price + item.delivery}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Order Summary */}
                <div>
                    {total > 0 && (
                        <div className="bg-white p-10 rounded mb-5 relative">
                            <b className="text-xl font-semibold">Order Summary</b>
                            <div className="flex mb-10">
                                <p className="text-black font-medium">ESTIMATED TOTAL</p>
                                <p className="absolute right-10">${total}.00</p>
                            </div>
                            <button className="w-full bg-green-700 text-white rounded-sm">
                                CHECKOUT
                            </button>
                            <button className="w-full mt-5 bg-black text-white rounded-sm">
                                Online Payment
                            </button>
                        </div>
                    )}

                    {/* Trust Badges */}
                    <div className="bg-white p-10 [&>*]:mb-5 rounded mb-5">
                        <div className="flex gap-3 items-center">
                            <FaStar className="text-3xl" />
                            <div>
                                <b className="font-semibold">Thousands Of Five Star Reviews</b>
                                <p>We deliver world-class customer services to all of our art buyers.</p>
                            </div>
                        </div>
                        <div className="flex gap-3 items-center">
                            <FaShield className="text-3xl" />
                            <div>
                                <b className="font-semibold">Satisfaction Guaranteed</b>
                                <p>We deliver world-class customer services to all of our art buyers.</p>
                            </div>
                        </div>
                        <div className="flex gap-3 items-center ">
                            <FaLock className="text-3xl" />
                            <div>
                                <b className="font-semibold">Safe And Secure Shopping</b>
                                <p>We deliver world-class customer services to all of our art buyers.</p>
                            </div>
                        </div>
                        <div className="flex gap-3 items-center">
                            <FaDollarSign className="text-3xl" />
                            <div>
                                <b className="font-semibold">Support An Artist With Every Purchase</b>
                                <p>We deliver world-class customer services to all of our art buyers.</p>
                            </div>
                        </div>
                    </div>

                    {/* Help Section */}
                    <div className="bg-white rounded p-10">
                        <b className="text-2xl font-semibold">Need More Help?</b>
                        <div className="flex gap-3 mt-10 [&>*]:border [&>*]:border-black [&>*]:rounded [&>*]:p-5 [&>*]:pt-2 [&>*]:pb-2 [&>*]:text-sm">
                            <button className="hover:bg-teal-600 hover:text-white">
                                ENJOY COMPLIMENTARY ART ADVISORY
                            </button>
                            <button className="hover:bg-teal-600 hover:text-white">
                                CONTACT CUSTOMER SUPPORT
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
