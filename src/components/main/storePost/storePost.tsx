import React from 'react'
import * as S from "./style"
import Map from "./map"
import { StoreType } from '../timeline';


const StorePost:React.FC<{data:StoreType|any}>=({data})=>{


    return <S.Container>
        {data.address&&<Map address={data.address} id={data.id}/>}
        <div>
            <S.StoreName>{data.name}</S.StoreName>
            <S.Address>{data.address}</S.Address>
            {data.content&&<S.Contents>{data.content.split(/\n/g)
            .map((e:any,i:number)=>
            <div key={i}>
                <p >{e}</p>
            </div>)}</S.Contents>}
            
        </div>
       
    </S.Container>
}

export default StorePost;