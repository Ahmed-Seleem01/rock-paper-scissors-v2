import createButton, { createPlaceHolder } from "../../general";
import rockImg from "../../../images/icon-rock.svg";
import paperImg from "../../../images/icon-paper.svg";
import scissorsImg from "../../../images/icon-scissors.svg";
import gradient from "../../../images/gradient.svg"

import "../../../css/item.css";

const createSecondStageUI = (playerChoice, computerChoice)=>{
    
    
    const getChosenImageSrc = (choice)=>{
        
    let itemImage = "";

    if(choice === "paper"){
        itemImage = paperImg;
    }else if(choice === "rock"){
        itemImage = rockImg;
    }else{
        itemImage = scissorsImg;
    }

    return itemImage;
}


    const playerImageSrc = getChosenImageSrc(playerChoice);
    const computerImageSrc = getChosenImageSrc(computerChoice);

    const playerItemButton = createButton(playerChoice, playerImageSrc, `${playerChoice}-btn`)
    const computerItemButton = createButton(computerChoice, computerImageSrc, `${computerChoice}-btn`)

    const placeHolder = createPlaceHolder();

    return `
        <div class="stage-two">
            <div class = stage-two-container>
                <div class="stage-two-left">
                    <div class="button-container">
                        ${playerItemButton} 
                        <svg class="gradient-img" width="400" height="400">
                            <circle cx="200" cy="200" r="140" fill="#fff"/> 
                            <circle cx="200" cy="200"  r="110" fill="#fff" /> 
                            <circle cx="200" cy="200" r="80" fill="#fff" /> 
                            />
                        </svg>
                    </div>
                    <p>YOU PICKED</p>
                </div>

                <div class="stage-two-right">
                    <div class="button-container">
                        ${computerItemButton}
                    </div>
                    <p>THE HOUSE PICKED</p>
                </div>
                
            </div>
        </div>
    `
}


export default createSecondStageUI;