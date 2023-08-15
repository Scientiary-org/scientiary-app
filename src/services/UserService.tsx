
export default class UserService {

    async login(window: any): Promise<string | undefined> {

        try {
			const { ethereum } = window;
			console.log(`Window é ${ethereum}`);

			if (!ethereum) {
				console.log("Metamask not detected");
				return;
			}

			const chainId = await ethereum.request({ method: 'eth_chainId' });
			
			const goerliChainId = '0x5'; // Sepolia network chain ID
			
			if (chainId !== goerliChainId) {
				alert("You are not connected to Goerli network");
				return;
			}
			
			const accounts = await ethereum.request({ method: 'eth_requestAccounts' });

			console.log(window);
			console.log(accounts[0])
			return accounts[0];

		} catch (error) {
			console.log("Error connecting to Metamask:", error);
		}
    }

}