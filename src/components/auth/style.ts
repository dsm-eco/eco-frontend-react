import styled from 'styled-components';

export const AuthBox=styled.div`
width:40vw;
height:100vh;
border-radius:0 10px 10px 0px;
background: linear-gradient(90deg, rgba(133,216,206,1) 0%, rgba(26,141,197,1) 100%);

@media screen and (max-width:1000px){
    border-radius:0px;
    width:100vw;
    height:100vh;
}
`
export const Container=styled.div`
width:100vw;
height:100vh;
display:flex;
overflow:hidden;
`

export const FlexBox=styled.form`
  height:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  @media screen and (min-width:1000px){
    padding:0 1rem;
  }

` ;

export const Logo=styled.h1`
  font-family:"Bold";
  font-size:2rem;
  color:white;
  
`;


export const Input=styled.input`
margin:.3rem;
  height:45px;
  width:90%;
  border-radius:10px;
  font-family:"Light";
  font-size:18px;
  outline:none;
  border:none;

  box-sizing:border-box;
  padding:2px 20px;

`
export const Link=styled.button`
  font-family:"Light";
  color:white;
  box-sizing:border-box;
  padding:3px;
  cursor: pointer;

  outline:none;
  border:none;
  background-color:rgba(0,0,0,0);

  border-bottom:.5px solid white;
  margin-top:30px;
`;
export const Button=styled.button`
  height:45px;
  width:90%;
  border-radius:10px;
  font-size:20px;
  outline:none;
  border:none;
  background-color:rgba(0,0,0,0);
  border:2px solid white;
  color:white;
  font-family:"Bold";
  display:flex;
  justify-content:center;
  align-items:center;
  margin-top:1rem;
  &:active{
    box-shadow:inset 1px 1px 2px 0 rgba(0,0,0,0.5)
  }
 
`;

export const BackgroundImg=styled.img`
  width:60vw;
  margin-right:20px;

`;
export const Header=styled.header`
  width:100vw;
  height:300px;
  display:flex;
  justify-content:right;
  svg{
    position: absolute;
    top: 10px; 
    right: 10px;
  }
  @media screen and (max-width:1000px){
    display:none;
  }
 
`; 

export const BackgroundContainer=styled.div`
width:70vw;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
@media screen and (max-width:1000px){
    display:none;
  }
`;
