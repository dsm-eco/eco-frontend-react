import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil';
import { alertState } from 'recoil/alert';
import { writeState } from 'recoil/write';
import ImageInput from '../imageInput'
import * as S from '../style'

const EventForm:React.FC=()=>{
    const [fileData, setFileData]=useState<File[]>([]);
    const [content,setContent]=useState<string>("");
    const [startDate,setStartDate]=useState<string>("");
    const [endDate,setEndDate]=useState<string>("");
    const sendData=useSetRecoilState(writeState);
    const setAlert=useSetRecoilState(alertState);


    const pushFileData=(file:File[])=>{
        setFileData([...fileData,...file]);
    }

    const onSubmit=(e:any)=>{
        e.preventDefault();
        const formdata= new FormData();
        if(!content){
          setAlert({type:"error",text:"내용을 입력해주세요."});
          return;
        }
        if(!startDate||!endDate){
          setAlert({type:"error",text:"일정을 입력해주세요."});
          return;
        }
        formdata.append("content",content);
        formdata.append("event_date",`${startDate} ~ ${endDate}`);
        for(let img of fileData){
          formdata.append("image",img);
        }
        sendData({
          type:"event",
          data:formdata
        });
    }

      return <form>
      <S.Title>이미지 선택</S.Title>
      <ImageInput pushFileData={pushFileData}/>
      <S.Title>이벤트 일정</S.Title>
      <S.DateInput type="date" value={startDate} onChange={e=>setStartDate(e.target.value)}/>
      {" ~ "}
      <S.DateInput type="date" value={endDate} onChange={e=>setEndDate(e.target.value)}/>
      <S.BigInput placeholder="자유 입력" value={content} onChange={(e)=>setContent(e.target.value)}/>
      <S.ButtonContainer>
        <S.GradientBtn type="submit" onClick={onSubmit}>작성 완료</S.GradientBtn>
      </S.ButtonContainer>
    </form>;
};

export default EventForm;