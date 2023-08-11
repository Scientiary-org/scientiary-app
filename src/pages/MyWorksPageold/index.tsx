import "./styles.css"
import { useState } from "react";
import {ethers} from "ethers";
import { contractAddress } from "../../../public/config/config"

declare let window: any;

function MyWorksPage() {

    const [workName, setWorkName] = useState('');
    const [workAuthor, setWorkAuthor] = useState('');
    const [workYear, setWorkYear] = useState('');
    const [workIpfs, setWorkIpfs] = useState('');


	  const submitwork = async()=>{
        let work = {
          'name':workName,
        'year':parseInt(workYear),
          'author':workAuthor,
          'ipfsHash':workIpfs,
        };
    
        try{
         const {ethereum} = window;
         if(ethereum){
           const provider = new ethers.providers.Web3Provider(ethereum);
           const signer = provider.getSigner(); 
           const LibraryContract = new ethers.Contract(contractAddress,Library.abi,signer);
    
           let libraryTx = await LibraryContract.addWork(work.name,work.year,work.author,work.ipfsHash);
           console.log(libraryTx);
         }else{
           console.log("Ethreum object doesnt exist");
         }
        }catch(error){
          console.log("Error submitting new work ",error);
        }
      }
    

    return ('')
  }
  
export default MyWorksPage;