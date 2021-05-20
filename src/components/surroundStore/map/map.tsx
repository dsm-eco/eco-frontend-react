import React,{useEffect} from 'react';
import locationPin from "resourece/locationPin.png";
import {StoreType}from "../surroundStore"

declare global {
    interface Window {
      kakao: any;
    }
  }
  interface Props{
      location:[number,number],
      setStoreData:(data:object)=>void,
      storeDataList:StoreType[]
  }

const Map:React.FC<Props>=({location,setStoreData,storeDataList})=>{

    const imageSrc = locationPin,
          imageSize = new window.kakao.maps.Size(50, 50);
    const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize);

    useEffect(()=>{
        const locPos=new window.kakao.maps.LatLng(location[0],location[1]);
        const container = document.getElementById('map');
        const options = {
          center: locPos,
          level: 6,
        };
        const map = new window.kakao.maps.Map(container, options);

        const marker = new window.kakao.maps.Marker({  
            map: map, 
            position: locPos,
            image:markerImage
        }); 

        const infowindow = new window.kakao.maps.InfoWindow({
          content : '<div style="font-family:Medium; padding:3px 43px;">현재위치</div>',
      });

        infowindow.open(map, marker);

        const geocoder = new window.kakao.maps.services.Geocoder();

        for(let i=0;i<storeDataList.length;i++){
          console.log(storeDataList[i])
          geocoder.addressSearch(storeDataList[i].address,(result:any,status:any)=>{
            const markerPosition = new window.kakao.maps.LatLng(result[0].y,result[0].x);

            const imageSrc = locationPin,
                  imageSize = new window.kakao.maps.Size(35, 35);
            const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize); 


            const marker = new window.kakao.maps.Marker({
              map,
              position: markerPosition,
              image:markerImage,
            });

            const infowindow = new window.kakao.maps.InfoWindow({
              content : `<div style="font-family:Medium; padding:3px 43px;">${storeDataList[i].name}</div>`,
            });
            infowindow.open(map, marker);
            window.kakao.maps.event.addListener(marker, 'click',()=>{
              map.setCenter(markerPosition);
              setStoreData(storeDataList[i]);
            })
          })
        }


    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[storeDataList,location])

    return <div id="map"></div>
}

export default Map;


