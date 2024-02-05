function getRandomNumber(x, y) {
    return Math.floor(Math.random() * (y - x + 1)) + x;
}

// Function to move Button 2 randomly within the visible area
function moveButton() {
    const button2 = document.getElementById("button2");

    const w = 1728;
    const h = 812;

    // const maxX = window.innerWidth - button2.offsetWidth;
    // const maxY = window.innerHeight - button2.offsetHeight;

    const maxX = 270;
    const maxY = 200;

    const randomX = getRandomNumber(-1000, 900);
    const randomY = getRandomNumber(-400, 400);
    // console.log("width: ", window.innerWidth, " height: ", window.innerHeight);
    // console.log("randomx: ", randomX, "    randomy: ", randomY);
    button2.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

function woohoo() {
    document.getElementById("question").innerText = "Daz right.";
    document.getElementById("catImage").src = "wc0.jpg";
    document.getElementById("catImage").width = "400px";
}

// Set up event listener for mouseover
document.getElementById("button2").addEventListener("mouseover", moveButton);
document.getElementById("button1").addEventListener("click", woohoo);
