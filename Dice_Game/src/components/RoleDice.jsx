
import styled from "styled-components";

const RoleDice=(
  {roleDice,
    currentDice
  }
)=>{


    return (
      <DiceContainer>
        <div className="dice"
          onClick={roleDice}
        >
            <img src={`/images/dice/dice_${currentDice}.png`} alt="Dice-1" />
        </div>
        <p>Click on Dice to roll</p>
      </DiceContainer>
    )
}

export default RoleDice;

const DiceContainer=styled.div`
     display:flex;
     align-items:center;
     flex-direction:column;
     margin-top:48px;


.dice{
    cursor:pointer;

}

p{
    font-size:24px;
}


`;