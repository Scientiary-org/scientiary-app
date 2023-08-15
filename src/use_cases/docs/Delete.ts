import DocService from "../../services/DocService";

export class Delete {
  constructor(private readonly itemService: DocService) {}

  async execute(work_id: number, window: any) {
    return this.itemService.delete(work_id, window);
  }
}