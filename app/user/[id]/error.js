'use client'

export default function Error({ error, reset }) {
     return (
          <div className="flex justify-center items-center h-screen">
               <div className=" text-center">
                    <h2 className="text-2xl font-semibold">An error occured: {error.message}</h2>
                    <button onClick={() => reset()} className="py-2 px-3 rounded-xl bg-red-500 mt-2 text-white hover:bg-red-400">Try again</button>
               </div>
          </div>

     )
}