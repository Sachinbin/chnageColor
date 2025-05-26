let btns=document.querySelector('button')
// console.log(boxs)
// boxs.style.backGroundColor='rgb(1,2,3)'

const btn=document.addEventListener('click',function(){
    let boxs=document.querySelector('div')
    let h3=document.querySelector('h3')
    let randomClr=changeColor()
    h3.innerText=randomClr
    boxs.style.backgroundColor=randomClr
    

})
btn.style.backgroundColor=randomClr
function changeColor(){
    let ranNum1=Math.floor(Math.random()*255)+1;
    let ranNum2=Math.floor(Math.random()*255)+1;
    let ranNum3=Math.floor(Math.random()*255)+1;
    // console.log(ranNum1)
    let color=`rgb(${ranNum1},${ranNum2},${ranNum3})`
    // console.log(color)
    return color
}