import DocService from "../../services/DocService";

export class FindAllByUser {
  constructor(private readonly docService: DocService) {}

  async execute(user_id: string) {
    return this.docService.findByUser(user_id);
  }
}
