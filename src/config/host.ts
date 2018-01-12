// Host informations

export class Host {
    /**
     * URL of local web server
     */
    private localhost : string = 'http://192.168.8.100:8000';


    /**
     * URL of the externet server 
     */
    private webhost : string = '';


     /**
     * URL of the official and public web server 
     */
    private officialhost : string = '';


    constructor() {}
    
    /**
     * Returns the usable Web host URL
     */
    getHostURL() {
        return this.localhost;
    }

    getLocalHost() { return this.localhost; }

    getWebHost() { return this.webhost; }
    
}