import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StoreCreditServiceBase } from "./base/storeCredit.service.base";

@Injectable()
export class StoreCreditService extends StoreCreditServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
