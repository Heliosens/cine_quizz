// get element
let quote = $('div');
let answer = $('section p');
let main = $('main');
let quoteNbr = $('#quoteNbr');

// keep 10 questions
keep10();

let nbr = 0;
let score = 0;
quoteNbr.first().text(nbr + 1);

start();

/**
 * start game
 */
function start(){
    // create score

    let item = displayQuest();

    // listen user answer
    answer.click(function (){

        if(nbr < 9){ // total 10 question
            // test if it's the right answer
            if($(this).text() === item[0].title){
                score++;
                console.log(score);
            }
            else {
                console.log('no');
            }
            nbr++;
            quoteNbr.first().text(nbr + 1);
            item = displayQuest();
        }
        else {
            if($(this).text() === item[0].title){
                score++;
                console.log(score);
            }
            else {
                console.log('end');
            }
            // last question
            let final = new ModalWindow(main.get(0), '#9bffc3', '80%', '80vh', '#ffffff80', '1px solid black')
            final.screen();
            final.box("Votre score", score + " points");
            // $('#innerBox').text(score);
            final.closeBtn('Restart', '1.2rem');
            // restart
            $('#btnFrameId').click(()=>{
                nbr = 0;
                score = 0;
                quoteNbr.first().text(nbr + 1);
                start();
            });
        }
    })
}

/**
 * stock question
 * display answers
 * @returns current question
 */
function displayQuest (){
    let quest = $(question);
    // display quote
    quote.html(
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

/**
 * keep 10 questions
 */
function keep10(){
    if(question.length > 10){
        // select nbr in arr.length
        let select = Math.floor(Math.random() * question.length);
        question.splice(select, 1);
        keep10();
    }
}

