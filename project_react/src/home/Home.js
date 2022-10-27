import { Link } from "react-router-dom";

const Home = () => {
    return (
    <>
    <Link to='/Signup'>회원가입</Link><br/>
    <Link to='/Login'> 로그인</Link>
    </>
    );
}
export default Home;