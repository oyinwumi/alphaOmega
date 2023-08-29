import { userSchema } from "../validation/Validation";


const ContactUs = () => {


      const contactMe = async (e) =>{
        e.preventDefault();
         let formData = {
         firstName: e.target[0].value,
          lastName: e.target[1].value,
          email: e.target[2].value,
          messasge: e.target[3].value,
         };
         const mailtoLink = `mailto:oyinwumi0229@gmail.com ? subject= `;
         window.location.href = mailtoLink
         const isValid = await userSchema.isValid(formData)
         console.log(isValid);
        console.log(formData);
        
      }
  return (
    <div className='bg-[#2D547D] md:px-20 px-8 py-32'>
    <div className='lg:text-[32px] md:text-[28px] text-[24px] text-white flex lg:flex-row md:flex-col flex-col items-center  justify-center mb-16  lg:gap-5 md:gap-0 gap-0 w-full'>
            <p className='lg:text-[32px] md:text-[28px] text-[24px] font-open lg:order-1 md:order-2 order-2 lg:mb-0 md:mb-8 mb-8'>Get In Touch</p>
            <p className='lg:text-lg md:text-[16px]  text-[16px] border-t border-white  pt-2 font-font lg:order-2 md:order-1 order-1'>Available to communicate</p>
          </div>
    <div className='flex lg:flex-row md:flex-col flex-col justify-between w-full text-white font-font'>
        <div className='lg:w-1/2 md:w-full w-full'> 
            <form action="mailto:aoc0@gmail.com" method='post'  onSubmit={contactMe}  className=' text-xl  text-black '>
              <div className='flex lg:flex-row md:flex-col flex-col gap-5 w-full mb-6'>
              <div className=' lg:w-1/2 md:w-full w-full'>
                <label htmlFor="firstName" className='text-white'>First Name</label><br />
                <input type="text" className='outline-none p-2 w-full  border rounded-lg  bg-darkblue capitalize' />
                </div>
                <div className=' lg:w-1/2 md:w-full w-full'>
                <label htmlFor="lastName"  className='text-white' >Last Name</label><br />
                <input type="text" className='outline-none  p-2 w-full border rounded-lg capitalize bg-darkblue'/>
                </div>
              </div>
              <label htmlFor="email "  className='text-white pb-3'>Email Address</label><br />
              <input type="email" className='w-full p-2 border rounded-lg outline-none mb-6  bg-darkblue' /><br /><br />
              <textarea name="" id="" cols="30" rows="3" placeholder='Message' className='w-full p-4 outline-none bg-darkblue border rounded-lg capitalize'></textarea>
              <button type='submit' className='border text-center rounded-full w-full h-[46px] p-1 mt-4 bg-offwhite text-white lg:mb-0 md:mb-14 mb-14'value='Send' > Send</button> <br />
             
            </form>
        </div>
        <div className='lg:w-1/2 md:w-full w-full xl:ml-40 lg:ml-14 md:ml-0 ml-0 mt-4 text-white  relative'>
            <div>
                <div className='flex gap-4 lg:text-xl md:text-xl text-[16px] mb-6'>
                <ion-icon name="location" className="text-2xl"></ion-icon> <p className=''>64 High St Runcorn, Cheshire, WA7 1AW , United Kingdom</p>
                </div>
                <div className='flex gap-4 lg:text-2xl md:text-xl text-[16px] mb-6'>
                <ion-icon name="mail" className="text-2xl"></ion-icon><p>aoc@gmail.com</p>
                </div>
                <div className='flex gap-4 lg:text-xl md:text-xl text-[16px] mb-6'>
                <ion-icon name="call" className="text-2xl"></ion-icon><p>+444 (01928 572030)</p>
                </div>
                <a  href='#' target='blank' className='flex gap-4 lg:text-xl md:text-xl text-[16px] mb-6 '>
                <ion-icon name="logo-facebook" className="text-2xl"></ion-icon><span>Ambassador of Christ</span>
                </a>
                <a href='https://www.linkedin.com/in/Ambassador of Christ' target='blank' className='flex gap-4 lg:text-xl md:text-xl text-[16px] mb-6'>
                <ion-icon name="logo-linkedin" className="text-2xl"></ion-icon> <span>Ambassador of Christ</span>
                </a>
                <a  href='https://twitter.com/ambassadorofchrist' target='blank' className='flex gap-4 lg:text-xl md:text-xl text-[16px] mb-6'>
                <ion-icon name="logo-twitter" className="text-2xl"></ion-icon><spanan>Ambassador of Christ</spanan>
                </a>
                <a  href='#' target='blank' className='flex gap-4 lg:text-xl md:text-xl text-[16px] '>
                <ion-icon name="logo-instagram" className="text-2xl"></ion-icon> <span>Ambassador of Christ</span>
                </a>
                </div>
            
            </div>
        </div>
    </div>  )
}

export default ContactUs