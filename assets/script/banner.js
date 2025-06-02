const banner = document.getElementById("banner");

function getRandomInt(x) {
  return Math.floor(Math.random() * x);
}

banner.style.backgroundImage = `url('assets/image/banners/banner${getRandomInt(3)+1}.webp')`
