'use client'
import CardStack from '@/app/components/cardStack/CardStack'
import Image from 'next/image'
import React, { useState } from 'react'

const Index = () => {
  return (
    <>
   
      <div className='transition-all bg-invest_report_icons bg-softpurple md:block hidden  lg:h-[740px] h-[100vh] px-8 pt-[70px]'>
        <div className='bg-white rounded-lg flex lg:flex-row flex-col gap-10 lg:py-0 py-10 justify-center items-center h-full w-full lg:gap-16'>
              <GuardianAngel/>
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
                  
          </div>
          
    </div>
    </>
  )
}

export default Index




function GuardianAngel() {
  const [scaleUp, setScaleUp] = useState(1);
  return (
    <div className='bg-greylight rounded-lg cursor-pointer -my-20 lg:w-[400px] w-full h-full'
    onMouseLeave={() => setScaleUp(1)}
    onMouseOver={() => setScaleUp(1.2)}
    >
      <h2 className='capitalize text-center py-7 text-black font-bold text-lg'>invest Reports</h2>
      <div className='relative w-full mt-10'>
        <Image src='/IR_1_1.png' alt='milestone_5' width={273} height={390}
        className='absolute right-[7.75rem] lg:top-0 '
        />
        <Image src='/IR_2_1.png' alt='trading_behavior_Stock_5' width={273} height={390}
           style={{ transition: 'transform 0.5s', transform: `scale(${scaleUp})` }}
           className='absolute  right-5'
        />
        <Image src='/IR_3_1.png' alt='trading_behavior' width={273} height={390}
          className='absolute right-[-9px]'
        />
             <p className='invisible flex flex-col items-start text-ocean text-2xl font-medium'>
                     
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
      </div>
    </div>
  )
}