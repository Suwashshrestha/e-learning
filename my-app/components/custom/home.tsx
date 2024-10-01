import React from 'react'
import Image from 'next/image'
const Home = () => {
    return (
        <div className="flex justify-center pt-10 items-end ">
            <p className="text-black font-roboto text-4xl font-normal leading-normal w-[549px] pb-[130px]">
            We at Eduhungry provide you with tons of free resources and pratice sets to satisfy your hunger for education</p>
            <Image
                src="/Home-image.png"
                alt="IOEPC image"
                width='800'
                height='800'
                className="my-4"
            />
            
        </div>

    )
}

export default Home
