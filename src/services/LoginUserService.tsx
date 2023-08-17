import { Doc } from "./Doc";
import { ethers } from "ethers";
import { contractAddress } from "../config/config";
import Library from './Library.json'

export default class LoginService {

    async login(window: any): Promise<string | undefined> {

        try {
			const { ethereum } = window;
			console.log(`Window é ${ethereum}`);

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

	async create(newDoc: Doc, window: any): Promise<Doc | undefined> {
		const { ethereum } = window;
		if(!ethereum) throw new Error("Ethreum object doesnt exist.");
		const provider = new ethers.BrowserProvider(ethereum);
		const signer = await provider.getSigner(); 
		const LibraryContract = new ethers.Contract(contractAddress,Library.abi,signer);
		let libraryTx = await LibraryContract.addWork(newDoc.name, newDoc.year, newDoc.author, newDoc.ipfsHash);
		console.log(libraryTx);

	return libraryTx;
}

	async fetchAll(window: any): Promise<any> {
		const {ethereum} = window;
		if(!ethereum) throw new Error("Ethreum object doesnt exist.");
		const provider = new ethers.BrowserProvider(ethereum);
		const signer = await provider.getSigner();
		const LibraryContract = new ethers.Contract(contractAddress,Library.abi,signer);
		let works = await LibraryContract.getWorkList();
		console.log(works);

	return works;
	}

	async findByUser(userId: string, window: any): Promise<Doc[] | undefined> {
		const {ethereum} = window;
		if(!ethereum) throw new Error("Ethreum object doesnt exist.");
		const provider = new ethers.BrowserProvider(ethereum);
		const signer = await provider.getSigner();
		const LibraryContract = new ethers.Contract(contractAddress,Library.abi,signer);
		let worksByUser = await LibraryContract.getWorksByAddress(userId);
		console.log(worksByUser);

	return worksByUser;
}
	
async delete(workId: string, window: any): Promise<void> {
	const {ethereum} = window;
	if(!ethereum) throw new Error("Ethreum object doesnt exist.");
	const provider = new ethers.BrowserProvider(ethereum);
	const signer = await provider.getSigner();
	const LibraryContract = new ethers.Contract(contractAddress,Library.abi,signer);
	let deletedWork = await LibraryContract.deleteWork(workId);
	console.log(deletedWork);

}

}