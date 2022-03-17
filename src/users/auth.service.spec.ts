import {Test} from "@nestjs/testing";
import {AuthService} from "./auth.service";

it('can read an instance of auth service', async () => {
    const module = await Test.createTestingModule({
        providers: [AuthService]
    }).compile()
    // copy of authentication service
    const service = module.get(AuthService);
});