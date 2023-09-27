import React from 'react';
import Image from 'next/image';

const cards = () => {

    const data = [
      {  srclogo: "image 1.png",
        src:"harish 1.png",
        name: "Harish Kumar",
        description: "CEO & Founder CrowlQ.ai",
        writings:<div>
"Team growth.cx did a great job in helping us <br/>revamp our website to make it stand on par<br/> with global SaaS brands which turned our <br/>Appsumo campaign into a huge success.",
        </div>,
        servicesProvided: ["GTM Consulting", "Growth Marketing", "Design"] },
        {  src: "chayan 1.png",
        srclogo:"image 2.png ",
            name: "chayan mukherje",
        description: "CEO & Founder Qandle",
        writings:<div>
"As a growth marketing partner, the impact <br/>growth.cx creates is tremendous. Organic traffic <br/>was something we really wanted to multiply.<br/> They just came in and took it to another level in <br/> just 3 months",
        </div>,
        
        servicesProvided: ["GTM Consulting", "Growth Marketing", "Design"] },
        {  src: "Vector (4).png",
        srclogo:"image 3.png",
        name: "Gaurav Bhawnani",
        writings:<div>We were looking for a highly passionate and <br/>creative team who could help us create a new <br/> look for our website and rewrite content to align  <br/>with the new product positioning and growth.cx <br/>fit the bill perfectly.</div>,
    description: "Founder Superbeings",
    servicesProvided: ["GTM Consulting", "Growth Marketing", "Design"] },
    {  srclogo: "app.png",
    src:"rakesh 1.png ",
    name: "Rakesh Boddu",
    writings:<div>
They are a very dedicated team and one can <br/>very easily rely on them to deliver successful<br/> outcomes.
    </div>,
description: "Product Marjeting manger Appveen",
servicesProvided: ["GTM Consulting", "Growth Marketing", "Design"] },

      ];
      const firstDataItem = data[0];
      const seconddataItem = data[1]
      const thirddataItem = data[2]
      const fourthdataItem = data[3]

  return (
    <>
      <div className=" mt-4 p-2">
        <div className="relative custom-bg-union p-2 mt-8">

          <div className="absolute inset-0 flex flex-col justify-center items-center">
           
            
            <div className='flex'>
                
            <div className=" gap-4">
            <div className="rounded-lg mb-12 mr-80">
  <div className="text-lg font-semibold">
  <img
              width={94}
              height={94}
              src={firstDataItem.srclogo}
              alt="Harish"
              className="mb-4"
            /> 
  </div>
  <p className='font-mulish font-bold text-xl leading-6'>{firstDataItem.name} <br/>{firstDataItem.description}</p>
</div>
              <div className="">
                <h2 className="text-lg font-semibold">{firstDataItem.writings}
</h2>
                <p className='mt-2 font-semibold'>Services Provided:</p>
              </div>
              <div className="flex gap-8 mt-2">
                <h2 className="font-semibold ">GTM Consulting  </h2>
                <h2>  Growth Marketing </h2>
                <h2>  Design </h2>
              </div>
            </div>
            <div>
  <img
              width={224}
              height={224}
              src={firstDataItem.src}
              alt="Harish"
              className="mb-4"
            /> 
            </div>
            </div>
           
           
            <div className="flex items-center justify-end absolute right-24 bottom-11 pr-10 pb-4">
              <img
                width={94}
                height={99}
                src="Vector (1).png"
                alt="Vector"
                className="mb-4"
              />
            </div>
          </div>
        </div>

         <div className="relative custom-bg-union2 p-2 mt-8 flex justify-end !important">
         <div className="absolute inset-0 flex flex-col justify-center items-center">
           
            
           <div className='flex gap-6'>
               
          
           <div>
 <img
             width={224}
             height={224}
             src={seconddataItem.src}
             alt="Harish"
             className="mb-4"
           /> 
           </div>
           <div className=" gap-8">
           <div className="rounded-lg mb-12 mr-80">
 <div className="text-lg font-semibold">
 <img
             width={94}
             height={94}
             src={seconddataItem.srclogo}
             alt="Harish"
             className="mb-4"
           /> 
 </div>
 <p className='font-mulish font-bold text-xl leading-6'>{seconddataItem.name} <br/>{seconddataItem.description}</p>
</div>
             <div className="">
               <h2 className="text-lg font-semibold">{seconddataItem.writings}
</h2>
               <p className='mt-2 font-semibold'>Services Provided:</p>
             </div>
             <div className="flex gap-8 mt-2">
               <h2 className="font-semibold ">GTM Consulting  </h2>
               <h2>  Growth Marketing </h2>
               <h2>  Design </h2>
             </div>
           </div>
           </div>
          
          
           <div className="flex items-center justify-end absolute right-24 top-0 pr-10 pb-4">
             <img
               width={94}
               height={99}
               src="Vector (1).png"
               alt="Vector"
               className="mb-4"
             />
           </div>
         </div>
        </div> 

<div className="relative custom-bg-union p-2 mt-8">
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <div className='flex'>
            <div className=" gap-4">
            <div className="rounded-lg mb-12 mr-80">
  <div className="text-lg font-semibold">
  <img
              width={94}
              height={94}
              src={thirddataItem.srclogo}
              alt="Harish"
              className="mb-4"
            /> 
  </div>
  <p className='font-mulish font-bold text-xl leading-6'>{thirddataItem.name} <br/>{thirddataItem.description}</p>
</div>
              <div className="">
                <h2 className="text-lg font-semibold">{thirddataItem.writings}
</h2>
                <p className='mt-2 font-semibold'>Services Provided:</p>
              </div>
              <div className="flex gap-8 mt-2">
                <h2 className="font-semibold ">GTM Consulting  </h2>
                <h2>  Growth Marketing </h2>
                <h2>  Design </h2>
              </div>
            </div>
            <div>
  <img
              width={224}
              height={224}
              src={thirddataItem.src}
              alt="Harish"
              className="mb-4"
            /> 
            </div>
            </div>
           
           
            <div className="flex items-center justify-end absolute right-24 bottom-11 pr-10 pb-4">
              <img
                width={94}
                height={99}
                src="Vector (1).png"
                alt="Vector"
                className="mb-4"
              />
            </div>
          </div>
        </div>
        <div className="relative custom-bg-union2 p-2 mt-8 flex justify-end !important">
         <div className="absolute inset-0 flex flex-col justify-center items-center">
           
            
           <div className='flex gap-6'>
               
          
           <div>
 <img
             width={224}
             height={224}
             src={fourthdataItem.src}
             alt="Harish"
             className="mb-4"
           /> 
           </div>
           <div className=" gap-8">
           <div className="rounded-lg mb-12 mr-80">
 <div className="text-lg font-semibold">
 <img
             width={94}
             height={94}
             src={fourthdataItem.srclogo}
             alt="Harish"
             className="mb-4"
           /> 
 </div>
 <p className='font-mulish font-bold text-xl leading-6'>{fourthdataItem.name} <br/>{seconddataItem.description}</p>
</div>
             <div className="">
               <h2 className="text-lg font-semibold">{fourthdataItem.writings}
</h2>
               <p className='mt-2 font-semibold'>Services Provided:</p>
             </div>
             <div className="flex gap-8 mt-2">
               <h2 className="font-semibold ">GTM Consulting  </h2>
               <h2>  Growth Marketing </h2>
               <h2>  Design </h2>
             </div>
           </div>
           </div>
          
          
           <div className="flex items-center justify-end absolute right-24 top-0 pr-10 pb-4">
             <img
               width={94}
               height={99}
               src="Vector (1).png"
               alt="Vector"
               className="mb-4"
             />
           </div>
         </div>
        </div> 

      </div>
    </>
  );
};

export default cards;
