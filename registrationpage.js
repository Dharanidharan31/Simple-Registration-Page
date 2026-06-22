const submite = document.getElementById('submite');
submite.addEventListener("click",function validation(){
   let name = document.getElementById('name').value;
   let email = document.getElementById('email').value;
   let password = document.getElementById('password').value;
   let dob = document.getElementById('dob').value;
   let education = document.getElementById('education').value;
   let gender = document.getElementById('gender').value;
   let country = document.getElementById('country').value;
   let state = document.getElementById('state').value;
   let address1 = document.getElementById('address1').value;
   let address2 = document.getElementById('address2').value;
   let pincode = document.getElementById('pincode').value;
   let language = document.getElementById('language').value;
   let contactno = document.getElementById('contactno').value;

   if(name==""){
       alert("enter valid name");
   }
   else if(email==""){
       alert("enter valid email");
   }
   else if(password==""){
       alert("enter valid password");
   }
   else if(dob==""){
       alert("please select your date of birth");
   }
   else if(education==""){
       alert("please select your education");
   }
   else if(gender==""){
       alert("select your gender type");
   }
   else if(country==""){
       alert("please select your country name");
   }
   else if(state==""){
       alert("please select your state");
   }
   else if(address1==""){
       alert("please type your current address");
   }
   else if(address2==""){
       alert("please type your permanent address");
   }
   else if(pincode==""){
       alert("please type your pincode");
   }
   else if(language==""){
       alert("please select your language");
   }
   else if(contactno==""){
       alert("please select your contact number");
   }
});
