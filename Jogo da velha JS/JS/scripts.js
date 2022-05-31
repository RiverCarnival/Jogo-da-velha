let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-conteiner button");
let messageConteiner = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;

let player1 = 0;
let player2 = 0;

for(let i = 0; i<boxes.length; i++)
{
    boxes[i].addEventListener("click", function()
    {
        let el = checkEL(player1, player2);

       
        if(this.childNodes.length == 0)
        {
       
        let cloneEl = el.cloneNode(true);
        
        this.appendChild(cloneEl);


        if(player1 == player2)
        {
            player1++;
        }
        else
        {
            player2++;
        }

        checkWinCondition();

    }
    });
}


///////////////
for(let i = 0; i < buttons.length; i++)
{
    buttons[i].addEventListener("click", function()
    {
        secondPlayer = this.getAttribute("id");

        for(let j = 0; j < buttons.length; j++);
        {
            buttons[j].style.display = 'none';
        }

        setTimeout(function()
        {
            let conteiner = document.querySelector("#container");
            conteiner.classList.remove("hide");
        
        },500);


    });
}


function checkEL(player1, player2)
{
    if(player1 == player2)
    {
        el = x;
    }
    else
    {
        el = o;
    }
   return el;
}

function checkWinCondition()
{
    let b1 = document.getElementById("block-1");
    let b2 = document.getElementById("block-2");
    let b3 = document.getElementById("block-3");
    let b4 = document.getElementById("block-4");
    let b5 = document.getElementById("block-5");
    let b6 = document.getElementById("block-6");
    let b7 = document.getElementById("block-7");
    let b8 = document.getElementById("block-8");
    let b9 = document.getElementById("block-9");

    // horizontall
    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0)
    {
        b1Child = b1.childNodes[0].className;
        b2Child = b2.childNodes[0].className;
        b3Child = b3.childNodes[0].className;
        if(b1Child == "x" && b2Child == "x" && b3Child == "x")
        {
            declararVencedor("x");
        }
        else if(b1Child == "o" && b2Child == "o" && b3Child == "o")
        {
            declararVencedor("o");
        }
    }

    if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0)
    {
        b4Child = b4.childNodes[0].className;
        b5Child = b5.childNodes[0].className;
        b6Child = b6.childNodes[0].className;
        if(b4Child == "x" && b5Child == "x" && b6Child == "x")
        {
            declararVencedor("x");
        }
        else if(b4Child == "o" && b5Child == "o" && b6Child == "o")
        {
            declararVencedor("o");
        }
    }

    if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0)
    {
        b7Child = b7.childNodes[0].className;
        b8Child = b8.childNodes[0].className;
        b9Child = b9.childNodes[0].className;
        if(b7Child == "x" && b8Child == "x" && b9Child == "x")
        {
            declararVencedor("x");
        }
        else if(b7Child == "o" && b8Child == "o" && b9Child == "o")
        {
            declararVencedor("o");
        }
    }
    
    ////////////////////////////////////////////////////////////////////

    if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0)
    {
        b1Child = b1.childNodes[0].className;
        b4Child = b4.childNodes[0].className;
        b7Child = b7.childNodes[0].className;
        if(b1Child == "x" && b4Child == "x" && b7Child == "x")
        {
            declararVencedor("x");
        }
        else if(b1Child == "o" && b4Child == "o" && b7Child == "o")
        {
            declararVencedor("o");
        }
    }
    
    if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0)
    {
        b2Child = b2.childNodes[0].className;
        b5Child = b5.childNodes[0].className;
        b8Child = b8.childNodes[0].className;
        if(b2Child == "x" && b5Child == "x" && b8Child == "x")
        {
            declararVencedor("x");
        }
        else if(b2Child == "o" && b5Child == "o" && b8Child == "o")
        {
            declararVencedor("o");
        }
    }
   
    if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0)
    {
        b3Child = b3.childNodes[0].className;
        b6Child = b6.childNodes[0].className;
        b9Child = b9.childNodes[0].className;
        if(b3Child == "x" && b6Child == "x" && b9Child == "x")
        {
            declararVencedor("x");
        }
        else if(b3Child == "o" && b6Child == "o" && b9Child == "o")
        {
            declararVencedor("o");
        }
    }

    /////////////////

    if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0)
    {
        b1Child = b1.childNodes[0].className;
        b5Child = b5.childNodes[0].className;
        b9Child = b9.childNodes[0].className;
        if(b1Child == "x" && b5Child == "x" && b9Child == "x")
        {
            declararVencedor("x");
        }
        else if(b1Child == "o" && b5Child == "o" && b9Child == "o")
        {
            declararVencedor("o");
        }
    }

    if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0)
    {
        b3Child = b3.childNodes[0].className;
        b5Child = b5.childNodes[0].className;
        b7Child = b7.childNodes[0].className;
        if(b3Child == "x" && b5Child == "x" && b7Child == "x")
        {
            declararVencedor("x");
        }
        else if(b3Child == "o" && b5Child == "o" && b7Child == "o")
        {
            declararVencedor("o");
        }
    }

    /////////////////////////////////

    let counter = 0;

    for(let i =0; i< boxes.length; i++)
    {
       if(boxes[i].childNodes[0] != undefined)
       {
        counter++;
       }
    }

    if (counter == 9)
    {
        declararVencedor("Velha!");
        
    }
}

///////limpar

function declararVencedor(vencedor)
{
    let scoreboardx = document.querySelector("#scoreboard-1");
    let scoreboardx1 = document.querySelector("#scoreboard-2");
    let msg = "";


    if(vencedor == "x")
    {
        scoreboardx.textContent = parseInt(scoreboardx.textContent) + 1;
        msg = "jogador 1 venceu";
    }
    else if(vencedor == "o")
    {
        scoreboardx1.textContent = parseInt(scoreboardx1.textContent) + 1;
        msg = "Jogador 2 venceu";
    }
    else
    {
        msg = "Velha";
    }

    messageText.innerHTML = msg;
    messageConteiner.classList.remove("hide");

////////////////
setTimeout(function(){
    messageConteiner.classList.add("hide");
}, 3000);


///////////
let boxesToRemove = document.querySelectorAll(".box div");

for(let i = 0; i < boxesToRemove.length; i++)
{
    boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
}

}