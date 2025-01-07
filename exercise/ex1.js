let form=document.log;
let id=form.id;
let pw=form.pw;

function cl(){
    if(!id.value){
        alert('아이디를 입력하세요');
        id.focus();
        return 0;
    }
    let expem=/^[a-z0-9_+.-]+@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/;
    if(!id.value.match(expem)){
    alert("이메일 또는 아이디의 형식이 잘못 되었습니다.!")
        id.focus();
        return 0;
    }
    if(!pw.value){
        alert('비밀번호를 입력하세요');
        pw.focus();
        return 0;
    }
    let exppw=/^[0-9!@#$]{8,12}$/;
    if(!pw.value.match(exppw)){
        alert('비밀번호는 영문대소문자, 숫자, !@#$만 가능하며 8자리 이상 12자리 이하로 하시오.');
        pw.focus();
        return 0;
    }
}
