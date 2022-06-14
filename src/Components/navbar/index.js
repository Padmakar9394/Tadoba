import { React, useState } from "react";
import {NavLink, Link} from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";

const NavLg = () => {
  return (
    <>
      <section className="bg-[#2B7444]">
      <div className="flex items-center mx-8">
        <div className="flex items-center gap-2">
          <div className="w-28 h-36">
            <img src="https://cracku.in/latest-govt-jobs/wp-content/uploads/2019/08/Maharashtra-Forest-Department-Logo.jpg"
                 alt="logo"
                 className="w-full h-full object-cover"
            />
          </div>
          <div className="w-48 h-36">
            <img src="https://mytadoba.org/wp-content/uploads/2022/02/tatr-logo.png"
                 alt="name logo"
                 className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex items-center ml-16 gap-6 ">
          <NavLink to="/about">
            <div className="flex items-center mx-2 text-white hover:text-yellow-400">
              <h2 className="text-sm font-semibold uppercase mx-2 ">About Us</h2>
              <span className="text-sm"><AiFillCaretDown /></span>
            </div>
          </NavLink>
          <NavLink to="/tourist-hub">
            <div className="flex items-center max-2 text-white hover:text-yellow-400">
              <h2 className="text-sm font-semibold uppercase mx-2">Tourist Hub</h2>
              <span className="text-sm"><AiFillCaretDown /></span>
            </div>
          </NavLink>
          <NavLink to="/contact">
              <h2 className="text-sm font-semibold uppercase mx-2 text-white hover:text-yellow-400">Contact Us</h2>
          </NavLink>
          <NavLink to="/work-with-us">
              <h2 className="text-sm font-semibold uppercase mx-2 text-white hover:text-yellow-400">Work with Us</h2>
          </NavLink>
          <NavLink to="/shop">
              <h2 className="text-sm font-semibold uppercase mx-2 text-white hover:text-yellow-400">Shop</h2>
          </NavLink>
          <NavLink to="/donation">
              <div className="bg-orange-400 h-36 py-14">
                <h2 className="text-lg hover:text-white font-semibold uppercase mx-2">Make A Donation</h2>
              </div>
          </NavLink>
        </div>
      </div>
      </section>
    </>
  )
};

const NavSm = () => {
  const [showMenu, setShowMenu] = useState(false);
  let menu
   let menuMask
   if(showMenu)
   {
     menu =
       <div className="fixed bg-white top-16 z-50 left-0 w-full shadow py-2">
         <div className="flex flex-col gap-1">
           <NavLink to="/about" onClick={() => setShowMenu(false)}>
             <div className="flex items-center">
              <h2 className="text-sm font-semibold uppercase pl-4 py-2">About us</h2>
              <span className="text-sm px-2"><AiFillCaretDown /></span>
             </div>
           </NavLink>
           <NavLink to="/tourist-hub" onClick={() => setShowMenu(false)}>
             <div className="flex items-center">
              <h2 className="text-sm font-semibold uppercase pl-4 py-2">Tourist Hub</h2>
              <span className="text-sm px-2"><AiFillCaretDown /></span>
             </div>
           </NavLink>
           <NavLink to="/contact" onClick={() => setShowMenu(false)}>
              <h2 className="text-sm font-semibold uppercase px-4 py-2">Contact Us</h2>
           </NavLink>
           <NavLink to="/work-with-us" onClick={() => setShowMenu(false)}>
              <h2 className="text-sm font-semibold uppercase px-4 py-2">Work with us</h2>
           </NavLink>
           <NavLink to="/shop" onClick={() => setShowMenu(false)}>
              <h2 className="text-sm font-semibold uppercase px-4 py-2">Shop</h2>
           </NavLink>
           <NavLink to="/donation" onClick={() => setShowMenu(false)}>
              <h2 className="text-sm font-semibold uppercase px-4 py-2 bg-cyan-400 text-white">Make a donation</h2>
           </NavLink>
           <NavLink to="/" onClick={() => setShowMenu(false)}>
              <h2 className="text-sm font-semibold uppercase px-4 py-2">Right to Information</h2>
           </NavLink>
         </div>
       </div>

       menuMask =
         <div className="fixed top-0 right-0"
              onClick={() => setShowMenu(false)}
         >
         </div>
    }
  return (
    <>
      <nav className="fixed w-full z-50 top-0 bg-[#2B7444]">
      <div className="flex items-center justify-between px-1 py-2">
          <div className="flex items-center">
            <div className="w-8 h-12">
              <img src="https://cracku.in/latest-govt-jobs/wp-content/uploads/2019/08/Maharashtra-Forest-Department-Logo.jpg"
                   alt="logo"
                   className="w-full h-full"
              />
            </div>
            <span className="w-6 h-6 ml-1 text-orange-500"><FiSearch className="w-full h-full"/></span>
          </div>
          <div className="w-16 h-12">
            <img src="https://mytadoba.org/wp-content/uploads/2022/02/tatr-logo.png"
                 alt="name logo"
                 className="w-full h-full"
            />
          </div>
          <button  onClick={() => setShowMenu(!showMenu)} className="text-orange-500">
             <GiHamburgerMenu className="text-2xl" />
          </button>
          { menu }
          { menuMask }
      </div>
      </nav>
    </>
  )
}

const Navbar = () => {
  return (
    <>
      <div className="md:hidden">
        <NavSm />
      </div>
      <div className="hidden lg:block">
        <NavLg />
      </div>
    </>
  )
}

export default Navbar;
