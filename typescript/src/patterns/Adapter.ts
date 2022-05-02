class TwoPinSocket {
	public plugInTwoPinSocket(): String {
		return "Plugged into two-pin socket";
	}
}

export class ThreePinSocket {
	public plugInThreePinSocket(): String {
		return "Plugged into the Three Pin Socket";
	}
}

export class AdapterSocket extends TwoPinSocket {
	private threePinSocket!: ThreePinSocket;

	public constructor(threePinSocket: ThreePinSocket) {
        super();
		this.threePinSocket = threePinSocket;
	}

	public plugInTwoPinSocket(): String {
		return this.threePinSocket.plugInThreePinSocket();
	}
}