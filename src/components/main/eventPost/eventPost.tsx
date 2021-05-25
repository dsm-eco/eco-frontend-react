import React from "react";
import * as S from "./style";
import { EventType } from "../timeline";


const EventPost:React.FC<{data:EventType|any}>=({data})=>{
    const {event_date,content}=data;
    return <S.Container>
        <S.DateText>
            <div className="label">이벤트 기간</div>
            <p>{event_date}</p>
        </S.DateText>
            <S.Contents>{content&&content.split(/\n/g).map((e:any,i:number)=><div key={i}><p>{e}</p><br/></div>)}</S.Contents>      
    </S.Container>
}

export default EventPost;