const labels = {
     SELECT_ACCOUNT: "Select an account",
     PROFILE: "Profile",
     POST: "Post",
     GALLERY: "Gallery",
     TODO: "ToDo",
     COMING_SOON: "Coming Soon",
     SIGN_OUT: "Sign Out",
     ADDRESS: "Address",
     STREET: "Street",
     SUITE: "Suite",
     ZIPCODE: "Zipcode",
     CITY: "City",
     CHAT: "Chat",
     USERNAME: "Username",
     EMAIL: "e-mail",
     PHONE: "Phone",
     WEBSITE: "Website",
     COMPANY: "Company",
     NAME: "Name",
     BS: "bs",
     CATCH_PHRASE: "catchphrase"
}

const sidebarOptions = [labels?.PROFILE, labels?.POST, labels?.GALLERY, labels?.TODO];

const getRandomNumbers = (id) => {
     let number = Math.floor(Math.random() * (9 - 1 + 1)) + 1

     if (number == id) {
          number = id + 1
     }
     return number
}
export { labels, sidebarOptions, getRandomNumbers }