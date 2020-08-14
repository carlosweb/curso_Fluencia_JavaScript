const form = document.querySelector('.quiz-form')
const scoreDiv = document.querySelector('.score')
let score = 0

const correctAnswers = ['D', 'A', 'C', 'B']

const getUserAnswers = () => {

    let userAnswers = []
    correctAnswers.forEach((_, index) => {
        const userAnswer = form[`inputQuestion${index + 1}`].value
        userAnswers.push(userAnswer)
    })
   
    return userAnswers
}

const calculateUserScore = userAnswers => {
    userAnswers.forEach((userAnswer, index) =>{
        const isUserAnswresCorrect = userAnswer === correctAnswers[index]
        if(isUserAnswresCorrect){
            score += 25
        }
    })
}

const animateFinalScore = () => {
    let counter = 0
    const timer = setInterval(() =>{
        if(counter === score){
            clearInterval(timer)
        }
        
        scoreDiv.querySelector('span').textContent = `${counter++}`
        
    }, 10)
}

form.addEventListener('submit', event => {
    event.preventDefault()
    scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
    scoreDiv.classList.remove('d-none')
    const userAnswers = getUserAnswers()
    calculateUserScore(userAnswers)
    animateFinalScore()
})

