import React, { useState} from 'react'
import * as S from './style'
import { useSetRecoilState } from 'recoil';
import {alertState}from 'recoil/alert'
//import { useHistory } from 'react-router';

type Props={
    pushFileData:(files:File[])=>void
}

const ImageInput:React.FC<Props>=({pushFileData})=>{
    const setAlert=useSetRecoilState(alertState);
    const [imgName,setImgName]=useState<string[]>([]);
    const [base64Code,setBase64Code]=useState<string[]>([]);


    const imageHandle=(e:React.ChangeEvent<HTMLInputElement>)=>{
        if(e.target.files?.length as number>5){
            setAlert({type:"error",text:"사진은 최대 5장까지 삽입 가능합니다."});
            return;
        }
        const fileArr:FileList=e.target.files as FileList;
        let fileURL:any[]=[];
        const fileObj:File[]=[];
    
        // eslint-disable-next-line array-callback-return
        Array.from(fileArr).map((file)=>{            
            let reader=new FileReader();
            reader.onload=()=>{
                if(base64Code.length+fileArr.length>5){
                    setAlert({type:"error",text:"사진은 최대 5장까지 삽입 가능합니다."});
                    return;
                }
                if(base64Code.length>4){
                    setAlert({type:"error",text:"사진은 최대 5장까지 삽입 가능합니다."});
                    return;
                }
                fileURL.push(reader.result);
                setBase64Code([...base64Code,...fileURL]);
                setImgName([...imgName,file.name]);
            }
            reader.readAsDataURL(file);
            fileObj.push(file);
        });
        pushFileData(fileObj);
    }

    return(
        <>
            <S.ImageInput 
                id="img"
                type="file"
                accept="image/*"
                multiple
                onChange={imageHandle}
                />
            <S.ImageLabel htmlFor="img">파일 열기</S.ImageLabel>
            <S.ImageContainer>
                {base64Code&&base64Code.map((e,i)=>{
                    return <img alt={imgName[i]} key={i} src={e}/>
                })}
            </S.ImageContainer>
        </>
        
    )
};

export default ImageInput;