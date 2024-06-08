import { Module } from "@nestjs/common";
import { SpaModuleBase } from "./base/spa.module.base";
import { SpaService } from "./spa.service";
import { SpaController } from "./spa.controller";
import { SpaResolver } from "./spa.resolver";

@Module({
  imports: [SpaModuleBase],
  controllers: [SpaController],
  providers: [SpaService, SpaResolver],
  exports: [SpaService],
})
export class SpaModule {}
