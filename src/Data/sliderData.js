import photo_1 from "../images/slider_image_1.jpg";
import photo_2 from "../images/slider_image_2.jpg";
import photo_3 from "../images/slider_image_3.jpg";
import photo_4 from "../images/slider_image_4.jpg";
import photo_5 from "../images/slider_image_5.jpg";

const sliderData = [
  {
    title: "Violino",
    text: "Poi coricarmi bisognava osservava disperata pei congiunto ero uno. Apriro divano pareva dov eri.",
    slider_image: photo_1,
  },
  {
    title: "Title text",
    text: "Poi coricarmi bisognava osservava disperata pei congiunto ero uno. Apriro divano pareva dov eri.",
    slider_image: photo_2,
  },
  {
    title: "Title text",
    text: "Poi coricarmi bisognava osservava disperata pei congiunto ero uno. Apriro divano pareva dov eri.",
    slider_image: photo_3,
  },
  {
    title: "Title text",
    text: "Poi coricarmi bisognava osservava disperata pei congiunto ero uno. Apriro divano pareva dov eri.",
    slider_image: photo_4,
  },
  {
    title: "Title text",
    text: "Poi coricarmi bisognava osservava disperata pei congiunto ero uno. Apriro divano pareva dov eri. ",
    slider_image: photo_5,
  },
];

export default sliderData;

// 1.   npm install gh-pages --save-dev
// 2.   создайте репозиторий на gh
// 3.   git init
// 4.   git commit -m "first commit"
// 5.   git add .
// 6.   git status
// 7.   git commit -m "first commit"
// 8.   git branch -M "main"
// 9.   git remote add origin "ссылка"
// 10.  git push -u origin "main"
//      выводится:
//      branch "main" set up to track "origin/main"
// 11.  в packcage.json перед "name" напишите:
//      "homepage": "https://aibekbbic.github.io/имя репозитория"
// 12.  в packcage.json, внутри "scripts", после "start" напишите:
//      "predeploy": "npm run build",
//      "deploy": "gh-pages -d build",
// 13.  npm run deploy
//      выводятся:
//      the build folder is ready to be deployed
//      Published
//      перезагружайте стр. gh с репозиторием
// 11.  переходите settings  -> pages
//      перезагружайте стр. gh с репозиторием
//      выводится ссылка на репозиторий
