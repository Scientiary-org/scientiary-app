import { Doc } from "../entities/Doc";
import { ethers } from "ethers";
import { contractAddress } from "../config/config";
import Library from '../../public/config/Library.json'

export default class DocService {

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

  async findById(workId: string, window: any): Promise<Doc | undefined> {
    const {ethereum} = window;
    if(!ethereum) throw new Error("Ethreum object doesnt exist.");
    const provider = new ethers.BrowserProvider(ethereum);
    const signer = await provider.getSigner();
    const LibraryContract = new ethers.Contract(contractAddress,Library.abi,signer);
    let foundWork = await LibraryContract.getWorkById(workId);
    console.log(foundWork);

return foundWork;
}
  
}