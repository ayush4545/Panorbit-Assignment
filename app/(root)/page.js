import UserCard from '@/app/(root)/components/UserCard'
import getData from '@/config/getData'
import { labels } from '@/config/text.constant'

export default async function Home() {
  const users = await getData()

  return (

    <main className="flex items-center justify-center h-screen w-full bg-gradient-to-tr from-purple-500 to-blue-700 relative">
      {/* Gradient Wave Shape Background */}
      <div className="custom-shape-divider-bottom-1692473272">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
        </svg>
      </div>

      {/* Showing all users */}
      <div className='z-[9999]  w-[35vw] h-[65vh] bg-[#f6f6f6] rounded-[20px] shadow-2xl shadow-gray-500 overflow-hidden'>
        {/* title */}
        <h1 className="text-[#7C7C7C] font-semibold text-center text-xl pt-7">{labels?.SELECT_ACCOUNT}</h1>

        {/* list of users */}
        <div className="mt-5 w-full h-[90%] overflow-x-hidden overflow-y-auto bg-white pb-10 px-10">
          {users && users.length > 0 && users?.map((user) => {
            return <UserCard id={user.id} name={user.name} profilepictur={user.profilepicture} />
          })}
        </div>
      </div>

    </main>


  )
}
