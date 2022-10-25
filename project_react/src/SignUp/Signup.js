import React, { useState, ChangeEvent } from 'react';

const Signup = () => {
    // 회원정보 입력받는 부분
    const [id, setId] = useState(''); 
    const [pw, setPw] = useState('');
    const [pwCheck, setPwCheck] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    // const [emailList, setEmailList] = useState('');
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
            setPwMsg("비밀번호는 8자 이상이어야 하며, 영문자/숫자/특수문자를 모두 포함해야 합니다.");
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

    // 이메일 리스트 
    const EmailList = (e) => {
        setEmail(e.target.value) 
        const setEmail = [
            '@naver.com',
            '@gmail.com',
            '@daum.net',
            '@nate.com',
            '@kakao.com',
            '직접 입력'
        ];  
    };

   

    return (
        <div>
            <div className='id'>
                <input className='input' value={id} placeholder="아이디 입력" onChange={onChangId}  />
                <button>중복 확인</button>
            </div>
            <div className='pw'>
                <input className='input' value={pw} placeholder="비밀번호 입력" onChange={onChangePw} />
            </div>
            <div className='pwCheck'>
                <input className='input' value={pwCheck} placeholder="비밀번호 확인" onChange={onChangePwCheck} />
            </div>
            <div className='name'>
                <input className='input' value={name} placeholder="이름 입력"  />
            </div>
            <div className='email'>
                <input className='mailList' value={email} placeholder="이메일 입력" onChange={EmailList}  />
                <datalist className='mailList' value={email} >
                    <option value="@naver.com">@naver.com</option>
                    <option value="@gmail.com">@gmail.com</option>
                    <option value="@daum.net">@daum.net</option>
                    <option value="@nate.com">@nate.com</option>
                    <option value="@kakao.com">@kakao.com</option>
                </datalist>
            <fieldset>
                <input className='input' value={phone} placeholder="전화번호 입력" /> 
                <button>인증번호 전송</button><br />
                <input className='input' value={phone} placeholder="인증번호 6자리" /> 
                <button>확인</button>
            </fieldset>
            <div>
                <input className='input' value={addr} placeholder="주소 입력" /> 
            </div>
            
            </div>
        </div>
    );

    

}
export default Signup;