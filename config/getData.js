'use server'

export default async function getData() {
     const res = await fetch("https://panorbit.in/api/users.json")
     const users = await res.json()

     // store data in session storage so do not need to call api again and again

     return users?.users
}