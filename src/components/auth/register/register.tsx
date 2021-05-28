import React, {useReducer} from 'react';
import { alertState } from 'recoil/alert';

import { useSetRecoilState } from 'recoil';

import * as S from 'components/auth/style';
import {PropsType}from '../auth'

type ActionType="USERNAME"|"ID"|"PASSWORD"|"CONFIRMPASSWORD"|"RESET";

interface ReducerType{
    type:ActionType,
    data:string
}

interface RegisterType{
    userName:string,
    id:string,
    password:string,
    passwordConfirm:string
}

const initData={
    userName:"",
    id:"",
    password:"",
    passwordConfirm:""
}



const Register:React.FC<PropsType>=({setMod,client})=>{
    const setAlert=useSetRecoilState(alertState);


    const reducer=(state:RegisterType,action:ReducerType):RegisterType=>{
        switch(action.type){
            case "USERNAME":
                return {...state,userName:action.data};
            case "ID":
                return {...state,id:action.data};
            case "PASSWORD":
                return {...state,password:action.data};
            case "CONFIRMPASSWORD":
                return {...state,passwordConfirm:action.data}
            default:
                throw Error("unknown type!")
        }
    }
    const [loginData,dispatch]=useReducer(reducer,initData);

    const onSubmit=async(e:any)=>{
        e.preventDefault();
        if(loginData.passwordConfirm!==loginData.password){
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }

        try{
            const userData={
                username:loginData.id,
                nickname:loginData.userName,
                password:loginData.password
            }
            await client.post("user/register/",userData);
            setAlert({type:"success",text:"회원가입에 성공하였습니다."});
            setMod(true)
        }catch(e){
            let message="회원가입 실패";
            switch(e.response.status){
                case 409:
                    message="중복된 아이디입니다."
                    break;
                default:
                    break;
            }
            setAlert({type:"error",text:message});
           
        }
    }


    return(
        <S.FlexBox>
            <S.Logo>SIGN UP</S.Logo>
                <S.Input placeholder="NICKNAME" 
                    value={loginData.userName} 
                    onChange={e=>dispatch({type:"USERNAME",data:e.target.value})}/>
                <S.Input placeholder="ID"
                    value={loginData.id}
                    onChange={e=>dispatch({type:"ID",data:e.target.value})}/>
                <S.Input placeholder="PASSWORD"
                    type="password"
                    value={loginData.password}
                    onChange={e=>dispatch({type:"PASSWORD",data:e.target.value})}/>
                <S.Input placeholder="PASSWORD CONFIRM"
                    type="password"
                    value={loginData.passwordConfirm}
                    onChange={e=>dispatch({type:"CONFIRMPASSWORD",data:e.target.value})}
                    />
               <S.Button type="submit" onClick={onSubmit}>GET START</S.Button>
            <S.Link  onClick={()=>setMod(true)}>로그인 하기</S.Link>
        </S.FlexBox>
    )
}

export default Register;