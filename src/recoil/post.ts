import {atom}from 'recoil';


export const reposrtState=atom<{id:number,reported:boolean}>({
    key:"reposrtState",
    default:{id:0,reported:false}
})

export const postlistType=atom<"shop"|"event">({
    key:"postlistType",
    default:"shop"
})

declare global {
  interface Window {
    kakao: any;
  }
}

 const getNear=()=>{
    //EPSG:5181
    navigator.geolocation.getCurrentPosition(async(pos)=>{
        const lat = pos.coords.latitude, // 위도
              lon = pos.coords.longitude;
        const locPosition = new window.kakao.maps.LatLng(lat, lon);
        console.log(locPosition.La,locPosition.Ma);

        let nearPos:string[]=[];
         const geocoder = new window.kakao.maps.services.Geocoder();
         geocoder.coord2Address(parseFloat(locPosition.La),parseFloat(locPosition.Ma), (result:any[],status:any)=>{
             nearPos.push(result[0].address.address_name as string);
             console.log(result[0]);
           })
         try{
           await geocoder.coord2Address(parseFloat(locPosition.La),parseFloat(locPosition.Ma)+0.05, (result:any[],status:any)=>{
             nearPos.push(result[0].address.address_name as string);
             console.log(result[0].address.region_2depth_name);
           })
           await geocoder.coord2Address(parseFloat(locPosition.La),parseFloat(locPosition.Ma)-0.05, (result:any[],status:any)=>{
             nearPos.push(result[0].address.address_name as string);
             console.log(result[0].address.region_2depth_name);
           });
           await geocoder.coord2Address(parseFloat(locPosition.La)+0.05,parseFloat(locPosition.Ma), (result:any[],status:any)=>{
             nearPos.push(result[0].address.address_name as string);
             console.log(result[0].address.region_2depth_name);
           });
           await geocoder.coord2Address(parseFloat(locPosition.La)-0.05,parseFloat(locPosition.Ma), (result:any[],status:any)=>{
             nearPos.push(result[0].address.address_name as string);
             console.log(result[0].address.region_2depth_name);
           });
           console.log(nearPos)
        }catch{
           alert("주변위치찾기 실패")
         }
    })
    

  }