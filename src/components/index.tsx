import React,{useEffect} from "react";
import {Switch,Route} from "react-router-dom";
import { useHistory}from "react-router"

import { useRecoilValue } from "recoil";
import {alertState}from "recoil/alert";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer,toast} from "react-toastify";


import Auth from "./auth";
import TimeLine from "components/main";
import WriteContainer from "components/write";
import NotFound from "components/other";
import SurroundStore from 'components/surroundStore';

import * as S from "./style";
import Logo from "resourece/logo";



const Container:React.FC=()=>{
    const alert=useRecoilValue(alertState);
    const history=useHistory();
    useEffect(()=>{
        switch(alert.type){
            case "error":
                toast.error(alert.text);
                return;
            case "success":
                toast.success(alert.text);
                return;
            default:
                return
        }
    },[alert]);
    
    return(
        <>
            <S.Header>
                <div onClick={()=>history.push("/main")}><Logo></Logo></div>
            </S.Header>
           {/* {localStorage.getItem("access")? <Redirect to="/main"/>: <Redirect to="/auth"/>} */}
            <Switch>
                <Route path="/auth" component={Auth}/>
                <Route path="/main" component={TimeLine}/>
                <Route path="/write" component={WriteContainer}/>
                <Route path="/surround" component={SurroundStore}/>
                <Route path="" component={NotFound}/>
            </Switch>
            <ToastContainer position="top-center"autoClose={3000} style={{ width: "30rem" }}/>
        </>
    )
}
export default Container;