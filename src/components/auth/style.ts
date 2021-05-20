import styled from 'styled-components';

export const AuthBox=styled.div`
width:25vw;
height:100vh;
border-radius:0 10px 10px 0px;
background: linear-gradient(90deg, rgba(133,216,206,1) 0%, rgba(26,141,197,1) 100%);

@media screen and (max-width:1200px){
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

export const FlexBox=styled.div`
  height:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;

` ;

export const Logo=styled.h1`
  font-family:"Bold";
  font-size:2rem;
  color:white;
  
`;
export const InputsBox=styled.div`

display:flex;
width:300px;
height:45px;

margin:10px;


@media screen and (max-width:1200px){
    border-radius:0px;
    width:400px;
}
`;

export const Input=styled.input`
  height:100%;
  width:100%;
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
  height:100%;
  width:100%;
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
  @media screen and (max-width:1200px){
    display:none;
  }
 
`; 

export const BackgroundContainer=styled.div`
width:75vw;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
@media screen and (max-width:1200px){
    display:none;
  }
`;
