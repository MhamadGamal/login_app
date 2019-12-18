let my_users, 
    email_exist = false, 
    password_exist = false,
    token;
// let users = [
//     {
//         email: 'user1@gmail.com',
//         password: 12345678,
//         id: 1000,
//         name: "Mohammad Gamal",
//         img: "img/img-3.jpg",
//         job: "Front-End Developer" 
//     },
//     {
//         email: 'user2@gmail.com',
//         password: 12345678,
//         id: 1001,
//         name: "Ahmed Saad",
//         img: "img/img-1.jpg",
//         job: "Dentist"
//     },
//     {
//         email: 'user3@gmail.com',
//         password: 12345678,
//         id: 1002,
//         name: "Mustafa Ayman",
//         img: "img/img-2.jpg",
//         job: "Geologist"
//     },
//     {
//         email: 'user4@gmail.com',
//         password: 12345678,
//         id: 1003,
//         name: "Tarek No3man ",
//         img: "img/img-4.jpg",
//         job: "Mean Stack Developer"
//     },
//     {
//         email: 'user5@gmail.com',
//         password: 12345678,
//         id: 1004,
//         name: "Ahmed Rashad",
//         img: "img/img-5.jpg",
//         job: "Lawyer"
//     },
//     {
//         email: 'user6@gmail.com',
//         password: 12345678,
//         id: 1005,
//         name: "Mohaab",
//         img: "img/img-6.jpg",
//         job: "System Admin"
//     }
// ]

// window.localStorage.setItem('users', JSON.stringify(users))


let login_form = document.getElementsByTagName('form')[0];
let email = document.getElementsByTagName('input')[0];
let pass = document.getElementsByTagName('input')[1];
let error = document.getElementsByClassName('error');
let fields = document.getElementsByTagName('input');

for(i =0 ; i < fields.length; i++ ){
    fields[i].addEventListener('keypress', function(){
        this.nextElementSibling.innerText = ''
    });
}


login_form.addEventListener('submit', function(e){
    debugger;
    e.preventDefault();
    
    my_users = JSON.parse(localStorage.getItem('users'))
    
    for(user of my_users){
        if(email.value == user.email){
            email_exist = true;
            error[0].innerText = "";
            token = user.id;
            localStorage.setItem('token', user.id);
        }
        if(pass.value == user.password){
            password_exist = true;
            error[1].innerText = ""
        }
    }
    if(!email_exist){
        error[0].innerText = "enter a valid email"
    }
    if(!password_exist){
        error[1].innerText = "enter a valid password"
    }

    if(email_exist&&password_exist){
        window.location = 'profile.html'
    }  
})


