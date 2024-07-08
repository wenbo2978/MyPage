import { homeInformation, aboutMe, myProjects } from "../data/data.js";

addEventListener("load", function() {
  setTimeout(hideURLbar, 0);
}, false);

function hideURLbar() {
  window.scrollTo(0, 1);
};


const generateHome = () => {
  const sectionElement = document.querySelector('.js-section-home');
  console.log(sectionElement);
  const html = `<img src="images/${homeInformation.img}" class="admin img-fluid" alt="mobile-image">
  <h4>${homeInformation.name}</h4>
  <h2>${homeInformation.title}</h2>
  <p>${homeInformation.content}</p>`;

  sectionElement.innerHTML = html;

};

const generateAbout = () => {
  const sectionElement = document.querySelector('.js-section-about');
  const html = `<h3 class="head-w3ls">${aboutMe.title}</h3>
      <p>${aboutMe.content} </p>`;
  sectionElement.innerHTML = html;
};

const generateMyWorks = () => {
  const sectionElement = document.querySelector('.js-section-works');
  sectionElement.innerHTML = `<h3 class="head-w3ls">${myProjects.title}</h3>
    <div class="row news-grids text-center js-div-works">
    
    </div>`
  const divElement = document.querySelector('.js-div-works');
  let html = '';
  myProjects.myWork.forEach((work)=>{
    html += `<a href="${work.pageLink}" class="css-a"><img src="images/${work.img}" alt="news image" class="img-fluid css-img-work"></a>`;
  });
  divElement.innerHTML = html;
  
};


generateHome();
generateAbout();
generateMyWorks();