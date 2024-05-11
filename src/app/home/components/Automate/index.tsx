'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const Index = () => {
  return (
    <>
   
      <div className='md:block hidden transition-all bg-guardian_icons bg-Orangeyyellow  lg:h-[740px] px-8 pt-[70px]'>
              <div className='bg-white rounded-lg flex lg:flex-row flex-col lg:py-0 py-10 justify-center items-center h-full w-full gap-16'>
                  <p className=' flex flex-col items-start text-ocean text-2xl font-medium'>
                     
                      <span className='font-semibold'>
                      Track your net worth automatically
                    </span>
                  <span>
                  and spend less time managing your
                  </span>
                  <span>
                  personal finances.
                      No need to update
                  </span>
                  <span>          spreadsheets manually anymore.
                  </span>
                </p>
                  
                <GuardianAngel/>
          </div>
          
    </div>
    </>
  )
}

export default Index




function GuardianAngel() {
  const [scaleUp, setScaleUp] = useState(1);
  return (
    <div className='bg-greylight rounded-lg cursor-pointer'
    onMouseLeave={() => setScaleUp(1)}
    onMouseOver={() => setScaleUp(1.2)}
    >
      <h2 className='capitalize text-center py-7 text-black font-bold text-lg'>introduction of Guardian Angel</h2>
      <Image src={'/milestone_5.png'} alt='milestone_5' width={504} height={124}  style={{ transition: 'transform 0.5s', transform: `scale(${scaleUp})`}}/>
      <Image src={'/trading_behavior_5.png'} alt='trading_behavior_Stock_5' className='my-14' width={504} height={124}/>
      <Image src={'/trading_behavior_Stock_5.png'} alt='trading_behavior' width={504} height={124}/>
      <Image src={'/Input_file_2.png'} alt='Input_file_2' className='my-5' width={504} height={124}/>

    </div>
  )
}