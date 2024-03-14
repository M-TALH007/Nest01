import { Controller , Get, Put , Patch , Delete , Post , Body,Redirect, Param } from "@nestjs/common";
interface vedeoInterface{
    id : number;
    name : string;
}

@Controller("/users")

 export class UserController {

    // @Post('/profile')
    // @Redirect('/users/account')
    // getProfile(){
    //     return new Promise((resolve, reject) => {
    //         resolve({
    //             key : "talha is doing nest js"
    //         })
    //     });
    // }
    // @Get("/account")
    // redirectAcoount(){
    //     return "this is redirect from post to get "
    // }
    // this is static but we can do it manually by giving url and conditions vedeo 5



    // this is for making separate interface
    // @Get('/profile/:id/:name')
    // getProfile(@Param() Params:vedeoInterface){
    //     console.log(Params.name)
    //     return Params
    // }

    // this is simple for getting one value 
    // @Get('/profile/:id')
    // getProfile(@Param() params:Record<string,any>){
    //   console.log(params);
    //   return params.id
    // }

    // if we want to get more values then
    // @Get('/profile/:id/:name')
    // getProfile(@Param() params:any){

    //     return params
    // }


    // if we want use body decorator 
    @Post('/profile')
    getProfile(@Body() requestData:any){
        console.log(requestData.name);
        return requestData
    }
}