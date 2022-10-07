function signUp(){
    account = {
        user:user.value,
        acc:acc.value,
        pass:pass.value,
        balance:0
    }

    if(account.acc in localStorage){
        alert("Already Exist")
        window.location="index.html";
    }
    else{
        localStorage.setItem(account.acc, JSON.stringify(account))
        alert("Successfully added")
        window.location="index.html";
    }
}
let login =()=>{
    accountNum=acno.value;
    password=pswd.value;
    // console.log('password: ', password);
    if(accountNum in localStorage) {
accountDetails = localStorage.getItem(accountNum);
accountDetails=JSON.parse(accountDetails);

if(accountDetails["password"] == password) {   
    // console.log('accountDetails["password"]: ', accountDetails["password"]); 


    Swal.fire(
        'Good job!',
        'Log successfully ',
        'success'
      ).then(function() {
        window.location = "./dash.html";
    });
 }
else{
    alert("login failed");
}

    }
else{
alert("invalid account number: ");
    
}
}