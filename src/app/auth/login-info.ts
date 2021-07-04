export class AuthLoginInfo {
    
    constructor(private username: string, private  email: string , private password: string) {
        this.username = username;
        this.email = email ;
        this.password = password;
    }
}
