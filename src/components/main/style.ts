import styled,{keyframes} from 'styled-components';
import color from 'resourece/palette';

const outLeft=keyframes`
{
  0% {
    transform: translate3d(-100%, 0, 0)
  }
  100% {
    transform: none
  }
}` 
const outRight=keyframes`
{
  0% {
    transform: none
  }
  100% {
    transform: translate3d(-100%, 0, 0)
  }
}` 

const BackgroundMove=keyframes`
 {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
`


export const Background=styled.div`
background-color:${color.grey};
position:absolute;
top:0;
bottom:0;
left:0;
right:0;
z-index:-11;
`

export const Overlay=styled.div`
background-color:rgba(0,0,0,0.8);
position:absolute;
top:0;
bottom:0;
left:0;
right:0;
z-index:80;
  @media screen and (min-width:800px){
    display:none;
  }
`

export const Body=styled.main`
    display:flex;
    justify-content:center;
`;

export const SideBar=styled.div<{isOpen:boolean}>`
    width:13rem;
    height:100vh;
    position:fixed;
    margin:0;
    margin-top:3rem;
    display:flex;
    flex-direction:column;

    background-color:white;
    list-style:none;
    /* box-sizing:border-box; */
    padding-top:30px;

    @media screen and (max-width:800px){
        animation: ${({isOpen})=>isOpen?outLeft:outRight} 1s forwards;
   
    }
    z-index:10;
`;
export const SideBarItem=styled.button`
    width:100%;
    height:3.5rem;
    box-sizing:border-box;
    padding:1rem;
    background-color:white;
    color:black;
    border:none;
    font-size:20px;
    font-family:"Medium";
    display: flex;
    align-items:center;
    cursor: pointer;
    &:active,:hover{
      background-color:${color.grey}
    }

`;


const inLeft=keyframes`
  {
    0% {
     transform: translate3d(13rem, 0, 0)
    }
    100% {
      transform: none
    }
  }`;
const inRight=keyframes`
  {
    0% {
      transform: none
    }
    100% {
      transform: translate3d(13rem, 0, 0)
    }
  }`;

export const SideBarBtn=styled.button<{isOpen:boolean}>`
    width:30px;
    height:60px;
    border-radius:0 100px 100px 0px;
    position:fixed;
    display:none;
    background-color:white;
    
    outline:none;
    border:none;
    margin-top:10rem;
    z-index:10;

    box-shadow:2px 2px 2px 0 rgba(0,0,0,0.2);

    @media screen and (max-width:800px){
        display:flex;
        justify-content:center;
        align-items:center;
        animation: ${({isOpen})=>isOpen?inRight:inLeft} 1s forwards;
    }
`;

export const PostContainer=styled.div`
  width: 100vw;
  background-color: ${color.grey};
  overflow-y:scroll;
  display:flex;
  justify-content:center;
  box-sizing:border-box;
  padding-left:13rem;
  @media screen and (max-width:800px){
    padding-left:0;
    ::-webkit-scrollbar{
    display:none;
  }
  }

`;

export const ScrollContainer=styled.div`
  box-sizing:border-box;
  margin-top:5rem;
  overflow-y:scroll;
  
  ::-webkit-scrollbar{
    display:none;
  }
    @media screen and (max-width:800px){
    width:100vw;
  }
`;


export const SkeletonItem=styled.div`
    width:40rem;
    height:30rem;

    border-radius:5px;

    background-color:white;
    
    box-sizing:border-box;

    margin:2rem 0;
    padding-top:.1rem;
    position:relative;

    @media screen and (max-width:800px){
        width: 100%;
        border-radius:0px;
        margin-bottom: 0;
    }
    div{
      border-radius:20px;
      background-color:${color.grey};
      background: linear-gradient(271deg, #F2F2F2, #e7e5e4, #EAEAEA, #f0f0f0, #e0e0e0, #ededed, #F2F2F2, #e7e5e4, #EAEAEA);
      background-size: 200% 200%;

      animation: ${BackgroundMove} 15s cubic-bezier(0,0,0,0) infinite;
    }
    .title{
      width:15rem;
      height:1.5rem;
      margin:.5rem;
    }
    .img{
      width:100%;
      height:20rem;
      border-radius:0px;
    }
    .content{
      width:80%;
      height:2rem;
      margin:1rem;
    }
`;

