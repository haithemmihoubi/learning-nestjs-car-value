import {Test} from "@nestjs/testing";
import {AuthService} from "./auth.service";
import {UsersService} from "./users.service";

it('can read an instance of auth service', async () => {
    //create a fake copy of users service
     const fakeUsersService= {
         find:()=>Promise.resolve([]) ,
         create:(email:string,password:string)=>Promise.resolve({id:1,email,password})
     }
    // @ts-ignore
    const module = await Test.createTestingModule({
        providers: [AuthService,],

    }).compile()
    // copy of authentication service
    const service = module.get(AuthService);
});