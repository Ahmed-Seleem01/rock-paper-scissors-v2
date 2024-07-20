// h1 img img
import descriptionImgLink from "./image-rules.svg";
import "./modal.css";

const smallModal = () => ( ` 
    <div class="modal-container hidden">
      <h1 class= "modal-heading">RULES</h1>
      <img class="modal-img" src=${descriptionImgLink}  alt="rules of the game scissors beats paper, paper beats rock and rock beats scissors"/>
      <button class= "close-btn"></button>
    </div>
    `)


    const largeModal = () => ( ` 
      <div class="modal-container hidden">
        <div class="first-row">
          <h1 class= "modal-heading">RULES</h1>
          <button class= "close-btn"></button>
        </div>
        <img class="modal-img" src=${descriptionImgLink}  alt="rules of the game scissors beats paper, paper beats rock and rock beats scissors"/>
      </div>
    `)
export  {smallModal, largeModal};
