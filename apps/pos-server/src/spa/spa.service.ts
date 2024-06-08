import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SpaServiceBase } from "./base/spa.service.base";

@Injectable()
export class SpaService extends SpaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
