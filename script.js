let playing = false;
let step = 1;

// ❤️ Love Letter
const fullLetter = `Dear Sakina,

If you're reading this...

it means you trusted my evil cat assistant. 🐱❤️

I wanted to make something instead of sending js another message.

Every line here was written with you in mind.

evrytime you dont see my msges i ovethink yeah ik its my bad habitt.evry mistake i make, u make me realise it nd correct me

this might be frm bleach but this is exactly my feelings about you

If I were allowed five different lives… I'd be born in five different towns… eat five different foods… have five different jobs… and… fall in love with the same person… five times.
leave me and get eaten alive by my evil larry
Thank you for being mine.

🤍

- Sid`;

function nextStep(){

    if(step === 1){

        document.getElementById("cat").src = "images/cat2.gif";

        document.getElementById("title").innerHTML = "Yay! 🐱";

        document.getElementById("message").innerHTML =
        `Hehe!! 🐱<br><br>
        Before I show you the surprise...<br><br>
        Sid told me to play this.

I don't know his music taste...

but he looks happy when this plays.`;

        document.getElementById("btn").innerHTML = "🎵 Play Our Song";

        document.getElementById("btn").onclick = playSong;

        step++;
    }

}

function playSong(){

    const music = document.getElementById("bgMusic");

    music.play();

    playing = true;

    document.getElementById("message").innerHTML =
    `Perfect. 🤍<br><br>
    Now close your eyes for one second...<br><br>
    Then press Continue.`;

    document.getElementById("btn").innerHTML = "Continue ➜";

    document.getElementById("btn").onclick = function(){

        document.getElementById("envelopeScreen").style.display="flex";
    };

}

function closeLetter(){

    document.getElementById("letter").style.display = "none";

}

function typeLetter(){

    const text = document.getElementById("letterText");

    text.innerHTML = "";

    let i = 0;

    const timer = setInterval(() => {

        text.innerHTML += fullLetter.charAt(i);

        i++;

        if(i >= fullLetter.length){

            clearInterval(timer);

        }

    },35);

}

function createHearts(){

    for(let i=0;i<25;i++){

        setTimeout(()=>{

            const heart=document.createElement("div");

            heart.className="heart";

            heart.innerHTML="🤍";

            heart.style.left=Math.random()*100+"vw";

            heart.style.fontSize=(20+Math.random()*25)+"px";

            document.body.appendChild(heart);

            setTimeout(()=>{

                heart.remove();

            },6000);

        },i*200);

    }

}

// Floating music button
function toggleMusic(){

    const music=document.getElementById("bgMusic");

    const btn=document.getElementById("musicBtn");

    if(!playing){

        music.play();

        btn.innerHTML="⏸️";

        playing=true;

    }else{

        music.pause();

        btn.innerHTML="🎵";

        playing=false;

    }

}function openEnvelope(){

    document.getElementById("envelopeScreen").style.display="none";

    document.getElementById("letter").style.display="flex";

    typeLetter();

    createHearts();

}