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
