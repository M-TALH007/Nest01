import { Controller ,Get } from "@nestjs/common";

@Controller('/album')
export class albumController{
    @Get()
    getAlbum(){
        return new Promise((resolve, reject) => {
            resolve({
                Key : "this is album controller"
            })
        })
    }
    

}