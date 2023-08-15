import { Doc } from "../entities/Doc";
import { ethers } from "ethers";
import { contractAddress } from "../config/config";
import Library from '../config/Library.json'

import Capa1 from "../assets/capa_ex.jpg"
import Capa2 from "../assets/capa_ex2.jpg"
import Capa3 from "../assets/capa_ex3.jpg"

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
  
  // async fetchAll(window: any): Promise<Doc[] | undefined> {

  //   const {ethereum} = window;
  //   if(!ethereum) throw new Error("Ethreum object doesnt exist.");
  //   const provider = new ethers.BrowserProvider(ethereum);
  //   const signer = await provider.getSigner();
  //   const LibraryContract = new ethers.Contract(contractAddress,Library.abi,signer);
  //   let works = await LibraryContract.getWorkList();
  //   console.log(works);
  
  //   return works;
  // }

  async fetchAll(window: any): Promise<Doc[]> {
    // console.log(window)

    const docs: Doc[] = [
      {
        name: "As Crônicas de Gelo e Fogo - A Guerra dos Tronos",
        year: 1912,
        author: "George R. R. Martin",
        ipfsHash: "1234",
        image: Capa1,
      },
      {
        name: "As Crônicas de Gelo e Fogo - A Fúria dos Reis",
        year: 1912,
        author: "George R. R. Martin",
        ipfsHash: "1234",
        image: Capa2,
      },
      {
        name: "As Crônicas de Gelo e Fogo - A Tormenta de Espadas",
        year: 1912,
        author: "George R. R. Martin",
        ipfsHash: "1234",
        image: Capa3,
      },
      {
        name: "As Crônicas de Gelo e Fogo - A Guerra dos Tronos",
        year: 1912,
        author: "George R. R. Martin",
        ipfsHash: "1234",
        image: Capa1,
      },
      {
        name: "As Crônicas de Gelo e Fogo - A Fúria dos Reis",
        year: 1912,
        author: "George R. R. Martin",
        ipfsHash: "1234",
        image: Capa2,
      },
      {
        name: "As Crônicas de Gelo e Fogo - A Tormenta de Espadas",
        year: 1912,
        author: "George R. R. Martin",
        ipfsHash: "1234",
        image: Capa3,
      },
       
    ]
    return docs;
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