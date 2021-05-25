import color from 'resourece/palette';
import styled from "styled-components"

export const Background = styled.div`
    overflow-y:scroll;
    height:150vh;
    background-color:${color.grey};
    display:flex;
    flex-direction:column;
    align-items:center;

    @media screen and (min-width:800px){
        box-sizing:border-box;
        padding-left:13rem;
    }
`;

export const UserInfo=styled.div`
    width:40rem;
    box-sizing:border-box;
    padding:1rem;
    background: linear-gradient(to right, ${color.aquaBlue}, ${color.blue});
    margin-top:5rem;
    box-shadow:2px 2px 5px 0 rgba(0,0,0,0.5);
    border-radius:10px;
    font-family:"Medium";
    display:flex;
    justify-content:center;
    align-items:center;
    color:white;

    @media screen and (max-width:800px){
        margin-top:4rem;
        width: 80vw;
        border-radius:10px;
        margin-bottom: 0;
    }
`;


export const ButtonContainer=styled.div`
  width:40rem;
  height:4rem;
  box-sizing:border-box;
  padding:1rem;

  font-family:"Medium";
  display:flex;
    
  color:white;

    @media screen and (max-width:800px){
        width: 80vw;
        border-radius:10px;
        margin-bottom: 0;
    }
    button{
        background: white;
        box-shadow:2px 2px 5px 0 rgba(0,0,0,0.5);
        border-radius:10px;
        flex-basis: 0;
        flex-grow: 1;
        margin:0 .5rem;
        outline: none;
        border: none;
        transition: transform .3s;
        font-family: "Medium";
        &:active{
          transform:scale(1.1)
        }
    }
`;

export const ScrollContainer=styled.div`
  box-sizing:border-box;
  margin-top:1rem;
  overflow-y:scroll;
  
  ::-webkit-scrollbar{
    display:none;
  }
    @media screen and (max-width:800px){
    width:100vw;
    
  }
`;

export const TextButton=styled.button`
outline:none;
border:none;
background-color:transparent;
font-weight:500;
position:fixed;
bottom:5px;
right:5px;
font-size: 1rem;
font-family:"Medium";
 -webkit-text-fill-color: black;
  -webkit-text-stroke: .5px white;
`;

export const Overlay=styled.div`
position:fixed;
top:0;
bottom:0;
left:0;
right:0;
background-color:rgba(0,0,0,0.5);

display:flex;
justify-content:center;
align-items:center;
z-index:99;
`;

export const Modal=styled.div`
width:20rem;
height:8rem;
background-color:white;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
font-family:"Medium";
`;
export const ModalButton=styled.button`
width:8rem;
height:2rem;
margin:0.3rem;
margin-top:1rem;
border-radius:5px;
background-color: transparent;
outline: none;
border: none;
`