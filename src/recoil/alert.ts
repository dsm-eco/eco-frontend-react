import {atom}from 'recoil';


interface AlertError {
    result:"error",
    reason:Error|string
}
interface AlertSuccess{
    result:"success",
    text?:string
}

export type AlertType=AlertError|AlertSuccess;

type AlramType="error"|"none"|"success";
interface Alram{
    type:AlramType,
    text?:string,
}

export const alertState=atom<Alram>({
    key:"alertState",
    default:{
        type:"none",
    }
})
