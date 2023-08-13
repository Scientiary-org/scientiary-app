import DocService from "../../services/DocService";

export class FindById {
  constructor(private readonly docService: DocService) {}

  async execute(work_id: string, window: any) {
    return this.docService.findById(work_id, window);
  }
}
