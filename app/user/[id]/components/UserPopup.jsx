'use client'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { getRandomNumbers, labels } from '@/config/text.constant'
const UserPopup = (props) => {
     const router = useRouter()
     const btnRef = useRef()
     const otherUserRef = useRef()
     const { user, allUsers, setOpen, profileRef, imageRef } = props
     const randomNumber = [getRandomNumbers(user?.id), getRandomNumbers(user?.id)]
     const otherUsers = allUsers.filter((user) => {
          if (randomNumber.includes(user?.id)) {
               return user
          }
     })

     useEffect(() => {
          window.addEventListener("click", (e) => {
               if (e.target !== imageRef.current && e.target !== profileRef.current && e.target !== otherUserRef.current &&
                    e.target !== btnRef.current) {

                    setOpen(false)
               }
          })

          return () => {
               window.removeEventListener('click', () => { });
          }
     })

     const handleSignOut = () => {
          router.push("/")
     }

     return (
          <div className="absolute shadow-2xl w-[20vw] h-[55vh] rounded-2xl right-0 top-12  py-10 flex flex-col justify-center  items-center px-10 transition-all ease-in-out delay-150 bg-white z-50" >

               <img src={user?.profilepicture} alt={user?.name} width={20} height={20} className="rounded-full w-[80px] h-[80px] mb-4" />
               <h1 className="text-md xl:text-xl text-[#4A4A4A]">{user?.name}</h1>
               <p className="text-md xl:text-lg text-[#9A9A9A] my-2">{user?.email}</p>

               {/* Checkout other users profile */}
               <div ref={otherUserRef} className='w-full'>
                    {
                         otherUsers && otherUsers?.length > 0 && otherUsers?.map((user) => {
                              return (
                                   <Link href={`/user/${user.id}`} className="flex gap-5 items-center w-full justify-center py-2 border-t-2 border-gray-300">

                                        <img src={user?.profilepicture} alt={user?.name} width={20} height={20} className="rounded-full w-[20px] h-[20px]  xl:w-[30px] xl:h-[30px]" />

                                        <p className="text-xs xl:text-md text-[#6F6F6F]">{user?.name}</p>
                                   </Link>
                              )
                         })
                    }
               </div>

               {/* Sign Out Button redirect to home page */}
               <button className="rounded-[20px] py-1 px-4 xl:py-2 xl:px-5 bg-[#D55151] text-white cursor-pointer mt-3"
                    onClick={handleSignOut}
                    type="button"
                    ref={btnRef}>
                    {labels?.SIGN_OUT}
               </button>

          </div>
     )
}

export default UserPopup