import axios from "axios";

const TOKEN = "cfbet11r01qre8p5ma30cfbet11r01qre8p5ma3g";
export default axios.create({
    baseURL: "https://finnhub.io/api/v1",
    params: {token:TOKEN}
})