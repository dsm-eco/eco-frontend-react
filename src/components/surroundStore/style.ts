import styled from "styled-components";
import color from "resourece/palette";
export const Container=styled.div`
    width:100vw;
    display:flex;
    @media screen and (max-width:800px){
        flex-direction:column-reverse;
    }

    #map{
        width:75%;
        height:100vh;
        box-sizing:border-box;
        padding-top:3rem;
        background-color:black;
        @media screen and (max-width:800px){
            width:100vw;
            height:100vw;
        }
    }
`;

export const SideInfo=styled.div`
    width:25rem;
    min-height:100vh;
    box-shadow:1px 1px 2px 0 rgba(0,0,0,0.2);
    box-sizing:border-box;
    padding-top:3rem;
    display:flex;
    flex-direction:column;
    @media screen and (max-width:800px){
      width:100vw;
      height:100vw;
      padding-top:1rem;
    }
    overflow-y:scroll;
    
`;

export const Info=styled.div`
  width:100%;
  height:15rem;
  word-break:break-all;
  box-sizing:border-box;
  padding:1rem;
  overflow-y:scroll;
`

export const CurPos=styled.div`
  height:5rem;
  margin:1rem;
  font-family:"Medium";
  background: linear-gradient(to right, ${color.aquaBlue}, ${color.blue});
  font-size:1.2rem;
  display:flex;
  flex-direction:column;
  justify-content:center;
  color:white;
  box-sizing:border-box;
  padding-left:1rem;
  box-shadow:2px 2px 3px 0 rgba(0,0,0,0.2);
  border-radius:5px;
  strong{
    font-family:"Bold";
    font-size:1.5rem;
  }
  p{
    width:auto;
    margin:0;
  }
  @media screen and (max-width:800px){
    width:auto;
    margin:0rem 1rem 1rem 1rem;

  }
`;

export const Title=styled.h1`
  margin:0;
  font-family:"Bold";
`;
export const Address=styled.h3`
  margin:0;
  font-family:"Medium";
`;

export const Content=styled.p`
  margin:0;
  font-family:"Light";
`