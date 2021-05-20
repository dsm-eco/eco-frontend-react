import React,{useState} from "react";
import * as S from "./style";

type PropType={
    images:{image:string}[],
    width:number
}

const ImageViewer:React.FC<PropType>=({images,width})=>{
    const [curImage,setCurImage]=useState<number>(0);
    const [imageCover,setImageCover]=useState<boolean>(true);

    return <S.Container >
        <S.ImgContainer curImage={curImage}>
            {images.map((e,i)=>
                <S.Image width={width} key={i} src={e.image} imageCover={imageCover}/>)}
        </S.ImgContainer>
        <S.ButtonContainer>
            {images.length>1&&images.map((e,i)=><S.CircleBtn key={i} myNum={i} curImage={curImage} onClick={()=>{setCurImage(i)}}></S.CircleBtn>)}
        </S.ButtonContainer>
        <S.CoverBtn onClick={()=>setImageCover(!imageCover)}>{imageCover?"원본보기":"크게보기"}</S.CoverBtn>
    </S.Container>
     
}

export default ImageViewer;