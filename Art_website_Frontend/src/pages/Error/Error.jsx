import { useNavigate } from "react-router-dom";

export default function Error({ error }) {
    const navigate = useNavigate();

    const handleReload = () => {
        window.location.reload();
    };

    const handleBack = () => {
        navigate(-1); // go back to previous page
    };

    const handleHome = () => {
        navigate("/"); // go to home page
    };

    return (
        <div className="grid sm:grid-cols-[0%,90%] md:grid-cols-[40%,50%] gap-10 items-center">
            <div className="w-full h-full">
                <img className="w-full h-full" src="https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501189/error_xhnzsz.png" />
            </div>
            <div className="mb-10 mt-10"> 
                <p className="text-2xl text-black">{error.name}</p>
                <h1 className="text-red-600 text-7xl">{error.errorNo}</h1>
                <p className="text-black text-5xl">{error.detail}</p>
                <p>{error.summary}</p>
                <hr className="mt-5"/>
                <p className="text-black mt-10">That's what you can do</p>
                <div className="flex gap-5 mt-5">
                    {error.errorNo === 500 && (
                        <button 
                            className="text-blue-600 border border-blue-600 lg:text-lg sm:text-sm" 
                            onClick={handleReload}
                        >
                            Reload Page
                        </button>
                    )}
                    <button 
                        className="text-blue-600 border border-blue-600 lg:text-lg sm:text-sm" 
                        onClick={handleBack}
                    >
                        Back to Previous Page
                    </button>
                    <button 
                        className="text-blue-600 border border-blue-600 lg:text-lg sm:text-sm" 
                        onClick={handleHome}
                    >
                        Home Page
                    </button>
                </div>
            </div>
        </div>
    );
}
