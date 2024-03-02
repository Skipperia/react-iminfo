import axios from 'axios'

const getTasks = async () => {
    //await axios.get()
}

const getAgentInfo = (agent) => {
    //get agent info
    const agentData = {
        "version": "1.1.1",
        "ip": "127.0.0.1",
        "name": "ayy"
    }
    switch (agent) {
        case "ELA" : {
            break;
        }
        case "EWA" : {
            break;
        }
    }
    return agentData
}

export {
    getTasks, getAgentInfo
}