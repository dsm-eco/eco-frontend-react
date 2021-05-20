import { getRequest } from 'api';
import {atom,selector}from 'recoil';



type WriteType="shop"|"event";

interface WriteForm{
    type:WriteType,
    data:FormData
}

type ResultType="init"|"success"|"fail";

export const writeState=atom<WriteForm|null>({
    key:"writeForm",
    default:null
})



export const writeSelector =selector<ResultType>({
    key:"writeSelector",
    get:async ({get})=>{
        const formData=get(writeState);
        
        if(formData===null) return "init";   
        try{
            console.log(formData?.data,formData.type);
            const {data} =await getRequest().post(`/${formData.type}/`,formData.data);
            console.log(data);
            return "success";
        }
        catch(err){
            return "fail"
        }
    },
    set:({set})=>{
        set(writeState,null);
    }
})