import DocService from "../../services/DocService";

export class FetchAll {
  constructor(private readonly itemService: DocService) {}

  async execute() {
    return this.itemService.fetchAll();
  }
}
