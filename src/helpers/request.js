import axios from "axios"

const fetchData=(api_link)=>axios.get(api_link);


export {fetchData}