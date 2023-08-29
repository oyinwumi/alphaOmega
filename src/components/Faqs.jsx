import  { useState } from "react";

const Faq = () => {
  const [showText, setShowText] = useState({});

  const questions = [
    {
      id: "1",
      header: "What is AlphaOmega",
      text:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae dignissimos obcaecati suscipit quaerat tempora laborum blanditiis tempore nobis temporibus ",
    },
    {
      id: "2",
      header: "What is AlphaOmega",
      text:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae dignissimos obcaecati suscipit quaerat tempora laborum blanditiis tempore nobis temporibus ",
    },
    {
      id: "3",
      header: "What is AlphaOmega",
      text:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae dignissimos obcaecati suscipit quaerat tempora laborum blanditiis tempore nobis temporibus ",
    },
    {
      id: "4",
      header: "What is AlphaOmega",
      text:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae dignissimos obcaecati suscipit quaerat tempora laborum blanditiis tempore nobis temporibus ",
    },
    {
      id: "5",
      header: "What is AlphaOmega",
      text:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae dignissimos obcaecati suscipit quaerat tempora laborum blanditiis tempore nobis temporibus ",
    },
    // Add more questions here
  ];

  const toggleQuestion = (id) => {
    setShowText((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <section className="bg-[#F4F6F8] text-[#2F2F2F] md:px-20 px-8 py-10">
      <h2 className="text-center capitalize text-5xl mb-10 text-[#2D547D]">
        Frequently Asked Questions
      </h2>

      {questions.map((question) => (
        <div
          key={question.id}
          className="bg-white border border-white rounded-lg p-6 mb-4"
        >
          <h3 className="flex justify-between items-center text-3xl text-[#2D547D]">
            {question.header}
            <span onClick={() => toggleQuestion(question.id)}>

              {showText[question.id] ? (
                <ion-icon name="chevron-up"></ion-icon>
              ) : (
                <ion-icon name="chevron-down"></ion-icon>
              )}
            </span>
          </h3>
          {showText[question.id] && (
            <p className="text-[#214163] mt-3">{question.text}</p>
          )}
        </div>
      ))}
    </section>
  );
};

export default Faq;





// import { useState } from "react";
// // import { v4 as uuidv4 } from 'uuid';


// const Faqs = () => {
//     const[showtext, setShowText] = useState(false);

//     const questions = [
//         { id: "1", header: "What is AlphaOmega", text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae dignissimos obcaecati suscipit quaerat tempora laborum blanditiis tempore nobis temporibus "},
//          { id: "2", header: "What is AlphaOmega", text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae dignissimos obcaecati suscipit quaerat tempora laborum blanditiis tempore nobis temporibus " },
//         { id: "3", header: "What is AlphaOmega", text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae dignissimos obcaecati suscipit quaerat tempora laborum blanditiis tempore nobis temporibus "},
//         { id: "4", header: "What is AlphaOmega", text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae dignissimos obcaecati suscipit quaerat tempora laborum blanditiis tempore nobis temporibus " },
    
//     ];

//   return (
//     <section className="bg-[#F4F6F8] text-[#2F2F2F]  md:px-20 px-8 py-10">
//         <h2 className="text-center capitalize text-5xl mb-10 text-[#2D547D] ">Frequently Asked Questions</h2>
        
//             {
//                 questions.map((question, key)=>{
//                   return   <div key={key}  className=" bg-white border border-white rounded-lg p-6 mb-4">
//                     <h3  className="flex justify-between items-center text-3xl text-[#2D547D]">
//                         {question.header}
//                          <span  onClick={()=> setShowText(!showtext)} >
//                           <ion-icon name={showtext ? "chevron-up" : "chevron-down"}></ion-icon>
//                           </span></h3>
//                          { showtext && <p className=" text-[#214163] mt-3">{question.text}</p>
// }
//                   </div>
//                 })
//             }
        
//         {/* <ion-icon name={showtext ? "chevron-up" : "chevron-down"}></ion-icon>
// <ion-icon name={showtext ? "chevron-up" : "chevron-down"}></ion-icon>
// <ion-icon name={showtext ? "chevron-up" : "chevron-down"}></ion-icon>
// <ion-icon name={showtext ? "chevron-up" : "chevron-down"}></ion-icon> */}
//     </section>
//   )
// }

// export default Faqs