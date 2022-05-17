import { fetchAndActivate, getValue } from "firebase/remote-config";

import Firebase from "./config";

const remote_config = {}
const firebase = new Firebase();

const initRemoteConfig = async () => {

    if(!firebase.remoteConfig) {
        await firebase.initializeRemoteConfig();
    }

    return firebase.remoteConfig;
}

remote_config.get = async (type) => {
    let data
    let error
    
    const remoteConfig = await initRemoteConfig();

    await fetchAndActivate(remoteConfig)
    .then(() => {
        // fetched configs successfully activate
        data = getValue(remoteConfig, type)
    })
    .catch(err => {
        // fetched configs were activate activate
        error = err
        console.error(err);
    });

    if(data) {
        return data._value;
    } else {
        return `{"error": "${error}"}`
    }
    
}

export default remote_config;