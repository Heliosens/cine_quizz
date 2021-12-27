// get element
let quest = $(question);
let quote = $('div');
let answer = $('section p');

// create score
let score = 0;

// console.log(quest[0].title);
console.log(answer);



let nbr = 0;
if(nbr < 10){ // total 10 question

    // listen user answer
    answer.click(function (){
        let item = displayQuest();
        if($(this).text() === item[0].title){
            score++;
            console.log('yes ' + score);
        }
        nbr++;
    })

}

function displayQuest (){
    // display quote
    quote.append(
        '<span>Citation ' + nbr + ' /10</span>' +
        '<p> "' + quest[nbr].citation + '"</p>'
    );
    // get current Question
    let current = quest.splice(nbr, 1);
    // select 4 wrong answer
    answer.each(function (){
        let r = Math.floor(Math.random() * quest.length);
        $(this).text(quest[r].title);
        quest.splice(r, 1);
    })
    // replace one by the right answer
    answer.eq(Math.floor(Math.random() * answer.length)).text(current[0].title)
    return current;
}
