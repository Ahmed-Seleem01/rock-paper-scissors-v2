import createButton from "../../general";
import rockImg from "../../../images/icon-rock.svg";
import paperImg from "../../../images/icon-paper.svg";
import scissorsImg from "../../../images/icon-scissors.svg";

import "../../../css/item.css";

const createFirstStageUI = ()=>{

    const paperButton = createButton("paper", paperImg, "paper-btn")
    const scissorsButton = createButton("scissors", scissorsImg, "scissors-btn");
    const rockButton = createButton("rock", rockImg, "rock-btn");


   return `
        <div class="stage-one">
            <div class = "buttons">
                ${paperButton} 
                ${scissorsButton} 
                ${rockButton}
            </div>
        </div>
    `
}


export default createFirstStageUI