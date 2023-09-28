import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import './styles.css';


import { Pagination, Navigation } from 'swiper/modules';

export default function CardMobile() {
  const data = [
    {  srclogo: "image 1.png",
      src:"harish 1.png",
      name: "Harish Kumar",
      description: "CEO & Founder CrowlQ.ai",
      writings:<div>
Team growth.cx did a great job in helping us revamp our website to make it stand on par with global SaaS brands which turned our Appsumo campaign into a huge success.,
      </div>,
      servicesProvided: ["GTM Consulting", "Growth Marketing", "Design"] },
      {  src: "chayan 1.png",
      srclogo:"image 2.png ",
          name: "chayan mukherje",
      description: "CEO & Founder Qandle",
      writings:<div>
As a growth marketing partner, the impact growth.cx creates is tremendous. Organic traffic was something we really wanted to multiply. They just came in and took it to another level in  just 3 months,
      </div>,
      
      servicesProvided: ["GTM Consulting", "Growth Marketing", "Design"] },
      {  src: "Vector (4).png",
      srclogo:"image 3.png",
      name: "Gaurav Bhawnani",
      writings:<div>We were looking for a highly passionate and creative team who could help us create a new  look for our website and rewrite content to align  with the new product positioning and growth.cx fit the bill perfectly.</div>,
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
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
         <SwiperSlide>
            <div className='ml-32 sm:p-6 mt-4'>
                
<div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className='flex'>
    <div>
   <img width={68}
              height={68} src={firstDataItem.src} className='ml-2'/>
   </div>
   <div className='ml-2 gap-2'>
   <div className='ml-2'>
 <img src={firstDataItem.srclogo} />
   </div>
   <div className='text-bold'>{firstDataItem.name} <br/> {firstDataItem.description}</div>

    </div>
   </div>
  
  
   
    <a href="#">
        <h5 class="mb-2 text-xl font-semibold text-gray-900 mt-2">{firstDataItem.writings}
</h5>
    </a>
    <p class="mb-3 font-bold text-gray-500 dark:text-gray-400">Services Provided :</p>
   
</div>

            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='ml-32 sm:p-6 mt-4'>
                
<div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className='flex'>
    <div>
   <img  width={68}
              height={68} src={seconddataItem.src} className='ml-2'/>
   </div>
   <div className='ml-2 gap-2'>
   <div className='ml-2'>
 <img src={seconddataItem.srclogo} />
   </div>
   <div className='text-bold '>{seconddataItem.name} <br/> {seconddataItem.description}</div>

    </div>
   </div>
  
  
   
    <a href="#">
        <h5 class="mb-2 text-xl font-semibold text-gray-900 mt-2">{seconddataItem.writings}
</h5>
    </a>
    <p class="mb-3 font-bold text-gray-500 dark:text-gray-400">Services Provided:</p>
   
</div>

            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='ml-32 sm:p-6 mt-4'>
                
<div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className='flex'>
    <div>
   <img  width={68}
              height={68} src={thirddataItem.src} className='ml-2'/>
   </div>
   <div className='ml-2 gap-2'>
   <div className='ml-2'>
 <img src={thirddataItem.srclogo} />
   </div>
   <div className='text-bold '>{thirddataItem.name} <br/> {thirddataItem.description}</div>

    </div>
   </div>
  
  
   
    <a href="#">
        <h5 class="mb-2 text-xl font-semibold text-gray-900 mt-2">{thirddataItem.writings}
</h5>
    </a>
    <p class="mb-3 font-bold text-gray-500 dark:text-gray-400"> Services Provided:</p>
   
</div>

            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='ml-32 sm:p-6 mt-4'>
                
<div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className='flex'>
    <div>
   <img  width={68}
              height={68} src={thirddataItem.src} className='ml-2'/>
   </div>
   <div className='ml-2 gap-2'>
   <div className='ml-2'>
 <img src={thirddataItem.srclogo} />
   </div>
   <div className='text-bold '>{thirddataItem.name} <br/> {thirddataItem.description}</div>

    </div>
   </div>
  
  
   
    <a href="#">
        <h5 className="mb-2 text-xl font-semibold text-gray-900 mt-2">Team growth.cx did a great job in <br/>  helping us revamp our website to make it stand on par with global SaaS brands which turned our Appsumo campaign into a huge success.
</h5>
    </a>
    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Servies Provided:</p>
   
</div>

            </div>
        </SwiperSlide>
       
      </Swiper>
    </>
  );
}
