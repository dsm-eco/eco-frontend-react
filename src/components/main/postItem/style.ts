import styled from "styled-components";


export const Container=styled.article`
    width:40rem;

    border:1px solid rgba(0,0,0,0.1);
    border-radius:5px;
    box-shadow:2px 2px 3px 0 rgba(0,0,0,0.3);

    background-color:white;
    
    box-sizing:border-box;

    margin:2rem 0;

    position:relative;
    @media screen and (max-width:800px){
        width: 100%;
        border-radius:0px;
        margin-bottom: 0;
    }
`;
export const Header=styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
    border-bottom:1px solid rgba(0,0,0,0.1);
    box-sizing:border-box;
    padding:.5rem .5rem;
    font-family:"Medium";
    @media screen and (max-width:800px){
        border-radius:0px;
    }
`;


export const BackgroundOveray=styled.div`
  position:fixed;
  top:0;
  bottom:0;
  left:0;
  right:0;
  background-color:rgba(0,0,0,0.5);
  z-index:5;
  display:flex;
  justify-content:center;
  align-items:center;
  box-sizing:border-box;
  margin-left:13rem;
    @media screen and (max-width:800px){
    margin-left:0;
    z-index:99;
  }
`;
export const ModalContainer=styled.li`
  width:10rem;
  height:3rem;
  background-color:white;
  border-radius:5px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-evenly;
`;
export const ListBtn=styled.div`
  font-family:"Medium";
  cursor: pointer;
  width:100%;
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  &:hover,&:active{
    background-color:#00000033
  }

`;
export const HeartContainer=styled.div `
    position:absolute;
    display:flex;
    justify-content:center;
    align-items:flex-start;
    bottom:.5rem;
    right:.5rem;

    font-size:1rem;
    p{
      font-family:"Medium";
      margin:0;
      margin-right:.3rem;
    }
    i{
      width:100%;
      height:100%;
      margin-right:.3rem;
    }
`