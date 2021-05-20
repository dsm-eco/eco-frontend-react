import React, { useState, useEffect, useRef, useCallback } from 'react'
import * as S from './style'
import PostItem from "./postItem"
import {  postlistType} from 'recoil/post';
import { useRecoilState, useSetRecoilState} from 'recoil';
import { useHistory } from 'react-router';
import { getRequest } from 'api';
import { alertState } from 'recoil/alert';
import Mypage from 'components/main/mypage';

type ImageType={
    image:string
};
export interface StoreType{
    id:number,
    nickname:string,
    name:string,
    address:string,
    content:string|null,
    heart_cnt:number,
    heart:boolean,
    report:number,
    images:ImageType[]|null,
    user_id:string
};
export interface EventType{
    id: number,
	nickname: string
    content: string,
	event_date: string,
    heart_cnt: number,
    heart: boolean,
    report: number, // 신고 수
    images:ImageType[]|null,
    user_id:string
}

const TimeLine:React.FC=()=>{
    const [isOpen,setIsOpen]=useState<boolean>(false);
    const [type,setPostType]=useRecoilState(postlistType);
    const [postList,setPostList]=useState([]);
    const [listCnt,setListCnt]=useState<number>(5);
    const [isMypage,setIsMypage]=useState(false);
    const scrollContainer=useRef<any>();
    const history=useHistory();
    const setAlert=useSetRecoilState(alertState);
    
    const loadPostList= useCallback(async(type:"event"|"shop")=>{
        setPostType(type);
        setPostList([]);
        try{
            const {data}=await getRequest().get(`/${type}`);
            setPostList(data.reverse());
        }catch{
            setAlert({type:"error",text:"게시물을 불러오지 못하였습니다."})
        }
    },[setAlert, setPostType])


    const handScroll=(e:Event)=>{
        if(!scrollContainer.current||listCnt>=postList.length)return;
        if(Math.round((window.innerHeight+document.documentElement.scrollTop)/100)<Math.round(scrollContainer.current.offsetHeight/100))return;
      
        setListCnt(listCnt+5);
    }

    useEffect(() => {
        // if(!localStorage.getItem("access")){
        //     history.push("/auth");
        //     return;
        // }
        window.addEventListener("scroll",handScroll);
        loadPostList("shop");
        return () =>  window.addEventListener("scroll",handScroll);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getSkelltonItem=()=>{
        if(postList.length!==0&&(postList.slice(0,listCnt).length===postList.length)) return null;
        const itemList=[]
        const cnt=listCnt-postList.length;
        for(let i=0;i<cnt;i++)itemList.push(
        <S.SkeletonItem>
            <div className="title"/>
            <div className="img"/>
            <div className="content"/>
        </S.SkeletonItem>)

        return itemList;
    }

 
    return <S.Background>
            <S.SideBar isOpen={isOpen}>
                <S.SideBarItem onClick={()=>{loadPostList("shop");setIsMypage(false);}}>친환경 가게 소개</S.SideBarItem>
                <S.SideBarItem onClick={()=>{loadPostList("event");setIsMypage(false);}}>친환경 이벤트</S.SideBarItem>
                <S.SideBarItem onClick={()=>history.push("/surround")}>내 주변 가게</S.SideBarItem>
                <S.SideBarItem onClick={()=>history.push("/write")}>글 작성</S.SideBarItem>  
                <S.SideBarItem onClick={()=>setIsMypage(true)}>마이페이지</S.SideBarItem> 
                <S.SideBarItem style={{fontFamily:"Medium",color:"#CC0000",float:"inline-end"}} 
                onClick={()=>{
                    localStorage.removeItem("access");
                    history.push("/auth")
                }}>로그아웃</S.SideBarItem>   

                
            </S.SideBar>
            <S.SideBarBtn 
                onClick={()=>setIsOpen(!isOpen)}
                isOpen={isOpen}
            >
                {isOpen?"◀":"▶"}
            </S.SideBarBtn>
            {isMypage?<Mypage/>:
                <S.Body>
                <S.PostContainer>
                    <S.ScrollContainer ref={scrollContainer}>
                        {postList.slice(0,listCnt).map((e:StoreType|EventType,i:number)=>
                            <PostItem key={i} data={e} type={type} loadPostList={loadPostList}/>
                        )}
                        {getSkelltonItem()}
                                            
                    </S.ScrollContainer>
                </S.PostContainer>                      
            </S.Body>
                }
        
        {isOpen&&<S.Overlay/>}
    </S.Background>
}

export default TimeLine;