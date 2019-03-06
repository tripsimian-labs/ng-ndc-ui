import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface AppConfig {
    env: {
		name: string;
    };
    appInsights: {
        instrumentationKey: string;
    };
    logging: {
        console: boolean;
        appInsights: boolean;
    };
    aad: {
        requireAuth: boolean;
        tenant: string;
        clientId: string;
 
    };
    apiServer: {
        metadata: string;
        rules: string;
	};
}

@Injectable()

export class AppConfigService {
    static settings: AppConfig;
    constructor(private http: HttpClient) {}
    load() {
        const jsonFile = `assets/config.json`;
        return new Promise<void>((resolve, reject) => {
            this.http.get(jsonFile).toPromise().then((response : AppConfig) => {
               AppConfigService.settings = <AppConfig>response;
               resolve();
			   console.log("AppConfig loaded");
            }).catch((response: any) => {
               reject(`Could not load config file`);
            });
        });
    }
}