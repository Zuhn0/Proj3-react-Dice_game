import styled from 'styled-components'

const StartGame=({toggle})=>{
    return (
      <Container>
        <div>
            <img src="../public/images/dices.png" />
        </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button
        onClick={toggle}>Play Now</Button>
      </div>
      </Container>
    );
};

export default StartGame

const Container=styled.div`
  max-width:1180px;  
  display:flex;
  flex-direction:row;
  margin: 0 auto;
  height:100vh;
  align-items:center;

  .content {
    h1{
      font-size:96px;
      white-space:nowrap;
    }
  }

`;



const Button = styled.button`
color:white;
padding: 10px 18px;
background: #000000;
border-radius: 5px;
min-width:220px;
border:none;
font-size:16px;
cursor:pointer;
transition: 0.4s background ease-in-out;

&:hover{
  background-color:gray;
  border: 1px solid black;
  transition: 0.3s background ease-in-out;
}
`; 