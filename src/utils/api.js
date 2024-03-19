import axios from 'axios'
// import { Notification } from "electron";


// function showNotification(title, body) {
//     const notification = new Notification({
//         title,
//         body: body,
//         icon: process.cwd() + '\\src\\assets\\icons\\icon.png'
//     });

//     notification.onclick = () => {
//         console.log('Notification clicked');
//     };
//     notification.show();
// }

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
        case "ELA": {
            try {
                // const res = await fetch("http://172.25.241.48:5789/version");
                // const ver = await res.text();
                agentData.version = "1.2.2";
            }
            catch (e) {
                console.log("a:" + e)
            }
            // console.log(ver);
            break;
        }
        case "EWA": {
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