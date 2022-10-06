const form =document.getElementById('form')
const userNameEl=document.getElementById('username')
const emailEl=document.getElementById('email')
const password=document.getElementById('password')
const confirmPassword=document.getElementById('password2')
function showError(qutu,mesaj){
    const formControl=qutu.parentElement
    formControl.className="form-control error "
    const small=formControl.querySelector('small')
    small.innerText=mesaj
}
function showSuccess(input){
    const formControl=input.parentElement
    formControl.className='form-control success'
}
function checkEmail(input){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())){
        showSuccess(input)
    }else{
        showError(input,'email duzgun deyil')
    }
}
function checkRequired(inputlarMassivi){
    inputlarMassivi.forEach(function(input) {
        if(input.value.trim()===''){
            showError(input,`${getFieldName(input)}bos ola bilmez`)
        }
        else{
            showSuccess(input)
        }
        
    })
   
}
function checkLength(input,min,max){
    if(input.value.length>min && input.value.length<max){
        showSuccess(input)
    }else{
        showError(input,`${getFieldName(input)} min${min},max${max} simvoldan ibaret olmalidir`)
    }
}
function checkPassword(input1,input2){
    if(input1.value!==input2.value){
        showError(input2,`${getFieldName(input2)} duzgun deyil`)
       
    }
}
function getFieldName(input){
    return input.id.charAt(0).toUpperCase()+input.id.slice(1)
    
   
}
form.addEventListener('submit',function(e){
    e.preventDefault()
    checkRequired([userNameEl,emailEl,password,confirmPassword])
    checkLength(userNameEl,3,17)
    checkLength(password,3,8)
    checkEmail(emailEl)
    checkPassword(password,confirmPassword)
})