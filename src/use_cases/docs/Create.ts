import { Doc } from "../../entities/Doc";
import DocService from "../../services/DocService";

export class Create {
  constructor(private readonly itemService: DocService) {}

  async execute(newDoc: Doc, window: any) {
    return this.itemService.create(newDoc, window);
  }
}
