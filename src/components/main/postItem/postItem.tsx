import React, { useCallback, useMemo, useState } from 'react';
import ImageViewer from "components/imageViewer";
import {  StoreType,EventType } from '../timeline';
import * as S from "./style";
import StorePost from 'components/main/storePost';
import EventPost from "components/main/eventPost"
import { useRecoilState, useSetRecoilState } from 'recoil';
import { getRequest } from 'api';
import { alertState } from 'recoil/alert';
import { reposrtState } from 'recoil/post';
import jwt from "jwt-decode"

type PostType="shop"|"event"

const PostItem:React.FC<{data:StoreType|EventType,type:PostType,loadPostList:(type:PostType)=>void}>=({data,type,loadPostList})=>{
    const [modalVisible,setModalVisible]=useState<boolean>(false);
    const setAlert=useSetRecoilState(alertState);
    const [postHeart,setPostHeart]=useState<boolean>(data.heart);
    const [heartCnt,setHeartCnt]=useState<number>(data.heart_cnt);
    const [report,setReportPost]=useRecoilState(reposrtState);
    const isMyPost=useMemo(() => {
        const userData:any=jwt(localStorage.getItem("access")||"");
        return userData.user_id===data.user_id
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const haertAction=useCallback(async() => {
        try{
            const res=await getRequest().get(`${type}/${data.id}/heart`);
            console.log(res.data)
            setPostHeart(res.data.heart==="true");
            setHeartCnt(res.data.heart_cnt);
        }catch(err){
            setAlert({type:"error",text:"게시물에 좋아요 누르는것을 실패하였습니다."});
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const deletePost=useCallback(async() => {
        try{
            await getRequest().delete(`${type}/${data.id}/`);
            setAlert({type:"success",text:"게시물 삭제 성공"});
            loadPostList(type);
        }catch(err){
            if(err.response.status===400) setAlert({type:"error",text:"자신의 게시물만 삭제할 수 있습니다."});
            else setAlert({type:"error",text:"게시물 삭제 실패"});
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const repoerPost=useCallback(async() => {
        if(report.id===data.id&&report.reported){
            try{
                await getRequest().get(`${type}/${data.id}/report`);
                setAlert({type:"success",text:"게시물 신고 완료"});
                setReportPost({id:data.id,reported:true});
                setTimeout(()=>{setReportPost({...report,reported:false})},4000000);
            }catch(err){
                setAlert({type:"error",text:"게시물 신고 실패"});
            }
        }
        else{
            setAlert({type:"error",text:"신고 요청이 너무 잦습니다."});
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return <S.Container>
            <S.Header>
            <div>{data.nickname}</div>
            <i className="fas fa-ellipsis-h" onClick={()=>setModalVisible(true)}></i>
            </S.Header>
            {(data.images&&data.images.length>0)&& <ImageViewer images={data.images} width={40}/>}
            {type==="shop"?<StorePost data={data}/>:<EventPost data={data}/>}
            <S.HeartContainer onClick={haertAction}>
                <p>{heartCnt}</p>
                {postHeart?
                    <i style={{color:"red"}} className="fas fa-heart"></i>:
                    <i className="far fa-heart"></i>}
                </S.HeartContainer>
            {modalVisible&&
            <S.BackgroundOveray onClick={()=>setModalVisible(false)}>
                <S.ModalContainer>
                    {isMyPost?<S.ListBtn style={{color:"red"}} onClick={deletePost}>삭제하기</S.ListBtn>:<S.ListBtn onClick={repoerPost}>신고하기</S.ListBtn>}                    
                </S.ModalContainer>
            </S.BackgroundOveray>  
            }
    </S.Container>
};


export default PostItem;