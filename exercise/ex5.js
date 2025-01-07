//window.onload는 js에서 가장 처음 시행될 예정이라 참조 불가
document.addEventListener('DOMContentLoaded', function () {
    let fm=document.forms['custom'];
    let id=fm.id;
    if (id) {
        id.focus();
    }
});

let fm=document.forms['custom'];
let id=fm.id;
let pw=fm.pw;

function click1(){
    if(!id.value){
        alert('id를 입력하세요');
        return 0;
    }

    let exid=/^[a-zA-Z0-9]{0,}$/;
    if(!id.value.match(exid)){
        alert('아이디 형식이 잘못되었습니다.');
        return 0;
    }
    if(!pw.value){
        alert('패스워드를 입력하세요');
        return 0;
    }
    let expw=/^[a-zA-Z0-9_!?#]{6,}$/;
    if(!pw.value.match(expw)){
        alert('비밀번호는 영문대소문자, 숫자, _!?#만 가능하며 6자리 이상으로 하시오');
        pw.value="";
        pw.focus();
    }
    
}


 