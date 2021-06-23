window.onload = function progress(){
    const progrsText = document.querySelector('.progressText');
    const progress = document.querySelector('.progress');
    console.log(progrsText);
    let num = 1;   // 1부터 시작
    let heightNum = 0;
    let per = setInterval(frame, 15);  

    function frame(){
        let heightPer;
        if(num >= 100){
            clearInterval(per);
            heightPer = setInterval(upFrame, 20);
        }else{
            num ++;
            progrsText.innerText = num + '%';
        }

        function upFrame(){
            if(heightNum <= -130){
                clearInterval(heightPer);
            }else{
                heightNum --;
                progress.style.top = heightNum + '%';
            }
        }
    }
}