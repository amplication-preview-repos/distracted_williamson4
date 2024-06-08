import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TherapistServiceBase } from "./base/therapist.service.base";

@Injectable()
export class TherapistService extends TherapistServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
