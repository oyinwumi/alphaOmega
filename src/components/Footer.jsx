import Logo from "../assets/ambassador.svg";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <section className=' flex lg:justify-between justify-center items-center lg:flex-row flex-col bg-[#2D547D] md:px-20 px-8  py-12 border-t border-white'>
    <div className='  items-center md:mb-0 mb-8'>
       <img src={Logo} alt="" className=' object-cover' />
    </div>
    <div className="md:mb-0 mb-8">
        <ul  className= {'flex lg:flex-row flex-col gap-8    md:text-center items-center text-[#FFFFFF] '}>
        <Link to='/' className=''>
                <li className=' hover:text-black md:py-0 py-5'>
                  Home
                </li>
            </Link>
            <Link to='/about'>
                <li className=' hover:text-black md:pb-0 pb-5'>
                  About
                </li>
                </Link>
            <Link to='/events'>
               <li className=' hover:text-black md:pb-0 pb-5'>
                  Gorilla
                </li>
               </Link>
           
               <Link to='/gallery'>
               <li className=' hover:text-black md:pb-0 pb-5'>
                  Reels
                </li>
               </Link>
               <Link to='/contact'>
               <li className=' hover:text-black md:pb-0 pb-5'>
                  Contact
                </li>
               </Link>

        </ul>
    </div>
    <div className='text-white lg:text-[16px] md:text-sm text-xs font-font'>
          <p>© 2023 Ambassadors of Christ</p>
        </div>
</section>  )
}

export default Footer