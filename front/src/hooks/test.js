import axios from "axios";

const testCode = async() => {
    const response = await axios.get('http://58.126.15.120:8888/user/test');
    console.log("테스트", response)
}

export default testCode;