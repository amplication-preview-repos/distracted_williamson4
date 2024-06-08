import * as graphql from "@nestjs/graphql";
import { TherapistResolverBase } from "./base/therapist.resolver.base";
import { Therapist } from "./base/Therapist";
import { TherapistService } from "./therapist.service";

@graphql.Resolver(() => Therapist)
export class TherapistResolver extends TherapistResolverBase {
  constructor(protected readonly service: TherapistService) {
    super(service);
  }
}
