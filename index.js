const Touches=document.querySelectorAll(".case")
let ArrayInput=[]

Touches.forEach(touch => {
    touch.addEventListener("click",(e)=>{
        let touchInput=e.target.textContent
        if (touchInput==="AC") {
            InputText.value=""
        } else if (touchInput==="DEL") {
            ArrayInput.splice(ArrayInput.length-1,ArrayInput.length)
            InputText.value=ArrayInput.join('')
        }else if (touchInput==="=") {
            TouchEnter()
        }else{
            InputText.value+=touchInput
            ArrayInput.push(touchInput)
        }
    })
});
const TouchEnter=()=>{
        let result=eval(InputText.value)
        InputText.value=result
        if (result==Error) {
            alert("fauuuux")
        }
}