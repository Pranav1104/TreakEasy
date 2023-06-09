let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.add('active');
}

document.querySelector('#nav-close').onclick = () =>{
    navbar.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.add('active');
}

document.querySelector('#close-search').onclick = () =>{
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
};

window.onload = () =>{
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
};


var swiper = new Swiper(".product-slider", {
    loop:true, 
    grabCursor:true,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
    },
});

var swiper = new Swiper(".review-slider", {
    loop:true, 
    grabCursor:true,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".blogs-slider", {
    loop:true, 
    grabCursor:true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".clients-slider", {
    loop:true, 
    grabCursor:true,
    spaceBetween: 20,
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
    },
});

var email = document.querySelector("#email");

function validate(){
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  
  if(email.value.length <= 0){
    alert("Enter you email");
    email.focus();
    return false;
  }
  if(password.value.length <= 0){
    alert("Enter you password");
    email.focus();
    return false;
  }
  return false;
};

function validate1(){
  var email1 = document.getElementById("email1");
  var pass1 = document.getElementById("pass1");
  var pass2 = document.getElementById("pass2");
  
  if(email1.value.length <= 0){
    alert("Enter you email");
    email1.focus();
    return false;
  }
  else if(pass1.value.length <= 0){
    alert("Enter your password");
    pass1.focus();
    return false;
  }
  else if(pass2.value.length <= 0 ){
    alert("Confirm your password");
    pass2.focus();
    return false;
  }
  else if(pass2.value != pass1.value){
    alert("password is wrong");
    pass2.focus();
    return false;
  }
  
  return true;
};

var bookbtn = document.getElementById("book");

bookbtn.addEventListener("click", signupPlz );

function signupPlz (e){
  alert("please log in");
}