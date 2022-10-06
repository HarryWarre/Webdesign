const container = document.querySelector(".container-1"),
     pwShowhide = document.querySelectorAll(".showHidePw"),
     pwFields = document.querySelectorAll(".password"),
     signup = document.querySelector(".signup-link"),
     login = document.querySelector(".login-link");


    //  Js show and hide password

    pwShowhide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField=>{
                if(pwField.type === "password"){
                    pwField.type = "text";

                    pwShowhide.forEach(icon =>{
                        icon.classList.remove("fa-sharp","fa-solid","fa-eye-slash","showHidePw")
                        icon.classList.add("fa-solid","fa-eye","showHidePw");
                    })
                }
                else{pwField.type ="password";
                pwShowhide.forEach(icon =>{
                    icon.classList.remove("fa-solid","fa-eye","showHidePw");
                    icon.classList.add("fa-sharp","fa-solid","fa-eye-slash","showHidePw")
                })
                }
            })
        })
    })

    // Password login
    function checkLogin () {
        var account = document.getElementById("account").value;
        var password = document.getElementById("password").value;
        if (account != "admin@gmail.com")
        alert ("Sai tên đăng nhập!");
        else if (password != "123456")
        alert ("Sai mật khẩu");
        else if (account == "admin@gmail.com" && password == "123456")
        alert ("Đăng nhập thành công");
        else alert ("Lỗi đăng nhập");
    }

    //js code to appear signup and login form 
    signup.addEventListener("click", ()=>{
        container.classList.add("active");
    });
    login.addEventListener("click", ()=>{
        container.classList.remove("active");
    }); 
