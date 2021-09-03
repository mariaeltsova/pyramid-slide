




/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */


function drawPyramid (height, simb) {
const pyramideBase = document.getElementById("pyramid");
 for (let i = 0; i < height; i++) {
            let numBricks = 2 + i;
            let numBlanks = height - numBricks + 1;
                  let row = "";


                  for (let j = 0; j < numBlanks; j++) 
                  row += "\u00A0\u00A0";
                  for (let j = 0; j < numBricks; j++) 
                  row += simb;

const para = document.createElement("p");
const node = document.createTextNode(row);
para.style.textAlign = "right";
para.appendChild(node);
pyramideBase.appendChild(para);
           
         }
     
}





const ranger = document.querySelector("#range");
const symbol = document.querySelector("#simbol");

ranger.addEventListener('input', updateSize);
function updateSize() {
      document.getElementById("height").innerHTML = ranger.value;
       document.getElementById("pyramid").innerHTML = "";
      drawPyramid(ranger.value, symbol.value);
}

symbol.addEventListener('change', updateSize);

