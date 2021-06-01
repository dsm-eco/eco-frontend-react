import React, {useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { alertState } from 'recoil/alert';
import locationPin from "resourece/locationPin.png"
import * as S from '../style'

declare global {
  interface Window {
    kakao: any;
  }
}

type Prop={
  keyword:string,
  keywordHandle:(text:string)=>void,
}

interface SearchResultType {
  address_name: string;
  category_group_code: string;
  category_group_name: string;
  category_name: string;
  distance: string;
  id: string;
  phone: string;
  place_name: string;
  place_url: string;
  road_address_name: string;
  x: string;
  y: string;
}

const Map: React.FC<Prop> = ({keyword,keywordHandle}) => {
  const [placeInfo,setPlaceInfo]=useState<[string,string]>(["",""]);
  const [address,setAddress]=useState<SearchResultType[]>([]);
  const setAlert=useSetRecoilState(alertState);
  const [hasError,setHasError]=useState(false);
  const [level,setLevel]=useState(10);
  const [mapLoading,setMapLoading]=useState(false);

  const handleSearch = () => {
    setMapLoading(true);
    const places = new window.kakao.maps.services.Places();
    setLevel(10);
    const searchFunc = (result: any, status: string) => {
      if (status === window.kakao.maps.services.Status.OK) {
        setPlaceInfo([result[0].y,result[0].x]);
        setAddress(result);
      }
    };
    places.keywordSearch(keyword, searchFunc);
  };

  useEffect(() => {
    if(hasError||!mapLoading) return;
    if(!window.kakao){
      setAlert({type:"error",text:"인터넷 연결이 안됩니다."});
      setHasError(true);
      return;
  }
    const container = document.getElementById('map');
    const options = {
      center: new window.kakao.maps.LatLng(placeInfo[0],placeInfo[1]),
      level: level,
    };
    const map = new window.kakao.maps.Map(container, options);

    const imageSrc = locationPin,
          imageSize = new window.kakao.maps.Size(35, 35);
    const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize);

    for(const a of address){
      const markerPosition = new window.kakao.maps.LatLng(
        (a.y), (a.x)
      );
      const marker = new window.kakao.maps.Marker({
        map,
        position: markerPosition,
        image:markerImage
      });

      window.kakao.maps.event.addListener(marker, 'click', ()=> {
        if(address){
          setMapLoading(true);
          setLevel(0.1);
          setPlaceInfo([a.y,a.x]);
          keywordHandle(a.road_address_name);
          setMapLoading(false)

        }
      })
      
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address, hasError, keywordHandle, placeInfo, setAlert]);
  

  return (
    <>
        <S.Input required readOnly={hasError} value={keyword} 
        onChange={e=>{setMapLoading(false);keywordHandle(e.target.value)}} placeholder="가게 이름 입력 후 마커 선택"/>
        <S.GradientBtn onClick={handleSearch}>주소 검색</S.GradientBtn>
        <S.MapContainer id="map">
          {(hasError)&&"인터넷 연결이 끊어져 지도 로딩이 불가능합니다."}
        </S.MapContainer>
    </>
    
  );
}

export default Map;
