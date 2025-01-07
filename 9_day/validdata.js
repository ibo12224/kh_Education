function check(){
    if(!document.member.id.value){
        alert("아이디를 입력하세요!")
        document.member.id.focus();
        return 0;
        
    }
    //아이디는 영문소문자와 숫자만 입력 가능
    let expid=/^[a-z0-9]+$/;
    if(!document.member.id.value.match(expid)){
        alert("아이디는 영문소문자와 숫자만 입력 가능!");
        document.member.id.value="";
        document.member.id.focus();
        return 0;
        
    }
    //바밀번호 미입력시 메시지 출력
    if(!document.member.pw1.value){
        alert("비밀번호를 입력하세요!")
        document.member.pw1.focus();
        return 0;
        
    }
    let exppw = /^[a-zA-Z0-9_]{6,12}$/;
    //바밀번호 미입력시 메시지 출력
    if(!document.member.pw1.value.match(exppw)){
        alert("비밀번호는 6자리에서 12자리 까지 영문자와 _과 숫자만 입력하세요!")
        document.member.pw1.focus();
        return 0;
        
    }
    if(document.member.pw1.value != document.member.pw2.value){
        alert("비밀번호를 확인하세요!")
        document.member.pw2.focus();
        document.member.pw1.value="";
        document.member.pw2.value="";

        return 0;
        
    }

    let exptel=/^[0-9]{11}$/;
    if(!document.member.tel.value.match(exptel)){
        alert("연락처는 숫자만 입력하세요!")
        document.member.tel.value="";
        document.member.tel.focus();

        return 0;
        
    }




    if(!document.member.addr.value){
        alert("주소를 입력하세요!")
        document.member.addr.focus();
        return 0;
        
    }
    

    if(!document.member.email.value){
        alert("이메일을 입력하세요!")
        document.member.email.focus();
        return 0;
        
    }
    let expem=/^[a-z0-9_+.-]+@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/;
    if(!document.member.email.value.match(expem)){
        alert("이메일 형식에 맞게 작성!")
        document.member.email.focus();
        return 0;
        
    }
    document.member.submit();
}