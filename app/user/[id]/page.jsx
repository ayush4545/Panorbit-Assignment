"use client";
import { useEffect, useState } from "react";

import Header from "./components/Header";
import UsersBasicDetails from "./components/UsersBasicDetails";
import UserAddress from "./components/UserAddress";
import { labels, sidebarOptions } from "@/config/text.constant";
import Sidebar from "./components/Sidebar";
import ChatBot from "./components/ChatBot";
import getData from "@/config/getData";
import ErrorBoundary from "@/app/ErrorBoundry";
import Error from "./error";

export default function User({ params }) {
     const [selectedTab, setSelectedTab] = useState(labels?.PROFILE);
     const [users, setUsers] = useState([]);
     const [showChats, setShowChats] = useState(false)
     const [selectedUser, setSelectedUser] = useState(null);
     const [selectedChat, setSelectedChat] = useState(null)
     const [showSelectedChat, setShowSelectedChat] = useState(false)
     const { id } = params;

     useEffect(() => {
          getData().then((res) => {
               const users = res
               const selectedUser = users?.filter((user) => user?.id == id)[0];
               setSelectedUser(selectedUser);
               setUsers(users)
          })

          return () => { };
     }, [id]);

     const handleClick = (e) => {
          if (e.target.id) {
               setSelectedTab(e.target.id);
          }
     };

     return (
          <ErrorBoundary fallback={<Error />}>
               <div className="h-screen w-full flex overflow-hidden">
                    {/* sidebar */}
                    <Sidebar handleClick={handleClick} sidebarOptions={sidebarOptions} selectedTab={selectedTab} />

                    {/* user related details */}
                    <div className="w-full h-screen px-10 py-5 relative ">
                         {/* Header Section */}
                         <Header selectedTab={selectedTab} user={selectedUser} allUsers={users} />
                         {
                              selectedTab === labels?.PROFILE ?
                                   (
                                        <div className="w-full h-[90%] pb-4 pt-6 flex ">
                                             <div className="w-[30%] h-full">
                                                  {/* left side users details */}
                                                  <UsersBasicDetails user={selectedUser} />
                                             </div>
                                             <div className="w-[70%]  h-full">
                                                  {/* right side users address and map */}
                                                  <UserAddress user={selectedUser} />
                                             </div>
                                        </div>
                                   )
                                   :
                                   <h1 className="text-[64px] flex items-center justify-center font-extrabold tracking-wider h-[90%] text-[#9A9A9A] opacity-50">
                                        {labels?.COMING_SOON}
                                   </h1>
                         }

                         {/* Chat bot */}
                         <ChatBot
                              showChats={showChats}
                              setShowChats={setShowChats}
                              users={users}
                              selectedChat={selectedChat}
                              showSelectedChat={showSelectedChat}
                              setShowSelectedChat={setShowSelectedChat}
                              setSelectedChat={setSelectedChat}
                         />
                    </div>
               </div>
          </ErrorBoundary>
     );
}
