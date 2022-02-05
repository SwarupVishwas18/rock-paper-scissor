// All DOMs

let rock = document.querySelector('.rock')
let paper = document.querySelector('.paper')
let scissor = document.querySelector('.scissor')
let arena_user = document.querySelector('.user-choice')
let arena_pc = document.querySelector('.pc-choice')
let user_score_container = document.querySelector('.user-score')
let pc_score_container = document.querySelector('.pc-score')
let result = document.querySelector('.result');
let arena = document.querySelector('.arena')

// Static Variables Created be Swarup
let option = [];
let img_directory = "./assets/";
let img = ["paper.png","rock.png","scissors.png"]
let pc_score = 0
let user_score = 0


rock.addEventListener('click',function(){
    option = [];
    option.push('Rock');
    option.push(pcChoice());
    console.log(option);
    validate(option);
    addImage(option)
});

paper.addEventListener('click',function(){
    option = [];
    option.push('Paper');
    option.push(pcChoice());
    console.log(option);
    validate(option);
    addImage(option)
});

scissor.addEventListener('click',function(){
    option = [];
    option.push('Scissors');
    option.push(pcChoice());
    console.log(option);
    validate(option);
    addImage(option)
});

function addImage(option){
    let user_img_file = option[0].toLowerCase();
    let pc_img_file = option[1].toLowerCase();
    arena_user.innerHTML = `<img width="100" class='arena-pic' src="${img_directory}${user_img_file}.png">`;
    arena_pc.innerHTML = `<img width="100" class='arena-pic' src="${img_directory}${pc_img_file}.png">`;
    user_score_container.textContent = user_score;
    pc_score_container.textContent = pc_score;
    
}

function pcChoice(){
    let choice = Math.floor(Math.random()*3)
    let all_options = ["Rock","Paper","Scissors"];
    return all_options[choice];
}


function validate(option){
    if(option[0] == 'Rock'){
        if(option[1] == 'Scissors'){
            console.log("You won..!! Rock beats Scissors")
            result.innerText="You won..!! Rock beats Scissors"
            user_score++
            arena.style.backgroundColor = "#8bc34a"

        }
        else if(option[1] == 'Paper'){
            console.log("You lost..!! Paper covers the Rock")
            result.innerText="You lost..!! Paper covers the Rock"
            pc_score++
            arena.style.backgroundColor = "#c34a4e"

        }
        else{
            console.log("This is tie..!! Rock v/s Rock is every body's match")
            result.innerText="This is tie..!! Rock v/s Rock is every body's match"
            arena.style.backgroundColor = "#03a9f4"
        }
    }
    else if(option[0] == 'Paper'){
        if(option[1] == 'Scissors'){
            console.log("You lost..!! Paper is no match for Scissor")
            result.innerText = "You lost..!! Paper is no match for Scissor"
            pc_score++
            arena.style.backgroundColor = "#c34a4e"

        }
        else if(option[1] == 'Rock'){
            console.log("You won..!! Paper has beaten the Rock")
            result.innerText="You won..!! Paper has beaten the Rock"
            user_score++
            arena.style.backgroundColor = "#8bc34a"

        }
        else{
            console.log("This is tie..!! Paper v/s Paper is every body's match")
            result.innerText="This is tie..!! Paper v/s Paper is every body's match"
            arena.style.backgroundColor = "#03a9f4"

        }
    }
    else{
        if(option[1] == 'Rock'){
            console.log("You lost..!! Scissor is too soft for Rock")
            result.innerText="You lost..!! Scissor is too soft for Rock"
            arena.style.backgroundColor = "#c34a4e"

            pc_score++
        }
        else if(option[1] == 'Paper'){
            console.log("You won..!! Scissor cuts down the paper")
            result.innerText="You won..!! Scissor cuts down the paper"
            arena.style.backgroundColor = "#8bc34a"
            user_score++
        }
        else{
            console.log("This is tie..!! Scissor v/s Scissor is every body's match")
            result.innerText="This is tie..!! Scissor v/s Scissor is every body's match"
            arena.style.backgroundColor = "#03a9f4"

        }
    }
    if(user_score == 5){
        // alert("You won and humanity is saved")
        window.location = "./success.html"
    }
    
    if(pc_score == 5){
                window.location = "./failure.html"

    }
}