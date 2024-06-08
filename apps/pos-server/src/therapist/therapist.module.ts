import { Module } from "@nestjs/common";
import { TherapistModuleBase } from "./base/therapist.module.base";
import { TherapistService } from "./therapist.service";
import { TherapistController } from "./therapist.controller";
import { TherapistResolver } from "./therapist.resolver";

@Module({
  imports: [TherapistModuleBase],
  controllers: [TherapistController],
  providers: [TherapistService, TherapistResolver],
  exports: [TherapistService],
})
export class TherapistModule {}
