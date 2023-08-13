import DocService from "../../services/DocService";

export class FetchAll {
  constructor(private readonly docService: DocService) {}

  async execute(window: any) {
    return this.docService.fetchAll(window);
  }
}
