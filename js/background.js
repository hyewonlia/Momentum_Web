const img = Array(6)
  .fill(0)
  .map((unused, i) => `${i + 1}.jpg`);
const chosenImg = img[Math.floor(Math.random() * img.length)];
const $bgImg = document.createElement('img');
$bgImg.src = `img/${chosenImg}`;
$bgImg.classList.add('bgImg');
document.body.append($bgImg);
