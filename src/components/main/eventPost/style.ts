import styled from "styled-components";
import color from "resourece/palette"
export const Container=styled.section`
    width:100%;
    box-sizing:border-box;
    padding:1rem;
    display:flex;
    flex-direction:column;
    position:relative;
    z-index:0;
`;

export const Contents=styled.div`
    width:100%;
    max-height:15rem;
    resize:none;
    outline:none;
    border:none;
    font-family:"Medium";
    margin:.5rem 1rem;

     overflow-y:scroll;
    ::-webkit-scrollbar{
        display:none;
    } 

    @media screen and (max-width:800px){
        width:10rem;
        margin-right:0;
        
    }

    overflow-wrap: break-word;
    word-break: break-all;
    word-wrap: break-word;
`;

export const DateText=styled.div`
    width:100%;
    display:flex;
    align-items:center;
    .label{
        margin-right:.5rem;
        background-color:${color.darkGrey};
        color:white;
        font-family:"Light";
        border-radius:5px;
        box-sizing:border-box;
        padding:.3rem;
        font-size:.5rem;
        }
    p{
        margin:0;
        color:${color.darkGrey};
        font-family:"Light";
    }

`