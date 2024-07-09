import { userInfo } from "../data/mainPageData.js";



const generatePage = () => {
  const sectionElement = document.querySelector('.main-div');
  console.log(sectionElement);
  const html = `<div class="left-side-div">
            <img class="user-img-profile" src="images/${userInfo.img}">
            <div>
                <p class="intro-p">${userInfo.line1}</p>
                <p class="intro-p">${userInfo.line2}</p>
                <p class="intro-p">${userInfo.name}</p>
            </div>
        </div>
        <div class="right-side-div">
            <p class="content-title">SOFTWARE ENGINEER</p>
            <P class="content">${userInfo.skill}</P>
            <div class="link-div">
                <img class="link-img" src="images/${userInfo.emailIcon}">
                <p>${userInfo.email}</p>
            </div>
            <div class="link-div">
                <img class="link-img" src="images/${userInfo.gitIcon}">
                <a href="${userInfo.gitLink}">github</a>
            </div>
            <div class="link-div">
                <img class="link-img" src="images/${userInfo.linkedinIcon}">
                <a href="${userInfo.linkedin}">Linkedin</a>
            </div>
            <button class="btn-more">LEARN MORE</button>
        </div>`;

  sectionElement.innerHTML = html;

};

generatePage();

document.getElementsByClassName('btn-more')[0].onclick = ()=>{
  window.location.href='Project.html';
}
