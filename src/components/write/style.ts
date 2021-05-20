import styled from 'styled-components'
import color from 'resourece/palette'

export const Background=styled.div`
  background-color:white;
  display:flex;
  flex-direction:column;
  align-items:center;

  overflow-x:hidden;
  box-sizing:border-box;
  padding-top:3rem;
  
`;
export const Header=styled.header`
background-color:white;

  width:100vw;
  height:50px;

  display:flex;
  justify-content:left;
  align-items:center;

  box-sizing:border-box;
  padding-left:15px;

  box-shadow:2px 2px 3px 0px rgba(0,0,0,0.5);
`;
export const BtnCointainer=styled.div`
  width:100vw;
  display:flex;
  justify-content:center;
  margin-top:10px;
`;
export const GradientBtn=styled.button`
  font-family:"bold";
  font-size:1.2rem;
  color:white;

  box-shadow:2px 2px 3px 0 rgba(0,0,0,0.8);
  box-sizing:border-box;
  padding:.5rem 2rem;
  outline:none;
  border:none;
  margin: 0rem 1rem .5rem 0rem;
  display:flex;
  justify-content:center;
  align-items:center;
  background: linear-gradient(to right, ${color.aquaBlue}, ${color.blue});

  @media screen and (max-width:1000px){
    font-size:.7rem;
    padding:.3rem 1rem;
  }

  
  &:active{
    transition:transform 0.1s;
    transform:scale(0.95);
  }
`;
export const TagContainer=styled.h1`
  margin-top:30px;
  width:65rem;
  font-size:1.5rem;
  color:black;
    @media screen and (max-width:1000px){
    width:100vw;
    margin-left:20px;
}
`;
export const PaperContainer=styled.div`
  width:1000px;
  background-color:white;
  box-sizing:border-box;
  padding:50px;
  margin-bottom:30px;
  @media screen and (max-width:1000px){
    width:100vw;
}
`;

export const Title=styled.h2`
  font-family:Medium;
  font-size:1rem;
  `;

export const Input=styled.input`
  width:100%;
  height:3rem;
  box-sizing:border-box;
  padding:10px;
  font-size:20px;
  font-family:"Medium";
  margin-bottom:1rem;
  border-radius:10px;
  border:1px solid ${color.aquaBlue};
  z-index:99;
  @media screen and (max-width:1000px){
    font-size:1rem;
    height:3rem;
  }
  
`;

export const BigInput=styled.textarea`
  width:100%;
  height:10rem;
  box-sizing:border-box;
  padding:10px;
  font-size:20px;
  font-family:"Medium";
  margin-bottom:20px;
  border-radius:10px;
  border:1px solid ${color.aquaBlue};
  resize:none;
`;
export const ImageInput=styled.input`
  width:0;
  height:0;
  position: absolute;
  border: none;
  outline: none;
`;

export const ImageLabel=styled.label`
  background: ${color.aquaBlue};
  font-size:.8rem;
  font-family:"Medium";
  color:white;

  box-sizing:border-box;
  padding:5px 20px;
`;

export const ImageContainer=styled.div`
  width:100%;
  min-height:1rem;
  max-height:18rem;
  overflow:hidden;
  overflow-x:scroll;
  display:flex;
  margin-bottom:5rem;

  

  img{
    width:15rem;
    height:15rem;
    object-fit:cover;
    margin:1rem;
    @media screen and (max-width:1000px){
      width:7rem;
      height:7rem;
    }
  }
  @media screen and (max-width:1000px){
    width:100vw;
  }
`;

export const ButtonContainer=styled.div`
  display:flex;
  justify-content:center;

`;

export const MapContainer=styled.div`
width:100%;
height:20rem;
display:flex;
justify-content:center;
align-items:center;
z-index:9;
  @media screen and (max-width:800px){
    height:300px;
    }
`;

export const DateInput=styled(Input)`
  width:40%;
`;