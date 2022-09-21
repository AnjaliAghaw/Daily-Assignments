function Register(){
    var employee={}
    employee.uname=document.fdata.uname.value
    employee.password=document.fdata.password.value
    employee.city=document.fdata.city.value
    employee.mnbn=document.fdata.mnbn.value
    employee.email=document.fdata.email.value

    var data = localStorage.setItem('udata',JSON.stringify(employee))

}

function showData(){
   
    JSON.parse('employee').innerHTML=localStorage.getItem('udata')
}
