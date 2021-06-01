import React, { useState } from "react";
import ImageInput from '../imageInput'
import * as S from '../style'
import Map from "components/write/Map/map"
import { useSetRecoilState } from 'recoil';
import { writeState } from 'recoil/write';


const StoreForm: React.FC = () => {
  const [title,setTitle]=useState<string>("");
  const [content,setContent]=useState<string>("");
  const [keyword,setKeyword]=useState<string>("");
  const [fileData, setFileData]=useState<File[]>([]);
  const sendData=useSetRecoilState(writeState);

  const keywordHandle=(text:string)=>{
    setKeyword(text);
  }

  
  const pushFileData=(file:File[])=>{
    setFileData([...fileData,...file]);    
  }

  const onSubmit=(e:any)=>{
    e.preventDefault();
    const formdata= new FormData();

    formdata.append("name",title);
    formdata.append("address",keyword);
    if(content)formdata.append("content",content);
    if(fileData){
        for(let img of fileData){
          formdata.append("image",img);
      }
    }
    
    sendData({
      type:"shop",
      data:formdata
    });
  }



  return <form>
    <S.Title>이미지 선택</S.Title>
    <ImageInput pushFileData={pushFileData}/>
    <S.Title>가게 이름</S.Title>
    <S.Input required placeholder="가게 이름" value={title} onChange={e=>{setTitle(e.target.value)}}/>
    <S.Title>가게 주소</S.Title>
    <Map keyword={keyword} keywordHandle={keywordHandle}></Map>
    <S.Title>기타 사항</S.Title>
    <S.BigInput required placeholder="자유 입력" value={content} onChange={(e)=>setContent(e.target.value)}/>
    <S.ButtonContainer>
      <S.GradientBtn type="submit" onClick={onSubmit}>작성 완료</S.GradientBtn>
    </S.ButtonContainer>
  </form>;
};

export default StoreForm;
