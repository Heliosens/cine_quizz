console.log($(question)[0].title);
let quest = $(question);
let quote = $('div');
let answer = $('section');

console.log(quest);
quote.append('<p>' + quest[0].citation[0] + '</p>');

let i =0;
if(i < quest.length){
    let arr = [];
    let newQ = quest.splice(i, 1);
    console.log(quest);
    console.log(newQ);
    // for(let i = 0 ; i < 4 ; i++){
    //     arr.push(Math.floor(Math.random() * quest.length));
    //     answer.append('<p>' + quest[arr[i]].title + '</p>');
    //     console.log(arr);
    // }
    // i++;
}

// todo choice 3 wrong answer or get 3 random
