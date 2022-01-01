// get element
let clap = $('a');
let main = $('main');
let quote = $('#quote');
let answer = $('section p');
let quoteNbr = $('#quoteNbr');

// create arr
let arr = [];

// start value
let nbr = 0;
let score = 0;
let wrong = [];

// start game
/**
 *
 */
clap.click(function (event){
    event.preventDefault();

    clap.slideToggle(1000);
    main.slideToggle(2000);

    nbr = 0;

    // start
    let item = displayQuest();
    // listen user answer
    answer.click(function (){

        if(nbr < 9){ // total 10 question
            // test if it's the right answer
            testAnswer($(this), item);
            nbr++;
            item = displayQuest();
        }
        else {  // last question
            testAnswer($(this), item);

            let final = new ModalWindow(main.get(0), '', '80%', '80vh', '#fff176', '1px solid black')
            final.screen();
            final.box("Votre score est de " + score + " points");
            let innerModal = $('#innerBox');

            if(wrong.length > 0){
                // display right answer
                innerModal.append("<p>Il fallait trouver :</p>")
                for(let item of wrong){
                    innerModal.append(
                        '<span><i>"' + item.citation + '"</i> __ <b>' + item.title + '</b></span>'
                    );
                }
            }
            else{
                innerModal.append("<p>Bravo !!!</p>")
            }

            final.closeBtn('Restart', '1.2rem');
            // restart
            $('#btnFrameId').click(()=>{
                // start value
                nbr = 0;
                score = 0;
                wrong = [];
                quoteNbr.first().text(nbr + 1);
            });
        }
    })
})

/**
 * stock current question
 * display answers
 * @returns current question
 */
function displayQuest (){
    // get number
    createArr();

    // display nbr
    quoteNbr.first().text(nbr + 1);

    // display quote
    quote.html(
        '<p> "' + question[nbr].citation + '"</p>'
    );

    // suppr number of current Question
    arr.splice(nbr, 1);

    // select 4 wrong answer
    answer.each(function (){
        let r = Math.floor(Math.random() * arr.length);
        $(this).text(question[arr[r]].title);
        arr.splice(r, 1);
    });

    // replace one by the right answer
    answer.eq(Math.floor(Math.random() * answer.length)).text(question[nbr].title);

    return question[nbr];
}

/**
 *
 * @param userAns
 * @param right
 */
function testAnswer (userAns, right) {
    userAns.text() === right.title ? score++ : wrong.push(right);
}

/**
 * create array length of question length
 */
function createArr (){
    arr = [];
    for(let i = 0 ; i < question.length ; i++){
        arr.push(i);
    }
}
