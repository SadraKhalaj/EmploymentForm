const form = document.querySelector("form");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const Email = document.querySelector("#Email");
const Password = document.querySelector("#Password");
const Date = document.querySelector("#Date");
const Work = document.querySelector("#Work");
const Detail = document.querySelector("#Detail");






form.addEventListener("submit",(e)=>{


    const userInfo = {
      FirstName: e.target.firstName.value.toLowerCase(),
      LastName: e.target.lastName.value.toLowerCase(),
      Email: e.target.Email.value.toLowerCase(),
      Password: e.target.Password.value,
      Birtday: e.target.Date.value,
      WorkYears: e.target.Work.value,
      Detail: e.target.Detail.value.trim().toLowerCase(),
    };
 
  
    
console.log(userInfo)


   let userfirstName = document.getElementById("firstName").value.toLowerCase();
   let userName = userfirstName ? userfirstName.split(" ")[0] : "";
   alert("Hello " + userName);

    if (userInfo.Detail.includes("tehran")) {
      alert("Your product will reach you faster.");
    }

e.preventDefault()


})


firstName.addEventListener("blur",(e)=>{
    if (e.target.value.length < 3) {
      alert("invalid name.");
    }
})

lastName.addEventListener("blur", (e) => {
  if (e.target.value.length < 3) {
    alert("invalid last name");
  } 
});

Password.addEventListener("blur", (e) => {
  if (e.target.value.length < 7) {
    alert("You Need a Longer Password.");
  } 
});


Date.addEventListener("blur", (e) => {
    if(e.target.value < 18)
        alert("You must be over 18 years old.")
});



