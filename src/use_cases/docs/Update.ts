import DocService from "../../services/DocService";

export class Update {
    constructor (private readonly docService: DocService) {}

    async execute(work_id: number, title: string, author: string,  year: number, window: any) {
      return this.docService.update(work_id, title, author, year, window);
    }
  }

