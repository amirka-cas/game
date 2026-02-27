document.addEventListener("DOMContentLoaded",()=>{
        let target;
        let attempts;
        let maxAttempts=10
        const input=document.getElementById("input")
         const submit=document.getElementById("Submit")
          const newGame=document.getElementById("new-game")
           const feedback=document.getElementById("feedback")
            const attempt=document.getElementById("attempt")
          function innit(){
            target=Math.floor(Math.random()*100)+1
            attempts=0
            attempt.textContent=`attempt:${attempts}`
            feedback.textContent=''
            input.value=''
          }
          function checkGuess(){
            const userGuess=parseInt(input.value)
            if(isNaN(userGuess)|| userGuess < 1|| userGuess > 100){
             feedback.textContent=`please enter a valid number between 1 and 100!`

            }
            attempts++;
            attempt.textContent=`attempt: ${attempts}`
            if (userGuess===target){
                feedback.textContent=`correct you have gueesed it in ${attempts} attempts`
                feedback.style.color="#2ecc71"
                submit.disabled=true
            }
            else if (attempts>=maxAttempts){
                feedback.textContent=`game over . the number was ${target}`
                feedback.style.color="red"
            }
            else{
                const hint=userGuess<target ? "lower" : "higher"
                feedback.textContent=`${hint} try again`
                feedback.style.color="#f39c12"
            }
            input.value=""
          }
          submit.addEventListener("click" , checkGuess);
          newGame.addEventListener("click",innit)
          innit()
    })
    