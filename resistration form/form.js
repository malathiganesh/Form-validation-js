const form = document.getElementsByClassName('form');
const userName = document.getElementById('name');
const dob = document.getElementById('dob');
const email = document.getElementById('mail');
const phone = document.getElementById('phone');
const subject = document.getElementById('subject');
const confirmpd = document.getElementById('confirmpd');
const btn = document.getElementById('btn');

const nameHandler = () =>{
    const user = userName.value;
    console.log(user);
    let nameFilter = /^[A-Za-z0-9_\s]+$/;
    if(!(nameFilter.test(user) && user.length < 60)){
        setError(userName, 'Invalid Name*')
        return false
    }
    else{
        setSuccess(userName)
        return true
    }
}

const dobHandler = () =>{
    let bday = dob.value;
    console.log(bday);
    let dobfilter = /^([0-9]{2})-([0-9]{2})-([0-9]{4})$/;
    if(!dobfilter.test(bday) && bday.length == 0){
        setError(dob, 'Invalid DOB*')
        return false
    }
    else{
        setSuccess(dob)
        return true
    }
}

const mailHandler = () =>{
    let mail = email.value;
    console.log(mail);
    let emailfilter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9])+$/;
    if(!(emailfilter.test(mail))){
        setError(email, 'Invalid mail id*')
        return false
    }
    else{
        setSuccess(email)
        return true
    }
}

const numHandler = () =>{
    let number = phone.value;
    console.log(number);
    let numFilter = /^([0-9]{10})+$/;
    if (!(numFilter.test(number))){
       setError(phone, 'Invalid number*')
       return false
    }
    else{
        setSuccess(phone)
        return true
    }
}

const subHandler = () =>{
    let sub = subject.value;
    console.log(sub);
    let subFilter = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{8,}$/;
    if(subFilter.test(sub) && sub.length < 30){
        setSuccess(subject)
        return true
    }
    else{
        setError(subject, 'Invalid password*')
    }
}

const passHandler = () =>{
    let sub1 =subject.value;
    let passwd = confirmpd.value;
    console.log(passwd);
    if(sub1 == passwd){
        setSuccess(confirmpd)
        return true
    }
    else{
        setError(confirmpd)
    }

}
 const validation = () =>{
    const msg = document.querySelector('.info');
    console.log(nameHandler());
    console.log(mailHandler());
    console.log(numHandler());
    console.log(subHandler());
    if(nameHandler() == true && mailHandler() == true && numHandler() == true && subHandler() == true && passHandler() == true && dobHandler() == true){
        msg.className='info success';
        const child = msg.querySelector('h5');
        child.innerText='Form Submitted Successfully';
    }else{
        msg.className = 'info error';
    }
 }
 btn.addEventListener('click', (event)=>{
    event.preventDefault();
    validation();
 })

 function setError(input) {    
    const parent = input.parentElement; 
    parent.className = "box error";    
}

function setSuccess(input) {
    const parent = input.parentElement;
    parent.className = "box success";
}
