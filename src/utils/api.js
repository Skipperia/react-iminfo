import axios from 'axios'

const getTasks = async () => {
    //await axios.get()
}



const getAgentInfo = async (agent) => {
    //get agent info
    const agentData = {
        "version": "1.1.1",
        "ip": "127.0.0.1",
        "name": "ayy"
    }
    switch (agent) {
        case "ELA" : {
            // const res = await fetch("http://172.25.241.48:5789/version");
            // const ver = res.text()
            // console.log(ver);
            break;
        }
        case "EWA" : {
            // const res= (await fetch("http://localhost:5789/version"));
            // console.log(res);
            agentData.ip = "N/A";
            break;
        }
    }
    return agentData
}

export {
    getTasks, getAgentInfo 
}