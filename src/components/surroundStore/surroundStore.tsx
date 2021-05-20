import React, { useState,useEffect, useCallback } from "react";
import * as S from "./style";
import Map from "./map"
import {getRequest} from "api";
import ImageViewer from '../imageViewer';

type ImageType={
    image:string
};
export type StoreType={
    name:string,
    address:string,
    images:ImageType[],
    content:string
}
const SurroundStore:React.FC=()=>{

    const [curPos,setCurPos]=useState<string>();
    const [location,setLocation]=useState<[number,number]>([0,0]);
    const [storeData,setStoreData]=useState<StoreType>({name:"",address:"",images:[],content:""});
    const [storeDataList,setStoreDataList]=useState<StoreType[]>([]);
    const _setStoreData=useCallback(
        (data) => {
            setStoreData(data)
        },[])
        
    //const setAlert=useSetRecoilState(alertState);


    const getGeocoderPromise=(x:number,y:number)=>{
        const geocoder = new window.kakao.maps.services.Geocoder();
        return new Promise((resolve,reject)=>{
            geocoder.coord2Address(x,y, (result:any[],status:any)=>{
                if (status === window.kakao.maps.services.Status.OK) {
                    resolve(`${result[0].address.region_1depth_name} ${result[0].address.region_2depth_name} ${result[0].address.region_3depth_name}`);
                } else {
                    reject(status);
                }
            }) 
        })
    }

    useEffect(() => {
        setStoreDataList([]);
        navigator.geolocation.getCurrentPosition(async(pos)=>{
            const lat = pos.coords.latitude,
                  lon = pos.coords.longitude;
            setLocation([lat,lon]);

             (async () => {
                 setCurPos(await getGeocoderPromise(lon,lat) as string);
                 const pos=[];
                 pos.push(await getGeocoderPromise(lon,lat+0.009) as string);
                 pos.push(await getGeocoderPromise(lon,lat-0.009) as string);
                 pos.push(await getGeocoderPromise(lon+0.009,lat) as string);
                 pos.push(await getGeocoderPromise(lon-0.009,lat) as string);

                 try{
                     const {data}=await getRequest().post("/ecoshop/list/",{
                         location:{
                             1:pos[0],
                             2:pos[1],
                             3:pos[2],
                             4:pos[3]
                         }
                     });
                     setStoreDataList(data);
                 }catch{

                 }
            })();
             

        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return <S.Container>
        <S.SideInfo>
            <S.CurPos><p>현재위치는</p> <div><strong>{curPos}</strong>입니다.</div></S.CurPos>
            {storeData.images.length>0&&<ImageViewer images={storeData.images} width={24.5}></ImageViewer>}
            <S.Info>
                <S.Title>{storeData.name}</S.Title>
                <S.Address>{storeData.address}</S.Address>
                <S.Content>{storeData.content.split("").map((e,i)=>e===`\n`?<br key={i}/>:e)}</S.Content>
            </S.Info>
        </S.SideInfo>
        <Map location={location} setStoreData={_setStoreData} storeDataList={storeDataList}></Map>
    </S.Container>
}


export default SurroundStore;