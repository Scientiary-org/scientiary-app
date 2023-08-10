
export default class LoginService {

    async login(window: any): Promise<string | undefined> {

        try {
			const { ethereum } = window;

			if (!ethereum) {
				console.log("Metamask not detected");
				return;
			}

			const chainId = await ethereum.request({ method: 'eth_chainId' });
			
			const sepoliaChainId = '0xaa36a7'; // Sepolia network chain ID

			if (chainId !== sepoliaChainId) {
				alert("You are not connected to Sepolia network");
				return;
			}

			const accounts = await ethereum.request({ method: 'eth_requestAccounts' });

			return accounts[0];

		} catch (error) {
			console.log("Error connecting to Metamask:", error);
		}
    }

}