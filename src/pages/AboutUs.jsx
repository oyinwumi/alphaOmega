import Aoc from "../assets/aoc.jpeg";
import Aoc1 from "../assets/AOC1.jpeg";
import Silverback from "../assets/silverback.jpeg";


const AboutUs = () => {
  return ( 
    <section className="bg-[ #FFFFFF] text-[#2F2F2F]  md:px-20 px-8 py-10">
        <div className="text-center text-[#2D547D] opacity-100 p-10">
            <h2 className="capitalize text-5xl mb-3">Who we are</h2>
            <p  className="text-xl mx-auto md:w-[950px] text-black">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur quis id magni iste delectus sapiente. Quo laudantium alias excepturi rem maiores ipsum, totam temporibus suscipit rerum animi corporis ducimus labore!</p>
        </div>
        <div className="flex flex-col  gap-10 pt-20 text-[#2D547D]">
           <div className=" flex md:flex-row flex-col  mb-20 md:border-none border border-[#2D547D] rounded-lg md:p-0 p-4">
           <img src={Aoc} alt="" className="lg:w-[700px] w-auto md:h-[700px] h-96 object-cover border rounded-3xl" />
           <div className="lg:ml-32 ml-10 md:mt-56 mt-10">
           <header className=" mb-4 text-3xl ">Alpha Omega Clan</header>
           <p className="lg:w-[650px] text-black">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam magnam deserunt iste iusto obcaecati assumenda commodi reprehenderit voluptatem facilis </p>
           <button className="bg-[#2D547D] text-white border border-[#2D547D] rounded-lg text-center mt-8 w-28 h-[40px] hover:opacity-75">Join us</button>
           </div>
           </div>
           <div className="flex md:flex-row flex-col  mb-20 md:border-none border border-[#2D547D] rounded-lg md:p-0 p-4">
           <div className="lg:mr-32 mr-10 md:mt-56 mt-10 ">
           <header className=" mb-4 text-3xl ">SilverBack Strenght Squad</header>
           <p className="lg:w-[650px] text-black">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam magnam deserunt iste iusto obcaecati assumenda commodi reprehenderit voluptatem facilis </p>
           <button className="bg-[#2D547D] text-white border border-[#2D547D] rounded-lg text-center mt-8 w-28 h-[40px] hover:opacity-75">Join us</button>
           </div>
           <img src={Silverback} alt="" className="lg:w-[700px] w-auto  md:h-[700px] h-96  object-cover border rounded-3xl md:mt-0 mt-6" />
        
           </div>
           <div className="flex md:flex-row flex-col  mb-20 md:border-none border border-[#2D547D] rounded-lg md:p-0 p-4">
           <img src={Aoc1} alt="" className="lg:w-[700px] w-auto  md:h-[700px] h-96  object-cover border rounded-3xl " />
          <div className="lg:ml-32 ml-10 md:mt-56 mt-10">
          <header className=" mb-4 text-3xl ">Ambassadors of Christ</header>
           <p className="lg:w-[650px] text-black">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam magnam deserunt iste iusto obcaecati assumenda commodi reprehenderit voluptatem facilis </p>
           <button className="bg-[#2D547D] text-white border border-[#2D547D] rounded-lg text-center mt-8 w-28 h-[40px] hover:opacity-75">Join us</button>
          </div>
           </div>
        </div>
    </section>
  )
}

export default AboutUs