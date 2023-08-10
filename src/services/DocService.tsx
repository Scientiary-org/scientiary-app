import axios from "axios";
import { Doc } from "../entities/Doc";
import { IP } from "../entities/IP";

export default class DocService {
  async register(newDoc: Doc): Promise<Doc> {
    const user_id = sessionStorage.getItem("user_id")
    const {nome, autor} = newDoc;
    axios.post(
        `http://${IP}:3333/users/${user_id}/doc`,
        {
        nome: nome,
        autor: autor,
      })
      .then((response) => {
        return response
      }, (error) => {
        throw new Error(error);
      });
  }

//   async fetchAllByAuthor(author: string): Promise<Doc[]> {
    
//   }

//   async fetchAll(): Promise<Doc[]> {
    
//   }

//   async findByIdAndCompany(companyId: string, itemId: string): Promise<Doc> {
    
//   }

//   async findById(itemId: string): Promise<Doc> {
    
//   }


//   async delete(id: string): Promise<Doc> {
    
//   }
  
}