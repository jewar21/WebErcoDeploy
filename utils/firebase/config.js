import { initializeApp, getApps, getApp } from "firebase/app";
import {
    getRemoteConfig,
    isSupported as isRemoteConfigSupproted,
} from "firebase/remote-config";

import { defaultConfig } from "./defaultValues";
import { firebaseConfig } from "./variables";

class Firebase {

    remoteConfig;

    constructor() {
        // Initialize Firebase 9
        this.firebase = !getApps().length ? initializeApp(firebaseConfig) : getApp();
    }

    async initializeRemoteConfig() {
        
        await isRemoteConfigSupproted().then(supported => {
            if (supported) {
              this.remoteConfig = getRemoteConfig(this.firebase);
              this.remoteConfig.settings.minimumFetchIntervalMillis = 3600000;
              this.remoteConfig.defaultConfig = defaultConfig;
            } else {
                console.error('Error Firebase no supported')
            }
        });

    }
    
}

export default Firebase;
