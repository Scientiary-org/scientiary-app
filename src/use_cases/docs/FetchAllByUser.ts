import DocService from "../../services/DocService";

export class FetchAllByUser {
  constructor(private readonly docService: DocService) {}

  async execute(user_id: string, window: any) {
    return this.docService.findByUser(user_id, window);
  }
}
