// import DocService from "../../services/DocService";
import LoginService from "../../services/UserService";


export default class LoginUser {
    private loginService: LoginService;
   //  private docService: DocService
 
    constructor(loginService: LoginService) {
       this.loginService = loginService
      //  this.docService = docService
    }
 
    async execute(window: any): Promise<string | undefined> {
 
       const loggedUser = await this.loginService.login(window);
 
       return loggedUser;
 
    }
 
 }