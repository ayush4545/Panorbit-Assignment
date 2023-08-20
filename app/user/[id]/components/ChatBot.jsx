import { labels } from '@/config/text.constant';
import React from 'react'
import { BiChevronUp, BiChevronDown } from "react-icons/bi";
import { BsChatRight } from "react-icons/bs";
import { IoMdSend, IoIosClose } from "react-icons/io";
const ChatBot = (props) => {
     const { showChats, setShowChats, users, selectedChat, showSelectedChat, setShowSelectedChat, setSelectedChat } = props
     const handleChatBotOpen = () => {
          setShowChats(!showChats);
          setShowSelectedChat(true)
     }
     return (
          <div className=" fixed w-[80%] bottom-0 right-[40px] flex items-end  gap-5 flex-row-reverse" >
               {/* Main Chat Bot */}
               <div className=" bg-[#2C65C8] w-[250px] rounded-tr rounded-tl " >

                    <div className=" px-2 flex items-center justify-between py-2  text-white cursor-pointer" onClick={handleChatBotOpen} >
                         <div className="flex items-center gap-2">
                              <BsChatRight />
                              <p>{labels?.CHAT}</p>
                         </div>

                         {showChats ? <BiChevronDown className="text-xl" /> : <BiChevronUp className="text-xl" />}
                    </div>
                    <div className={` bg-white overflow-x-hidden overflow-y-auto ml-[1px] mr-[1px] w-[99%]  transition-all  ease-in-out delay-150 ${showChats ? 'traslate-x-0 translate-y-0 h-[40vh]  ' : 'translate-y-22  h-0'}`} >
                         {
                              users?.map((user) => {
                                   return (
                                        <div className="px-3 py-2 flex items-center justify-between cursor-pointer" key={user?.id} onClick={() => { setSelectedChat(user) }}>
                                             <div className="flex items-center gap-2">
                                                  <img src={user?.profilepicture} alt={user?.name} className="rounded-full w-[30px] h-[30px] " />
                                                  <p className=" text-[#4A4A4A] text-[12px]">{user?.name}</p>
                                             </div>
                                             <div className={`w-2 h-2 rounded-full ${user.id % 2 ? "bg-green-500" : "bg-gray-300"}`}></div>
                                        </div>
                                   )
                              })
                         }
                    </div>
               </div>

               {/* Selected  user chat*/}
               {
                    selectedChat !== null && (
                         <div className={`bg-[#2C65C8] w-[250px] rounded-tr rounded-tl  transition-all  ease-in-out delay-150 ${selectedChat !== null ? `traslate-x-0 translate-y-0 h-[${showSelectedChat ? "40" : "5"}vh]  ` : 'translate-y-22  h-0'}`} >
                              <div className=" px-2 flex items-center justify-between py-2  text-white cursor-pointer">

                                   <div className="flex items-center gap-2">
                                        <img src={selectedChat?.profilepicture} alt={selectedChat?.name} className="rounded-full w-[20px] h-[20px] " />

                                        <p className=" text-white text-[12px]">{selectedChat?.name}</p>
                                   </div>

                                   <div className="flex items-center ">
                                        {
                                             showSelectedChat
                                                  ?
                                                  <BiChevronDown className="text-xl" onClick={() => { setShowSelectedChat(false) }} />
                                                  :
                                                  <BiChevronUp className="text-xl" onClick={() => { setShowSelectedChat(true) }} />
                                        }

                                        <IoIosClose className=" text-white" onClick={() => { setSelectedChat(null) }} />
                                   </div>

                              </div>

                              <div className="w-[99%] bg-white overflow-x-hidden h-[90%] ml-[1px] mr-[1px]">

                                   <div className="w-full h-[85%] overflow-x-hidden overflow-y-auto px-2">

                                        <div className="mt-2 flex flex-col">

                                             <div className=" px-2 py-2 bg-gray-300 text-[10px] w-fit rounded">
                                                  lorem ipsum , lorem ipsun
                                             </div>

                                             <div className="px-2 py-2 bg-gray-300 text-[10px] w-fit rounded mt-2">
                                                  lorem ipsum , lorem ipsun
                                             </div>
                                        </div>

                                        <div className="text-center py-2 text-[8px] text-[#9A9A9A]">
                                             9.16 PM
                                        </div>

                                        <div className="mt-2 flex flex-col items-end">

                                             <div className=" px-2 py-2 bg-gray-300 text-[10px] w-fit rounded">
                                                  lorem ipsum dolor
                                             </div>

                                             <div className="px-2 py-2 bg-gray-300 text-[10px] w-fit rounded mt-2">
                                                  lorem ipsum
                                             </div>
                                        </div>
                                   </div>
                                   <div className="w-full h-[12%] border-t-2 border-gray-300 flex items-center gap-1 pr-1">
                                        <input className="w-full outline-none border-none pl-2 text-[12px] text-[#4A4A4A] " />
                                        <IoMdSend className="text-[#2C65C8] cursor-pointer text-xl" />
                                   </div>
                              </div>
                         </div>
                    )
               }

          </div>
     )
}

export default ChatBot