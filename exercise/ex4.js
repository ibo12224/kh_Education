let fm=document.forms['test'];
let nam=fm.name;
let email=fm.email;
let birth=fm.birthday;
document.addEventListener('DOMContentLoaded',function(){
    let name=fm.name;
    name.focus();
});

function check(){
    if(!nam.value){
        alert('이름을 입력하세요');
        return 0;
    }
    let nn=/^[가-힣]{3,}$/;
    if(!nam.value.match(nn)){
        alert('한글로 입력하세요');
        return 0;
    }

    if(!email.value){
        alert('email을 입력하세요');
        return 0;
    }
    let exem=/^[a-z0-9_+.-]+@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/;
    if(!email.value.match(exem)){
        alert('이메일 형식에 맞게 입력하세요');
        return 0;

    }

    if(!birth.value){
        alert('생년월일을 입력하세요');
        return 0;
    }
    let exbr=/^[0-9]{6,8}$/;

    if(!birth.value.match(exbr)){
        alert('형식에 맞게 입력력');

        return 0;
    }

}