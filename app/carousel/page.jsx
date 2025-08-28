'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import bulkMessage from '../data/bulk-message';
import ServiceHeroSection from '../common/ServiceHeroSection';
import ServicesSecondSec from '../common/ServicesSecondSec';
import OurKeypoints from '../common/OurKeypoints';
import Conclusion from '../common/Conclusion';
import ServicesFaq from '../common/ServicesFaq';
import { bulkMessageFaq } from '../data/faq';

const ExpandingDivs = () => {
  const [expandedIndex, setExpandedIndex] = useState(0); // Start with the first div expanded
  const [isPaused, setIsPaused] = useState(false); // To pause auto-expansion when a button is clicked

  const images = [
    '/img/b1.jpeg',
    '/img/b2.jpeg',
    '/img/b3.jpeg',
  ];

  // Original widths of all divs
  const originalWidths = [20.815, 20.815, 20.815];
  const expandedWidth = 300; // Width when expanded

  useEffect(() => {
    if (isPaused) return; // Skip the interval if paused

    let index = expandedIndex;
    const timer = setInterval(() => {
      index = (index + 1) % images.length; // Loop through indices
      setExpandedIndex(index);
    }, 4000); // Adjust timing for each expansion

    return () => clearInterval(timer); // Cleanup on unmount
  }, [expandedIndex, isPaused, images.length]);

  const handleClick = (index) => {
    setExpandedIndex(index); // Set the clicked div as expanded
    setIsPaused(true); // Pause the auto-expansion
    setTimeout(() => setIsPaused(false), 5000); // Resume auto-expansion after 5 seconds
  };

  return (
    <>
      <section className="px-3 bg-slate-200 py-8">
        <div className='container mx-auto'>
          <div className='flex flex-wrap'>
              <div className='w-full lg:w-[40%] flex justify-center flex-col'>
                  <p className=' text-[50px] font-bold ps-32 leading-[60px]'>
                    Technology<br className='hidden lg:block' /> that makes<br className='hidden lg:block' /> sense for your<br className='hidden lg:block' /> business
                  </p>
              </div>
              <div className='w-full lg:w-[60%]'>
                  <div className="flex justify-center items-end">
                    {images.map((src, idx) => (
                      <Image
                        key={idx}
                        src={src}
                        width={300}
                        height={300}
                        alt={`Image ${idx + 1}`}
                        className={`relative transition-all duration-1000 h-[20vh] lg:h-[60vh] mx-2 rounded-[20px] overflow-hidden cursor-pointer object-cover`}
                        style={{
                          width: `${expandedIndex === idx ? expandedWidth : originalWidths[idx]}vh`,
                        }}
                          onClick={() => handleClick(idx)}
                      /> 

                    ))}
                  </div>
              </div>
          </div>
        </div>
      </section>

      {
      bulkMessage.map((data)=>{
        return(
          <>
            <div className='py-10'>
              <ServicesSecondSec 
                ourServicesText1={data.ourServicesText1} 
                ourServicesText2={data.ourServicesText2} 
                ourServicesText3={data.ourServicesText3} 
                ourServicesText4={data.ourServicesText4} 
                ourServicesImg1={data.ourServicesImg1} 
                ourServicesImg2={data.ourServicesImg2} 
                ourServicesImg3={data.ourServicesImg3}

                ourServicesCardTextHead1={data.ourServicesCardTextHead1}
                ourServicesCardTextDesc1={data.ourServicesCardTextDesc1}
                ourServicesCardTextHead2={data.ourServicesCardTextHead2}
                ourServicesCardTextDesc2={data.ourServicesCardTextDesc2}
                ourServicesCardTextHead3={data.ourServicesCardTextHead3}
                ourServicesCardTextDesc3={data.ourServicesCardTextDesc3}
                ourServicesCardTextHead4={data.ourServicesCardTextHead4}
                ourServicesCardTextDesc4={data.ourServicesCardTextDesc4}
              />
            </div>
            <OurKeypoints
              keyPointsHead={data.keyPointsHead}
              keyPointsCard={data.keyPoints}
            />
            <Conclusion
              conclusionHead={data.conclusionHead}
              conclusionDesc={data.conclusionDesc}
            />
            <ServicesFaq
              servicesFaqData={bulkMessageFaq}
            />
          </>
        )
      })
    } 
    
    </>
  );
};

export default ExpandingDivs;