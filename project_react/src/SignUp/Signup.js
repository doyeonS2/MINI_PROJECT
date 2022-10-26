import React, { useState } from 'react';
import { Link } from "react-router-dom";

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

    // const domainListEl = document.querySelector('#domain-list')
    // const domainInputEl = document.querySelector('#domain-txt')

    // domainListEl.addEventListener('change', (e) => {
    // if(e.target.value !== "type") {
    //     domainInputEl.value = e.target.value
    //     domainInputEl.disabled = true
    // } else { 
    //     domainInputEl.value = ""
    //     domainInputEl.disabled = false
    // }
    // })



    // // 아이디 중복 확인
    // const memberCheck = await Api.memberRegCheck(inputId);
    // console.log("가입 가능 여부 확인 : ", memberCheck.data);

//     // 중복 체크 후 가입 절차 진행
//     if (memberCheck.data.result === "OK") {
//         console.log("가입된 아이디가 없습니다. 다음 단계 진행 합니다.");
//         const memberReg = await KhApi.memberReg(inputId, inputPw, inputName, inputEmail);
//         console.log(memberReg.data.result);
//         if(memberReg.data.result === "OK") {
//             window.location.replace("/");
//         } else {
//             setModalOpen(true);
//             setModelText("회원 가입에 실패 했습니다.");
//         }

//     } else {
//         console.log("이미 가입된 회원 입니다.")
//         setModalOpen(true);
//         setModelText("이미 가입된 회원 입니다.");
//     } 
// }


     
    
   

    return (
        
      
        <div className='container'>
            <Link to='/'>🏠홈으로 이동🏠</Link>
        <div className='item-box'>
        <div className='JoinUs'>JOIN US</div>
        <p className='comments'>👟Sa Shoe 회원가입 하고 예쁜 신발 Sa Shoe~👟 </p>
        <div className='item'>
            <p className='comments2'><b className="star">* </b>표시 필수 입력</p>
            <div className='notGrid'>
            <div className='id'><b className="star">* </b><span className='item-text'>아이디</span>
                <input className='input' value={id} placeholder="아이디" onChange={onChangId}  />
                <button>중복 확인</button>
            </div>
            <div className='pw'><b className="star">* </b><span className='item-text'>비밀번호</span>
                <input className='input' value={pw} placeholder="비밀번호" onChange={onChangePw} />
            </div>
            <div className='pwCheck'><b className="star">* </b><span className='item-text'>비밀번호 확인</span>
                <input className='input' value={pwCheck} placeholder="비밀번호 확인" onChange={onChangePwCheck} />
            </div>
            <div className='name'><b className="star">* </b><span className='item-text'>이름</span>
                <input className='input' value={name} placeholder="이름" onChange={onChangeName}  />
            </div>
            <div className='email'><b className="star">* </b><span className='item-text'>이메일</span>
                <input className='input-e' value={email} placeholder="이메일" onChange={onChangeEmail} /> @
                <input className='input-eList' value={emailList} placeholder="(직접 입력)" onChange={onChangeEmailList} />
                <select className='list' value={emailList} >
                    <option value="직접 입력">직접 입력</option>
                    <option value="@naver.com">naver.com</option>
                    <option value="@gmail.com">gmail.com</option>
                    <option value="@daum.net">daum.net</option>
                    <option value="@nate.com">nate.com</option>
                    <option value="@kakao.com">kakao.com</option>
                </select><br/>
            </div>
            </div>
            <div className='grid-box'>  
            <b className="star">* </b>
            <div className='phone-box'><span className='item-text1'>전화번호</span>
                <input className='input-s' value={phone} placeholder="010" /> - <input className='input-s' value={phone} /> - <input className='input-end' value={phone} /> 
                <button className='grayBtn'> 인증번호 전송</button><br /><span className='item-text2'>인증번호</span>
                <input className='input' value={phone} placeholder="인증번호 6자리" /> 
                <button>확인</button>
            </div><br />
            <div className='addr-box'><span className='item-text3'>주소</span>
                <input className='input' value={addr} placeholder="우편번호" /><button>우편번호 검색</button><br /> 
                <span className='item-text3'></span><input className='input' value={addr} placeholder="주소" /><br /> 
                <span className='item-text3'></span><input className='input' value={addr} placeholder="상세 주소" /> 
            </div>
            </div>  
            
        </div>
        <button className='JoinUsBtn'>회원가입</button><br />
        <fieldset className='check'>
        <span className='idCheck'>이미 아이디가 있으신가요? </span><Link to='/Login'> ＞ 로그인</Link>
        </fieldset>
        </div>
       
        </div>
        
    );

    

}
export default Signup;