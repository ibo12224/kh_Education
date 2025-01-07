function open1(a){
    let left=(screen.availWidth-400)/2;
    let top=(screen.availHeight-200)/2
    window.open(`html${a}.html`,`blank${a}`,
        `width=400px, height=400px, left= ${left+a*100}, top=${top},`);


}