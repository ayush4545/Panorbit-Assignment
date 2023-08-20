import Link from "next/link"

const UserCard = (props) => {
     const { id, name, profilepictur } = props
     return (
          <div className="flex gap-5 items-center py-3 border-b-2 border-gray-300">
               <Link href={`/user/${id}`} className="flex gap-5 items-center">
                    <img src={profilepictur} alt={name} width={20} height={20} className="rounded-full w-[40px] h-[40px]" />
                    <p className="text-xl text-[#6F6F6F]">
                         {name}
                    </p>
               </Link>
          </div>
     )
}

export default UserCard