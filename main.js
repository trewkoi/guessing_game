let correctGuess = Math.floor(Math.random() * 10)

const tries = []

const guess = document.getElementById("inputNumber")

document.getElementById("makeGuess").addEventListener("click", (ev) => {
    ev.preventDefault()

    if (Number(guess.value) === correctGuess) {
        tries.push(guess.value)
        document.querySelector(".screen1").classList.toggle("hide")
        document.querySelector(".screen2").classList.toggle("hide")
        
        document.querySelector(".success").innerText = `Successful in ${tries.length} tries`
    } else {
        tries.push(guess.value)
        guess.value = ""
    }
})

document.getElementById("playAgain").addEventListener("click", (ev) => {
    ev.preventDefault()
    guess.value = ""
    document.querySelector(".screen1").classList.toggle("hide")
    document.querySelector(".screen2").classList.toggle("hide")    
})
