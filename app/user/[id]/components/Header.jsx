'use client'
import React, { useState, useRef } from 'react'
import UserPopup from './UserPopup'

const Header = (props) => {
     const profileRef = useRef()
     const imageRef = useRef()
     const [open, setOpen] = useState(false)
     const { selectedTab, user, allUsers } = props
     const handleClick = () => {
          setOpen(!open)
     }
     return (
          <div className="flex items-center justify-between relative border-b-2 border-gray-300 pb-5">
               <h2 className='text-2xl font-semibold text-[#545454] '>{selectedTab}</h2>
               <div className="flex gap-5 items-center cursor-pointer" onClick={handleClick}>

                    <img src={user?.profilepicture} alt={user?.name} width={20} height={20} className="rounded-full w-[40px] h-[40px]" ref={imageRef} />
                    <p className="text-xl text-[#545454]" ref={profileRef}>{user?.name}</p>

               </div>

               {
                    open &&
                    (<UserPopup user={user} allUsers={allUsers} setOpen={setOpen} profileRef={profileRef} imageRef={imageRef} />)
               }

          </div>
     )
}

export default Header