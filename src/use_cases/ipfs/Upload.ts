import IPFSService from "../../services/IPFSService";

export class Upload {
  constructor(private readonly itemService: IPFSService) {}

  async execute(file: File) {
    return this.itemService.uploadToIpfs(file);
  }
}