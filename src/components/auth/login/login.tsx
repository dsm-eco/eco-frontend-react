import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import {alertState}from 'recoil/alert'

import * as S from "components/auth/style";
import { useHistory } from 'react-router';
import {PropsType}from '../auth'


const Login:React.FC<PropsType> = ({setMod,client}) => {
    const [id, setId] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const setAlert=useSetRecoilState(alertState);
    const history=useHistory();



    const onSubmit = async () => {
        const loginData = {
            username:id,
            password
        };
        
        try{
            const {data}=await client.post("user/login/",loginData);
            localStorage.setItem("access",data.access);
            localStorage.setItem("refresh",data.refresh);
            setId("");
            setPassword("");
            setAlert({type:"success",text:"로그인에 성공하였습니다."})
            history.push("/main");
        }
        catch(e){
            setAlert({type:"error",text:"로그인에 실패하였습니다."});
        }

    };
    return (
        <S.FlexBox>
            <S.Logo>LOG IN</S.Logo>
            
                <S.Input data-testid="idInput" placeholder="ID" value={ id } onChange={ e => setId(e.target.value) } />            
                <S.Input placeholder="PASSWORD" 
                         type="password" 
                         value={ password } 
                         onChange={ e => setPassword(e.target.value)}
                         onKeyUp={e=>e.key==="Enter"&&onSubmit()} />            
                <S.Button onClick={ onSubmit }>LOGIN</S.Button>            <S.Link onClick={ () => setMod(false) } type="submit" >회원가입 하기</S.Link>
        </S.FlexBox>
    );
};

export default Login;
