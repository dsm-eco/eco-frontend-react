import color from 'resourece/palette';
import styled from "styled-components";


export const Container=styled.div`
    width:100%;
    height:18rem;
    overflow-x:hidden;
    position:relative;
    @media screen and (max-width:800px){
        width:100vw;
        
    }
    
`;
export const ImgContainer=styled.div< { curImage : number } >`
    width:510%;
    height:18rem;
    transition:transform 0.5s;
    transform:${({curImage})=>`translateX(${curImage*-40}rem)`};
    @media screen and (max-width:800px){
        width:500vw;
         transform:${({curImage})=>`translateX(${curImage*-100}vw)`};
    }
    overflow-y:hidden;
  `;
export const Image=styled.img<{imageCover:boolean,width:number}>`
    width:${({width})=>width}rem;
    height:18rem;
    object-fit:${({imageCover})=>imageCover?"cover":"contain"};
    @media screen and (max-width:800px){
        width:100vw;
    }
`;

export const ButtonContainer=styled.div`
    position:absolute;
    bottom:0;
    width:100%;
    height:2rem;
    display:flex;
    justify-content:center;
    align-items:center;
`;
export const CircleBtn=styled.div<{myNum:number, curImage : number } >`
    width:10px;
    height:10px;
    border-radius:100%;
    margin:3px;
    background-color:${({myNum,curImage})=>myNum===curImage?`${color.blue}`:`${color.darkGrey}`};
`;
export const CoverBtn=styled.button`
    position:absolute;
    font-size:1px;
    bottom:3px;
    right:5px;
    font-family:"Light";
    background-color:rgba(0,0,0,0.8);
    color:white;
    outline:none;
    border:none;
`;