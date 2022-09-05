// javascript
//set initial count
 let count = 0
 const value = document.querySelector("#value");
 const btns = document.querySelectorAll(".btn");
 
//using the event object to get the current object and classList
btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;
            console.log(styles);
            if (styles.contains("decrease")) {
               count--;
            }else if (styles.contains("increase")){
               count++
            }else{
               count = 0
            }
            if(count > 0){
                   value.style.color = "green"
            }
            if(count < 0){
                   value.style.color = "red"
            }
            if(count === 0){
                   value.style.color = "#222"
            }
            
            value.textContent = count;
        });
})

   
