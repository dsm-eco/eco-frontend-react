import React, { useEffect ,useState} from "react";
import locationPin from "resourece/locationPin.png";
import styled from "styled-components";

const ErrorContainer=styled.div`
  width:15rem;
  height:20rem;
  display:flex;
  justify-content:center;
  align-items:center;
  text-align:center;
  font-family:"Medium";
  box-sizing:border-box;
  padding:1rem;
  background-color:#aaaaaa;
  color:white;
`;

declare global {
    interface Window {
      kakao: any;
    }
  }

  const Map:React.FC<{address:string,id:number}>=({address,id})=>{
    const [error,setError]=useState<boolean>(false);
    useEffect(() => {

      if(!window.kakao) {
        return;
      }
        const container = document.getElementById(`map_${id}`);
        const options = {
          center: new window.kakao.maps.LatLng(0,0),
          level: 3,
        };
        const map = new window.kakao.maps.Map(container, options);
        map.setDraggable(false);
        map.setZoomable(false);

        const imageSrc = locationPin,
              imageSize = new window.kakao.maps.Size(35, 35);
        const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize);

        const geocoder = new window.kakao.maps.services.Geocoder();
        geocoder.addressSearch(address,(result:any,status:any)=>{
            if (status === window.kakao.maps.services.Status.OK) {
                const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);
        
                const marker = new window.kakao.maps.Marker({
                    map: map,
                    position: coords,
                    image:markerImage
                });
                if(result[0].road_address.building_name){
                  const infowindow = new window.kakao.maps.InfoWindow({
                    content: `<div style="
                                      width:150px;
                                      text-align:center;
                                      padding:.5rem;
                                      font-family:'Light';
                                      font-size:.8rem;
                                      ">${result[0].road_address.building_name}</div>`
                  });
                  infowindow.open(map, marker);
                }
               
        
                map.setCenter(coords);
            }
            else setError(true);
        })
      }, [address, id]);
      
      return (error?<ErrorContainer>주소가 잘못되어 지도를 로딩할 수 없습니다.</ErrorContainer>:<div id={`map_${id}`} style={{width:"15rem",height:"20rem"}}></div>)
  }

  export default Map;