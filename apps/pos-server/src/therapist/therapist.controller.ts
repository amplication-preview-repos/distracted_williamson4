import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TherapistService } from "./therapist.service";
import { TherapistControllerBase } from "./base/therapist.controller.base";

@swagger.ApiTags("therapists")
@common.Controller("therapists")
export class TherapistController extends TherapistControllerBase {
  constructor(protected readonly service: TherapistService) {
    super(service);
  }
}
