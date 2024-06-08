import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SpaService } from "./spa.service";
import { SpaControllerBase } from "./base/spa.controller.base";

@swagger.ApiTags("spas")
@common.Controller("spas")
export class SpaController extends SpaControllerBase {
  constructor(protected readonly service: SpaService) {
    super(service);
  }
}
