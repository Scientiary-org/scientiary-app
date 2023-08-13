import DocService from "../../services/DocService";

export class FetchAll {
  constructor(private readonly itemService: DocService) {}

  async execute(window: any) {
    return this.itemService.fetchAll(window);
  }
}
