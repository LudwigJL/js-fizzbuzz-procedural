const answer = []

// Write your code below this line

for(let i = 1; i <= 15; i++){
    answer.push(i)
}

for(let i = 0; i < answer.length; i++){
    if(answer[i] % 3 === 0 && answer[i] % 5 === 0){
        answer[i] = 'FizzBuzz'
    }
    else if(answer[i] % 3 === 0){
        answer[i] = 'Fizz'
    }
    else if (answer[i] % 5 === 0){
        answer[i] = 'Buzz'
    }

}




// Don't touch the code below this line, we'll cover it later
module.exports = answer
