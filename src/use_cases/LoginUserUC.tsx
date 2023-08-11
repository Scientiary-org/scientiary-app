import LoginService from "../services/LoginUserService";


export default class LoginUser {
    private loginService: LoginService;
 
    constructor(loginService: LoginService) {
       this.loginService = loginService
    }
 
    async execute(window: any): Promise<string | undefined> {
 
       const loggedUser = await this.loginService.login(window);
 
       return loggedUser;
 
    }
 
 }