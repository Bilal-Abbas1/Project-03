import Link from 'next/link'
import React from 'react'
import Image from 'next/image'


const Nav = () => {
  return (
    <div> <header className="flex justify-between gap-5 py-2 px-2 bg-blue-300 text-center text-2xl  text-black-800 items-center">

        
        <ul className='flex space-x-8 text-red-500'>
        <Link href={"/"}>Home</Link>
        <Link href={"/Name"}>Name</Link>
        <Link href={"/Name/Address"}>Address</Link>
        <Link href={"/Name/Address/contact"}>Contact</Link>
        </ul>
        
        </header>
    </div>
  )
}

export default Nav