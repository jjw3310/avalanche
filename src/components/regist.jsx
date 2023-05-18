import React, { useState } from "react";

const SignupLoginForm = () => {
  // 회원가입 필드 상태 관리
  const [signupFields, setSignupFields] = useState({
    email: "",
    password: "",
    name: "",
    nickname: "",
    agreeTerms: false,
  });

  // 로그인 필드 상태 관리
  const [loginFields, setLoginFields] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  // 회원가입 필드 입력 시 상태 업데이트
  const handleSignupFieldChange = (event) => {
    const { name, value, type, checked } = event.target;
    setSignupFields((prevFields) => ({
      ...prevFields,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // 로그인 필드 입력 시 상태 업데이트
  const handleLoginFieldChange = (event) => {
    const { name, value, type, checked } = event.target;
    setLoginFields((prevFields) => ({
      ...prevFields,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // 회원가입 버튼 클릭 시 동작
  const handleSignupSubmit = (event) => {
    event.preventDefault();
    // 서버에 회원가입 요청 보내기
  };

  // 로그인 버튼 클릭 시 동작
  const handleLoginSubmit = (event) => {
    event.preventDefault();
    // 서버에 로그인 요청 보내기
  };

  return (
    <div>
      <h2>회원가입</h2>
      <form onSubmit={handleSignupSubmit}>
        <label>
          이메일:
          <input
            type="email"
            name="email"
            value={signupFields.email}
            onChange={handleSignupFieldChange}
            required
          />
        </label>
        <label>
          비밀번호:
          <input
            type="password"
            name="password"
            value={signupFields.password}
            onChange={handleSignupFieldChange}
            required
          />
        </label>
        <label>
          이름:
          <input
            type="text"
            name="name"
            value={signupFields.name}
            onChange={handleSignupFieldChange}
            required
          />
        </label>
        <label>
          닉네임:
          <input
            type="text"
            name="nickname"
            value={signupFields.nickname}
            onChange={handleSignupFieldChange}
            required
          />
        </label>
        <label>
          이용약관에 동의합니다.
          <input
            type="checkbox"
            name="agreeTerms"
            checked={signupFields.agreeTerms}
            onChange={handleSignupFieldChange}
            required
          />
        </label>
        <button type="submit">회원가입</button>
      </form>
      <hr />
      <h2>로그인</h2>
      <form onSubmit={handleLoginSubmit}>
        <label>
          이메일:
          <input
            type="email"
            name="email"
            value={loginFields.email}
            onChange={handleLoginFieldChange}
            required
          />
        </label>
        <label>
          비밀번호:
          <input
            type="password"
            name="password"
            value={loginFields.password}
            onChange={handleLoginFieldChange}
            required
          />
        </label>
        <label>
          로그인 상태 유지
          <input
            type="checkbox"
            name="rememberMe"
            checked={loginFields.rememberMe}
            onChange={handleLoginFieldChange}
          />
        </label>
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default SignupLoginForm;
