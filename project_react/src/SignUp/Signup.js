import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

const Signup = () => {
    // 회원정보 입력받는 부분
    const [id, setId] = useState(''); 
    const [pw, setPw] = useState('');
    const [pwCheck, setPwCheck] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [emailList, setEmailList] = useState('');
    const [phone, setPhone] = useState('');
    const [addr, setAddr] = useState('');

    // input창 오류 메시지
    const [idMsg, setIdMsg] = useState(''); 
    const [pwMsg, setPwMsg] = useState(''); 
    const [pwCheckMsg, setPwCheckMsg] = useState(''); 
    const [nameMsg, setNameMsg] = useState('');
    const [emailMsg, setEmailMsg] = useState('');
    const [phoneMsg, setPhoneMsg] = useState('');
    const [addrMsg, setAddrMsg] = useState('');

    // input창 유효성 검사
    const [isId, setIsId] = useState('');
    const [isPw, setIsPw] = useState('');
    const [isPwCheck, setIsPwCheck] = useState('');
    const [isName, setIsName] = useState('');
    const [isEmail, setIsEmail] = useState('');
    const [isPhone, setIsPhone] = useState('');
    const [isAddr, setIsAddr] = useState('');

    // input창 제약조건
    const onChangId = (e) => {
        setId(e.target.value)
        if (e.target.value.length < 4 || e.target.value.length > 20) {
            setIdMsg("아이디는 4자리 이상 20자리 이하입니다.");
            setIsId(false);    
        } else {
            setIdMsg("아이디가 올바른 형식입니다.");
            setIsId(true);
        }
    }

    const onChangePw = (e) => {
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$/;
        const passwordCurrent = e.target.value ;
        setPw(passwordCurrent)
        if (!passwordRegex.test(passwordCurrent)) {
            setPwMsg("비밀번호는 8자 이상이어야 하고 영문자, 숫자, 특수문자를 모두 포함해야 합니다.");
            setIsPw(false)
        } else {
            setPwMsg("비밀번호가 올바른 형식입니다.")
            setIsPw(true);
        }        
    }

    const onChangePwCheck = (e) => {
        const passwordCurrent = e.target.value ;
        setPwCheck(passwordCurrent)
        if (passwordCurrent !== pw) {
            setPwCheckMsg("비밀번호가 일치하지 않습니다. 다시 확인해주세요.")
            setIsPwCheck(false)
        } else {
            setPwCheckMsg("비밀번호가 일치합니다.")
            setIsPwCheck(true);
        }      
    }

    const onChangeName = (e) => setName(e.target.value);
    const onChangeEmail = (e) => setEmail(e.target.value);

    const onChangeEmailList = (e) => {
        setEmailList(e.target.value) 
        if((e.target.value) !== emailList) {
            onChangeEmailList.value = e.target.value
        
        } else onChangeEmailList.value = emailList

    }
     
    
   

    return (
        <form className='App'>
        <div className='container'>
        <fieldset className='JoinUs'>JOIN US</fieldset>
        <div className='item-box'>
        <div className='item'>
            <div className='id'><b className="star">* </b>아이디
                <input className='input' value={id} placeholder="아이디" onChange={onChangId}  />
                <button>중복 확인</button>
            </div>
            <div className='pw'><b className="star">* </b>비밀번호
                <input className='input' value={pw} placeholder="비밀번호" onChange={onChangePw} />
            </div>
            <div className='pwCheck'><b className="star">* </b>비밀번호 확인
                <input className='input' value={pwCheck} placeholder="비밀번호" onChange={onChangePwCheck} />
            </div>
            <div className='name'><b className="star">* </b>이름
                <input className='input' value={name} placeholder="이름" onChange={onChangeName}  />
            </div>
            <div className='email'><b className="star">* </b>이메일
                <input className='input' value={email} placeholder="이메일" onChange={onChangeEmail} />@
                <input className='input' value={emailList} onChange={onChangeEmailList} />
                <select className='list' value={emailList} >
                    <option value="직접 입력">직접 입력</option>
                    <option value="@naver.com">naver.com</option>
                    <option value="@gmail.com">gmail.com</option>
                    <option value="@daum.net">daum.net</option>
                    <option value="@nate.com">nate.com</option>
                    <option value="@kakao.com">kakao.com</option>
                </select><br/><b className="star">* </b>
            <fieldset>전화번호
                <input className='input-s' value={phone} placeholder="010" /> - <input className='input-s' value={phone} /> - <input className='input-s' value={phone} /> 
                <button className='grayBtn'> 인증번호 전송</button><br />인증번호
                <input className='input' value={phone} placeholder="인증번호 6자리" /> 
                <button>확인</button>
            </fieldset>
            <div>주소
                <input className='input' value={addr} placeholder="우편번호" /><br /> 
                <input className='input' value={addr} placeholder="주소" /><br /> 
                <input className='input' value={addr} placeholder="상세 주소" /> 
            </div>
            </div>
        </div>
        <button className='JoinUsBtn'>회원가입</button>
        </div>
       
        </div>
        </form>
    );

    

}
export default Signup;