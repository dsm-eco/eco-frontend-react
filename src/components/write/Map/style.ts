import styled from 'styled-components';
import color from 'resourece/palette';
export const MapContainer=styled.div`
width:100%;
height:500px;
display:flex;
justify-content:center;
align-items:center;
  @media screen and (max-width:800px){
    height:300px;
    }
  z-index: -10;
`;

export const Input=styled.input`
  width:100%;
  height:50px;
  box-sizing:border-box;
  padding:10px;
  font-size:20px;
  font-family:"Light";
  margin-bottom:20px;
  border:none;
  border-bottom:2px solid ${color.aquaBlue};
`;
