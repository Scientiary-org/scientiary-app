import LoginService from "../services/LoginUserService";


export default class LoginUser {
    private loginService: LoginService;
 
    constructor(loginService: LoginService) {
       this.loginService = loginService
    }
 
    async execute(window: any): Promise<string | undefined> {
 
       const loggedUser = await this.loginService.login(window);
       const test = await this.loginService.create({name: 'dbfb', year: '2354', author: 'geheh', ipfsHash: 'fbfh5'}, window)
       const fetch = await this.loginService.findByUser('0xBb5d350a9fc5d02E02B1C3F696541bcf00A77812', window);
 
       return loggedUser;
 
    }
 
 }