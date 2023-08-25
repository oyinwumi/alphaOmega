import { useState } from 'react'; 
import { Link } from 'react-router-dom';
import Logo from "../assets/ambassadorss.svg";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    

  return (
    <section className='h-[88px] flex justify-between bg-[ #F4F6F8] md:px-20 px-8  py-6'>
        <div className='flex justify-between items-center'>
            <img src={Logo} alt="" className=' object-cover' />
            <div  onClick={() => setOpen(!open)}className='text-[#2D547D] text-4xl cursor-pointer md:hidden absolute right-8 top-6 text-center'>
             <ion-icon name={open ? "close" : "menu"}  ></ion-icon>
      </div>
        </div>
        <div>
            <ul  className= {`md:flex md:gap-8 gap-12 md:mt-3 mt-0 px-4  md:text-center items-center md:text-[#2F2F2F] text-white md:z-auto z-50 md:static absolute w-full left-0 md:w-auto 
                 md:pb-0 pb-12 md:pl-0 pl-[40%]   md:opacity-100 md:bg-[ #F4F6F8] bg- [ #F4F6F8]  transition-all ease-in duration-500 ${open ? 'top-20' : 'top-[-490px]'} `}>
            <Link to='/' className=''>
                <li className=' hover:text-[#2D547D] md:py-0 py-5 text-xl'>
                  Home
                </li>
            </Link>
            <Link to='/about'>
                <li className=' hover:text-[#2D547D] md:pb-0 pb-5 text-xl'>
                  About
                </li>
                </Link>
            <Link to='/events'>
               <li className=' hover:text-[#2D547D] md:pb-0 pb-5 text-xl'>
                  Gorilla
                </li>
               </Link>
           
               <Link to='/gallery'>
               <li className=' hover:text-[#2D547D] md:pb-0 pb-5 text-xl'>
                  Reels
                </li>
               </Link>
               <Link to='/contact'>
               <li className=' hover:text-[#2D547D] md:pb-0 pb-5 text-xl'>
                  Contact
                </li>
               </Link>
      
        <Link to='/signingg'>
        <button className= '  md:hidden block bg-[#2D547D] text-white text-center border rounded-lg w-[100px] h-[40px] hover:opacity-75 hover:text-white '>Visit</button>
    </Link> 
      
            </ul>
        </div>
      
         <Link to='/signing'>
        <button className= ' md:block hidden bg-[#2D547D] text-white text-center border rounded-lg w-[124px] h-[40px] hover:opacity-75 hover:text-white'>Visit</button>
    </Link> 
       
        
    </section>
  )
}

export default Navbar