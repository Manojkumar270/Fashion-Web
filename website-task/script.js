const register=document.getElementById("register")
const login=document.getElementById("login")

if(register){
    register.addEventListener("submit",function(e){
        e.preventDefault();
        const name=document.getElementById("name").value;
        const email=document.getElementById("email").value;
        const mobile=document.getElementById("mobile").value;
        const password=document.getElementById("password").value;

        const storedUser=JSON.parse(localStorage.getItem('name'))
        if (email==storedUser){
            alert("user already exists.please login ")
        }
        else{
            localStorage.setItem('name',JSON.stringify(email));
            localStorage.setItem('pass',JSON.stringify(password));
            alert("registration successfull")
            window.location.href="login.html"
        }
    })
}

if(login){
    login.addEventListener("submit",function(e){
        e.preventDefault();
        const useremail=document.getElementById("email").value;
        const password=document.getElementById("password").value;

        const storedUser=JSON.parse(localStorage.getItem('name'))
        const storedPass=JSON.parse(localStorage.getItem('pass'))
        console.log(storedUser)

        if(storedUser == useremail && storedPass==password){
            alert("wellcome");
            window.location.href="home.html"
        }
        else if(storedUser == useremail && storedPass !=password){
            alert("enter the correct password")
        }
        else{
            alert("please register")
            window.location.href="registration.html"
        }      
})
}