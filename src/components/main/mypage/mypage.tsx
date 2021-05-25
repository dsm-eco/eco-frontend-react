import React, { useState ,useEffect, useCallback} from "react";
import PostItem from "components/main/postItem";
import {StoreType,EventType}from "components/main/timeline";
import * as S from "./style";
import { postlistType } from 'recoil/post';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { getRequest } from 'api';
import {useHistory}from "react-router"
import jwt from "jwt-decode"
import { alertState } from 'recoil/alert';
const Mypage:React.FC=()=>{
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [type,setPostType]=useRecoilState(postlistType);
    const [postList,setPostList]=useState([]);
    const [modalVisible,setModalVisible]=useState<boolean>(false);
    const setAlert=useSetRecoilState(alertState);
    const history=useHistory();

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    const withdrawal=async()=>{
        try{
            const userId:any=jwt(localStorage.getItem("access")||"");
            if(userId)await getRequest().get(`/user/${userId.user_id}/`);

            history.push("/auth");
            localStorage.removeItem("access");
            localStorage.removeItem("refresh");
        }catch{
            setAlert({type:"error",text:"회원 탈퇴 실패"})
        }
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
        <S.TextButton onClick={()=>setModalVisible(true)}>계정 탈퇴하기</S.TextButton>
        {modalVisible&&
            <S.Overlay onClick={()=>setModalVisible(false)}>
                <S.Modal>
                    정말 탈퇴하시겠습니까?
                    <div>
                        <S.ModalButton onClick={withdrawal}>예</S.ModalButton>
                        <S.ModalButton><strong>아니오</strong></S.ModalButton>
                    </div>
                </S.Modal>
            </S.Overlay>}

    </S.Background >
}

export default Mypage;