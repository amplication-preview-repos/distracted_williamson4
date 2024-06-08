import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StoreCreditService } from "./storeCredit.service";
import { StoreCreditControllerBase } from "./base/storeCredit.controller.base";

@swagger.ApiTags("storeCredits")
@common.Controller("storeCredits")
export class StoreCreditController extends StoreCreditControllerBase {
  constructor(protected readonly service: StoreCreditService) {
    super(service);
  }
}
