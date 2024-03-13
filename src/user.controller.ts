import { Controller , Get, Put , Patch , Delete , Post , Redirect } from "@nestjs/common";
import { get } from "http";

@Controller("/users")

 export class UserController {

    @Post('/profile')
    @Redirect('/users/account')
    getProfile(){
        return new Promise((resolve, reject) => {
            resolve({
                key : "talha is doing nest js"
            })
        });
    }
    @Get("/account")
    redirectAcoount(){
        return "this is redirect from post to get "
    }
    // this is static but we can do it manually by giving url and 
    // most probably use when we do some logic

}