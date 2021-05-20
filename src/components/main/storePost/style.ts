import styled from "styled-components";

export const Container=styled.section`
    width:100%;
    box-sizing:border-box;
    padding:.5rem;
    display:flex;
    position:relative;
    z-index:0;
`;

export const StoreName=styled.h1`
    width:21rem;
    font-family:"Bold";
    margin:.5rem 1rem;
    @media screen and (max-width:800px){
        width:10rem;
        margin-right:0;
    }
`;
export const Address=styled.h4`
    width:21rem;
    margin:.5rem 1rem;
    @media screen and (max-width:800px){
        width:10rem;
        margin-right:0;
    }
`;
export const Contents=styled.div`
    width:21rem;
    height:15rem;
    resize:none;
    outline:none;
    border:none;
    font-family:"Medium";
    margin:.5rem 1rem;

     overflow-y:scroll;
    ::-webkit-scrollbar{
        display:none;
    } 

    div{
        p{
            margin:.1rem;
        }
    }

    @media screen and (max-width:800px){
        width:10rem;
        margin-right:0;        
        
    }

    overflow-wrap: break-word;
    word-break: break-all;
    word-wrap: break-word;
`;

