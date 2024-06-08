import { Module } from "@nestjs/common";
import { StoreCreditModuleBase } from "./base/storeCredit.module.base";
import { StoreCreditService } from "./storeCredit.service";
import { StoreCreditController } from "./storeCredit.controller";
import { StoreCreditResolver } from "./storeCredit.resolver";

@Module({
  imports: [StoreCreditModuleBase],
  controllers: [StoreCreditController],
  providers: [StoreCreditService, StoreCreditResolver],
  exports: [StoreCreditService],
})
export class StoreCreditModule {}
