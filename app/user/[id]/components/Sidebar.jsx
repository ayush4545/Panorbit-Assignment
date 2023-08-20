import React from 'react'
import { BiChevronRight } from "react-icons/bi";
const Sidebar = (props) => {
     const { handleClick, sidebarOptions, selectedTab } = props
     return (
          <div
               className="bg-gradient-to-t from-purple-500 to-blue-700 w-[20%] h-screen flex flex-col justify-center overflow-hidden "
               onClick={handleClick}
          >

               {sidebarOptions?.map((option) => {
                    return (
                         <div
                              className="w-full flex justify-between items-center rounded-r-[20px] cursor-pointer"
                              key={option}
                         >
                              <div
                                   className={`ml-10 opacity-${selectedTab === option ? 1 : 50
                                        } text-white ${option !== "ToDo" ? "border-b-2" : "border-none"
                                        } border-gray-300 w-[70%] py-4 text-md xl:text-xl tracking-wide capitalize transition-all  ease-in-out delay-150`}
                                   id={option}
                              >
                                   {option}
                              </div>
                              <div
                                   className={`w-[25px] bg-white   h-[40px]  rounded-bl-[50px] rounded-tl-[50px]  -mr-2 flex items-center ${selectedTab === option ? "block" : "hidden"
                                        } transition-all ease-in-out delay-150`}
                              >
                                   <BiChevronRight className="text-2xl  text-[#BDC5D4] " />
                              </div>
                         </div>
                    );
               })}
          </div>
     )
}

export default Sidebar