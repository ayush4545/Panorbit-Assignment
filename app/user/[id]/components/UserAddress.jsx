import { labels } from '@/config/text.constant'
import React from 'react'

const UserAddress = (props) => {
     const { user } = props

     return (
          <div className="pl-10 w-full h-full">
               <p className='text-[#9A9A9A] text-[14px]'>{labels?.ADDRESS} : </p>
               <div className=" h-full w-[96%] mt-3 ml-[12px] space-y-2">

                    <div className=' w-full flex'>
                         <p className='text-[#9A9A9A] text-[14px] w-[15%] xl:w-[10%]  text-right'>{labels?.STREET} : </p>

                         <p className="text-[#545454] font-semibold text-[14px] w-[60%] pl-1">{user?.address?.street}</p>
                    </div>

                    <div className=' w-full flex'>
                         <p className='text-[#9A9A9A] text-[14px] w-[15%] xl:w-[10%] text-right '>{labels?.SUITE} : </p>

                         <p className="text-[#545454] font-semibold text-[14px] w-[60%] pl-1">{user?.address?.suite}</p>
                    </div>

                    <div className=' w-full flex'>
                         <p className='text-[#9A9A9A] text-[14px] w-[15%] xl:w-[10%]  text-right '>{labels?.CITY} : </p>

                         <p className="text-[#545454] font-semibold text-[14px] w-[60%] pl-1">{user?.address?.city}</p>
                    </div>

                    <div className='w-full flex'>
                         <p className='text-[#9A9A9A] text-[14px] w-[15%] xl:w-[10%]  text-right'>{labels?.ZIPCODE} : </p>

                         <p className="text-[#545454] font-semibold text-[14px] w-[60%] pl-1">{user?.address?.zipcode}</p>
                    </div>

                    <div className='relative h-full w-full rounded-xl overflow-hidden ml-4'>

                         <img src="https://i.stack.imgur.com/HILmr.png" className='w-full h-[60%]' />

                         <div className='flex w-full items-center justify-end gap-5 mt-2'>
                              <p className="text-[12px] text-[#9A9A9A]">Lat : <span className="text-[#545454] font-semibold">{user?.address?.geo?.lat}</span></p>
                              <p className="text-[12px] text-[#9A9A9A]">Lng : <span className="text-[#545454] font-semibold">
                                   {user?.address?.geo?.lng}
                              </span></p>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default UserAddress