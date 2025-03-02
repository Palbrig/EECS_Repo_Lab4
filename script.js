function updateStyle() {
    let red = document.getElementById("red").value;
    let green = document.getElementById("green").value;
    let blue = document.getElementById("blue").value;
    let borderWidth = document.getElementById("border-width").value;

    let paragraph = document.getElementById("styled-text");

    paragraph.style.color = `rgb(${red}, ${green}, ${blue})`;
    paragraph.style.borderColor = `rgb(${red}, ${green}, ${blue})`;
    paragraph.style.borderWidth = `${borderWidth}px`;
}
