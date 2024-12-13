import axios from "axios";

const testCode = async() => {
    const API = process.env.REACT_APP_API_URL;
    const response = await axios.get(`${API}/user/test`);
    console.log("테스트", response)
}

export default testCode;