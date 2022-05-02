import { AdapterSocket, ThreePinSocket } from "../patterns/Adapter";

export class AdapterController {

    private threePinSocket: ThreePinSocket ;
    private adapterSocket: AdapterSocket;
    
    constructor() { 
        this.threePinSocket = new ThreePinSocket();
        this.adapterSocket = new AdapterSocket(this.threePinSocket);
    }

    public execute(): String{
        return this.adapterSocket.plugInTwoPinSocket();
    }
}