import { Doc } from "../entities/Doc";
import { api } from "../api";


export default class DocService {
  async register(newDoc: Doc): Promise<Doc> {
    const user_id = sessionStorage.getItem("user_id")
    const {name, year, author} = newDoc;
    const {data} = await api.post<Doc>(
        `/users/${user_id}/doc`,
        {
        name: name,
        year: year,
        author: author

      })

      return data;
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