import React, { useEffect, useState } from 'react'
import * as S from './style'
import StoreForm from 'components/write/storeForm';
import EventForm from 'components/write/eventForm';
import { useRecoilState,  useSetRecoilState } from 'recoil';
import { writeSelector } from 'recoil/write';
import { alertState } from 'recoil/alert';
import { useHistory } from 'react-router';

const WriteContainer:React.FC=()=>{
    const setAlert=useSetRecoilState(alertState);
    const [result,setInit]=useRecoilState(writeSelector);
    const [isStoreMod,setIsStoreMod]=useState<boolean>(true);
    const history=useHistory();


    useEffect(() => {
        if(result==="success"){
            setAlert({type:"success",text:"글이 등록되었습니다."});

            setInit("init");
            history.push("/main");
        }
        else if(result==="fail"){
            setAlert({type:"error",text:"글이 등록되지 않았습니다."});
            setInit("init");
        }
    }, [history, result, setAlert, setInit])

    return(
        <S.Background>
            <S.BtnCointainer>
                <S.GradientBtn onClick={()=>setIsStoreMod(true)}>#친환경_가게_소개</S.GradientBtn>
                <S.GradientBtn onClick={()=>setIsStoreMod(false)}>#친환경_이벤트_소개</S.GradientBtn>
            </S.BtnCointainer>
            <S.PaperContainer>
                {isStoreMod?<StoreForm/>:<EventForm/>}
                
            </S.PaperContainer>
        
        </S.Background>
    )
}

export default WriteContainer;