import * as graphql from "@nestjs/graphql";
import { SpaResolverBase } from "./base/spa.resolver.base";
import { Spa } from "./base/Spa";
import { SpaService } from "./spa.service";

@graphql.Resolver(() => Spa)
export class SpaResolver extends SpaResolverBase {
  constructor(protected readonly service: SpaService) {
    super(service);
  }
}
