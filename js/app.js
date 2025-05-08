const form = document.querySelector("form");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const Email = document.querySelector("#Email");
const Password = document.querySelector("#Password");
const Date = document.querySelector("#Date");
const Work = document.querySelector("#Work");
const Detail = document.querySelector("#Detail");
const Check = document.querySelector("#Check");






form.addEventListener("submit",(e)=>{


    const userName = {
        FirstName:e.target.firstName.value,
        LastName:e.target.lastName.value,
    }

    const Email = {
        Email:e.target.Email.value,
    }

    const Password = {
        Password:e.target.Password.value,
    }

    const Date = {
        Birtday:e.target.Date.value,
    }

     const Work = {
       WorkYears: e.target.Work.value,
     }

      const Detail = {
        Detail: e.target.Detail.value,
      }

      const Check = {
        Married: e.target.Check.value,
      };


console.log(userName)
console.log(Email)
console.log(Password)
console.log(Date)
console.log(Work)
console.log(Detail)
console.log(Check);






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



