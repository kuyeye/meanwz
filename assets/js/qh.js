var content = document.getElementById("content");
var image = document.getElementById("image");
var text = document.getElementById("text");


var data = [
    {
        imagePath: "assets/p1.jpg",
        altText: "Image 1",
        textContent: "生如芥子，心藏须弥"
    },
    {
        imagePath: "assets/p2.png",
        altText: "Image 2",
        textContent: "走自己的路，看自己的景"
    },

];


var randomIndex = Math.floor(Math.random() * data.length);
displayData(randomIndex);

image.addEventListener("click", function () {
    var newIndex = randomIndex;
    while (newIndex === randomIndex) {
        newIndex = Math.floor(Math.random() * data.length);
    }
    randomIndex = newIndex;
    displayData(randomIndex);
});

function displayData(index) {
    var currentData = data[index];
    image.src = currentData.imagePath;
    image.alt = currentData.altText;
    text.textContent = currentData.textContent;
}
