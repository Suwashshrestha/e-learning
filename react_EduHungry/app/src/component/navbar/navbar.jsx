import React from "react";


const Navbar = () => {
    return(
        <div className="shadow-md w-full fixed top-0 left-0">
            <div className="md:flex bg-white py-4">
                <div className="font-bold text-2x1 cursor-pointer flex items-center font-[Poppins] text-gray-800">
                    <span>
                        <ion-icon name="book-outline"></ion-icon>
                    </span>
                    EduHungry
                </div>
            </div>
        </div>
    )
}

export default Navbar
