/**
 *  create modal window
 *      .screen id='container',
 *      .box id='theBox' and inner box id='innerBox'
 *  enable to create input element and button
 *      .inputBox id='inputModalId';
 *  create close button
 *      .closeBtn id='btnModalId'
 * @param target
 * @param screenColor
 * @param w
 * @param h
 * @param boxColor
 * @param border
 * @constructor
 */
function ModalWindow (target, screenColor, w, h, boxColor, border){

    this.screen = function (){
        let fullScreen = document.createElement('div');
        fullScreen.style.width = innerWidth + "px";
        fullScreen.style.height = innerHeight + "px";
        fullScreen.style.backgroundColor = screenColor;

        fullScreen.style.position = "absolute";
        fullScreen.style.top = "0";
        fullScreen.style.left = "0";

        fullScreen.style.display = "flex";
        fullScreen.style.justifyContent = "center";
        fullScreen.style.alignItems = "center";

        fullScreen.id = 'container';

        target.appendChild(fullScreen);
    }

    /**
     * create modal window
     * @param title
     * @param text
     */
    this.box = function (title = ""){
        // create modal window
        let theBox = document.createElement('div');
        // style
        theBox.style.backgroundColor = boxColor;
        theBox.style.border = border;
        theBox.style.width = w;
        theBox.style.height = h;
        theBox.style.padding = "1vh";
        theBox.style.fontFamily = "sans-serif";
        theBox.style.display = "flex";
        theBox.style.flexDirection = "column";
        theBox.style.justifyContent = "space-around";
        theBox.style.alignItems = "center";

        // affect id
        theBox.id = "theBox";

        // create title
        let h1 = document.createElement('h1');
        h1.innerHTML = (title).toString();
        theBox.appendChild(h1);

        // create inner box id='innerBox'
        let div = document.createElement('div');
        div.id = "innerBox";
        theBox.appendChild(div);

        // append in container
        let container = document.getElementById('container');
        container.appendChild(theBox);
    }

    /**
     * create button id=btnFrameId to remove modal window
     * @param btnText
     * @param textSize
     */
    this.closeBtn = function (btnText, textSize){
        // create button
        let btn = document.createElement('button');
        btn.type = "submit";
        btn.style.fontSize = textSize;
        btn.style.padding = ".5rem 1rem";
        btn.innerHTML = btnText;
        btn.id = "btnFrameId";
        btn.name = "inputInBox";

        // get element to close
        let container = document.getElementById('container');
        btn.addEventListener('click', function (){
            container.remove();
        });
        // get target element
        let theBox = document.getElementById('theBox');
        theBox.appendChild(btn);
    }

}
