import { labels } from '@/config/text.constant'
import React from 'react'

const UsersBasicDetails = (props) => {
     const { user } = props

     return (
          <div className="w-full border-r-2 border-gray-300 pr-10 flex flex-col h-full items-center">

               <img src={user?.profilepicture} alt={user?.name} className="rounded-full w-[110px] h-[110px] mb-3 xl:w-[130px] xl:h-[130px] " />

               <h1 className="text-md  text-[#545454] font-semibold">{user?.name}</h1>

               {/* User personal Details */}
               <div className='mt-2  w-full ml-10 space-y-1 '>
                    <div className=" w-full flex justify-center">
                         <p className='text-[#9A9A9A] text-[14px]   w-[30%]  text-right 
                         '>{labels?.USERNAME} : </p>
                         <p className='text-[#545454] font-semibold text-[14px]   tracking-wider w-[70%] whitespace-break-spaces pl-1'>{user?.username}</p>
                    </div>
                    <div className=" w-full flex justify-center">
                         <p className='text-[#9A9A9A] text-[14px]   w-[30%] text-right'>{labels?.EMAIL} : </p>
                         <p className='text-[#545454] font-semibold text-[14px]   tracking-wider whitespace-break-spaces w-[70%] pl-1'>{user?.email}</p>
                    </div>
                    <div className=" w-full flex justify-center">
                         <p className='text-[#9A9A9A] text-[14px]  w-[30%]  text-right'>{labels?.PHONE} : </p>
                         <p className='text-[#545454] font-semibold text-[16px] xl:text-[14px]  tracking-wider whitespace-break-spaces w-[70%] pl-1'>{user?.phone}</p>
                    </div>
                    <div className=" border-b-2 border-gray-300 pb-3 w-full flex justify-center ">
                         <p className='text-[#9A9A9A] text-[14px]  w-[30%]  text-right'>{labels?.WEBSITE} : </p>
                         <p className='text-[#545454] font-semibold text-md text-[14px] tracking-wider whitespace-break-spaces w-[70%] pl-1'>{user?.website}</p>
                    </div>
               </div>

               <h2 className="text-[#9A9A9A]  text-md text-[16px] xl:text-[16px] mt-3 ">
                    {labels?.COMPANY}
               </h2>

               {/* User's Company Related Details */}
               <div className='mt-2 w-[90%] ml-10 space-y-1 '>
                    <div className="w-full flex justify-center ">
                         <p className='text-[#9A9A9A] text-[14px] w-[30%]  text-right  '>{labels?.NAME} : </p>
                         <p className='text-[#545454] font-semibold text-[14px]  tracking-wider whitespace-break-spaces w-[70%] pl-1'>{user?.company.name}</p>
                    </div>
                    <div className="w-full flex justify-center ">
                         <p className='text-[#9A9A9A] text-[14px] w-[40%] -ml-6 text-right '>{labels?.CATCH_PHRASE} : </p>
                         <p className='text-[#545454] font-semibold text-[14px]  tracking-wider whitespace-break-spaces w-[70%] pl-1'>{user?.company.catchPhrase}</p>
                    </div>
                    <div className="w-full flex justify-center ">
                         <p className='text-[#9A9A9A] text-[14px] w-[30%]  text-right  '>{labels?.BS} : </p>
                         <p className='text-[#545454] font-semibold text-[14px]  tracking-wider whitespace-break-spaces w-[70%] pl-1'>{user?.company.bs}</p>
                    </div>

               </div>
          </div>
     )
}

export default UsersBasicDetails