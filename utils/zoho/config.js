import axios from 'axios';

export class ZohoAPI {

    constructor() {
        /* CONSTANTS */
        this.base_url = process.env.BASE_URL_ZOHO;
        this.auth_token = process.env.AUTH_TOKEN_ZOHO;
        this.clientId = process.env.CLIENT_ID_ZOHO;
        this.clientSecret = process.env.CLIENT_SECRET_ZOHO;
        this.refresh_token = process.env.REFRESH_TOKEN;
        this.moduleName = 'Leads'

        this.zohoClient = axios.create();
        this.initClient();
    }

    initClient = () => {
        let $this = this
        // Request interceptor for API calls
        this.zohoClient.interceptors.request.use(
            async config => {
                config.baseURL = this.base_url
                config.headers = { 
                    'Authorization': `Zoho-oauthtoken ${this.auth_token}`
                }
                return config;
            },
            error => {
                Promise.reject(error)
            }
        );
        
        // Response interceptor for API calls
        this.zohoClient.interceptors.response.use((response) => {
            return response
        }, async function (error) {
            const originalRequest = error.config;
            if (error.response.status === 401 && !originalRequest._retry) {
                // if the token has expired it's renewed
                originalRequest._retry = true;
                $this.auth_token = await $this.refreshAuthToken();
                console.log($this.auth_token);
                axios.defaults.headers.common['Authorization'] = `Zoho-oauthtoken ${$this.auth_token}`;
                return $this.zohoClient(originalRequest);
            }
            return Promise.reject(error);
        });
    }

    refreshAuthToken = async () => {
        try {
            const { data } = await axios.post(
                'https://accounts.zoho.com/oauth/v2/token',
                null,
                {
                    params: {
                        refresh_token: this.refresh_token,
                        client_id: this.clientId,
                        client_secret: this.clientSecret,
                        grant_type: 'refresh_token'
                    }
                }
            );
            
            return data.access_token
        } catch (error) {
            console.log('Error en refresh token')
        }
    }

    getModuleRecords = async () => {
        const { data } = await this.zohoClient.get(`${this.moduleName}`)
        return data.data
    }

    getModuleRecord = async (quoteId) => {
        try {
            const records = await this.getModuleRecords()
            if(quoteId) {
                const dealRecord = records.find((record) => record.id === quoteId)
                return dealRecord
            }
            return records
        } catch (error) {
            console.log('error', error)
            return 'No se puede obtener el record'
        }
    }

    addNewEntityModule = async (dataPost) => {
        try {
            const { data } = await this.zohoClient.post(`${this.moduleName}`,
                {
                    data: [dataPost]
                },
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            // console.log(data)

            if(data.data[0].code === 'SUCCESS') {
                return { data: data.data[0].details, message: "Datos añadido correctamente", status: 'SUCCESS' }
            } else {
                console.log(data.data[0])
                return { data: data.data[0].details, message: data.data[0].message, status: 'FAIL' }
            }
        } catch (error) {
            console.log('error', error)
            return { data: {}, message: "Error al intentar crear", status: 'FAIL' }
        }
    }

}