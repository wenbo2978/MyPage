import { webProjects } from "../data/data.js";

const loadWebProjects = ()=> {
  let myHtml = "";
  const divElement = document.querySelector('.card-div');
  webProjects.forEach((webProject) => {
    myHtml += `<div class="card">
                <a href="${webProject.pageLink}">
                  <img
                    class="card-image"
                    src="images/${webProject.img}"
                    alt="profile picture"></img>
                </a>
                
                <h4 class="card-name">${webProject.name}</h4>
              </div>`
  });
  divElement.innerHTML = myHtml;
}


loadWebProjects();