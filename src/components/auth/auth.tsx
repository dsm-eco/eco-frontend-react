import React,{useCallback, useState} from 'react';
import Login from './login/login';
import Register from './register/register';
import * as S from './style';
import axios,{AxiosInstance} from 'axios';


import background from 'resourece/login.jpg';
import Logo from 'resourece/logo';


export type PropsType={
    setMod:(m:boolean)=>void,
    client:AxiosInstance
}

const Auth: React.FC = () => {
    const [mod,setMod]=useState<boolean>();
    const _setMod=useCallback(
        (b:boolean) => {
            setMod(b)
        },
        [],
    )
    const client=axios.create({
        baseURL:process.env.REACT_APP_BASE_URL
    })

    return (
        <S.Container>
            <S.AuthBox>
                { mod ? <Login setMod={_setMod} client={client}/> : <Register setMod={_setMod} client={client}/> }
            </S.AuthBox>
            <S.BackgroundContainer>
                <S.Header>
                    <Logo />
                </S.Header>
                <S.BackgroundImg src={ background } alt="http://www.freepik.com" />
            </S.BackgroundContainer>

        </S.Container>);
};

export default Auth;