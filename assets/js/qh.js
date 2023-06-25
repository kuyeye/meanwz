var content = document.getElementById("content");
var image = document.getElementById("image");
var text = document.getElementById("text");

// 定义图片和文字的组合数组
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
    // 添加更多的图片和文字组合
];

// 初始化页面，随机选择并显示一组图片和文字
var randomIndex = Math.floor(Math.random() * data.length);
displayData(randomIndex);

// 为图片添加点击事件处理程序
image.addEventListener("click", function () {
    // 随机选择并显示另一组图片和文字
    var newIndex = randomIndex;
    while (newIndex === randomIndex) {
        newIndex = Math.floor(Math.random() * data.length);
    }
    randomIndex = newIndex;
    displayData(randomIndex);
});

// 显示指定索引的图片和文字
function displayData(index) {
    var currentData = data[index];
    image.src = currentData.imagePath;
    image.alt = currentData.altText;
    text.textContent = currentData.textContent;
}
