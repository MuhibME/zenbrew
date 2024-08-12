import React from 'react'
import Image from 'next/image';


const Badge = ({containerStyles}) => {
  return (
    <div className={`relative ${containerStyles}`}>
      <Image src='/assets/badge.svg' className='object-contain' fill alt=''/>
    </div>
  )
}

export default Badge;