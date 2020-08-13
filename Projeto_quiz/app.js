const form = document.querySelector('.quiz-form')
const h2 = document.querySelector('h2')

const correctAnswers = ['B', 'B', 'B', 'B']

// const showResult = () => {
    
// }

form.addEventListener('submit', event => {
    event.preventDefault()

    let score = 0
    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value
    ]

    userAnswers.forEach((userAnswer, index) =>{
        if(userAnswer === correctAnswers[index]){
            score += 25
        }
    })

    scrollTo(0, 0)

    localStorage.setItem('score', score)
    localStorage.getItem(score)
    h2.innerHTML = `Sua pontuação total é : ${score} pontos`

        let counter = 0
        const timer = setInterval(() =>{
            if(counter === score){
                clearInterval(timer)
            }

            h2.innerHTML = `Sua pontuação total é : ${counter}% pontos`
            counter++
        }, 10)
})

