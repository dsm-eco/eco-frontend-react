import React, { useState ,useEffect, useCallback} from "react";
import PostItem from "components/main/postItem";
import {StoreType,EventType}from "components/main/timeline";
import * as S from "./style";
import { postlistType } from 'recoil/post';
import { useRecoilState } from 'recoil';
import { getRequest } from 'api';
import jwt from "jwt-decode"
const Mypage:React.FC=()=>{
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [type,setPostType]=useRecoilState(postlistType);
    const [postList,setPostList]=useState([]);
    const [modalVisible,setModalVisible]=useState<boolean>(false);

    const loadPostList=useCallback(async()=>{
        try{
            const {data}=await getRequest().get(`/${type}`);
            setPostList(data.reverse());

        }catch{
           
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    
    useEffect(()=>{
        loadPostList();
        const token=localStorage.getItem("access")||"";
        //console.log(jwt(token))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const onModalClick=()=>{
        setModalVisible(false)
    }

    return <S.Background>
        <S.UserInfo>회원님이 작성한 글</S.UserInfo>
        <S.ButtonContainer>
            <button>가게 소개 게시물</button>
            <button>이벤트 소개 게시물</button>
            
        </S.ButtonContainer>
        <S.ScrollContainer>
            {postList.map((e:StoreType|EventType,i:number)=>
                            <PostItem key={i} data={e} type={type} loadPostList={loadPostList}/>
         )} 
        </S.ScrollContainer>
        <S.TextButton onClick={()=>setModalVisible(true)}>회원탈퇴</S.TextButton>
        {modalVisible&&
            <S.Overlay onClick={onModalClick}>
                <S.Modal>
                    정말 탈퇴하시겠습니까?
                    <div>
                        <S.ModalButton>예</S.ModalButton>
                        <S.ModalButton>아니오</S.ModalButton>
                    </div>
                </S.Modal>
            </S.Overlay>}

    </S.Background >
}

export default Mypage;