import { userInfo } from "../data/mainPageData.js";



const generatePage = () => {
  const sectionElement = document.querySelector('.main-div');
  console.log(sectionElement);
  const html = `<div class="social-container-outer">
            <img src="images/icon/icon-arrow-right-white.png" class="more-img">
            <div class="social-container-insider">
                <ul>
                    <li><img src="images/icon/email.png">wenbochen1997@gmail.com</li>
                    <li><img src="images/icon/github.svg"><a href="${userInfo.gitLink}">github</a></li>
                    <li><img src="images/icon/linkedin.jpg"><a href="${userInfo.linkedin}">Linkedin</a></li>
                </ul>
            </div>
        </div>
        <div class="left-side-div">
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
            
            <button class="btn-more">LEARN MORE</button>
        </div>`;

  sectionElement.innerHTML = html;

};

generatePage();

document.getElementsByClassName('btn-more')[0].onclick = ()=>{
  window.location.href='Project.html';
}


const socialContainer = document.querySelector('.social-container-outer');
const socialBox = document.querySelector('.social-container-insider');

socialContainer.addEventListener('mouseenter', () => {
    socialBox.style.display = 'block';
});

socialContainer.addEventListener('mouseleave', () => {
    // Delay hiding to allow for moving to the box
    setTimeout(() => {
        if (!socialContainer.matches(':hover')) {
            socialBox.style.display = 'none';
        }
    }, 100); // Adjust delay as needed
});
