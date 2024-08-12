import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

const links = [
  {name: 'Home', href:'/'},
  {name: 'Explore', href:'/'},
  {name: 'About', href:'/'},
  {name: 'Menu', href:'/'},
  {name: 'Contact', href:'/'},
];

const letterAnimate = {
  initial:{
    y: '100%',
    opacity:0,
  },
  enter:(i)=> ({
    y: 0,
    opacity:1,
    transition:{duration:1,ease:[0.6,0,0.2,1], delay:i[0]},
  }),
  end: (i)=> ({
    y: '100%',
    opacity:0,
    transition:{duration:0.8,ease:[0.6,0,0.2,1], delay:i[1]},
  }),
}

const getLetter= (name)=>{
  const letters = [];
  name.split('').forEach((letter,index) => {
    letters.push(<motion.span variants={letterAnimate} initial='initial' animate='enter'  exit='end' key={index} custom={[index * 0.04, (name.length-index) * 0.01]}>{letter}</motion.span>)
  });
  return letters;
}

const NavList = () => {
  return (
    <ul className='flex flex-col items-center gap-8 font-primary text-4xl font-semibold text-accent uppercase'>
      {links.map((link,index)=>{
        return <Link href={link.href} key={index} className='flex overflow-hidden hover:text-white transition-all ' >
          {getLetter(link.name)}
          </Link>
      })}
    </ul>
  )
}

export default NavList;