import React from 'react'
import Image from "next/image";

const page = () => {
  return (
    <div>page
    <Image
          src="/IMAGE.png"
          alt="IOEPC image"
          width={200}
          height={200}
          className="my-4"
        />
        </div>
  )
}

export default page