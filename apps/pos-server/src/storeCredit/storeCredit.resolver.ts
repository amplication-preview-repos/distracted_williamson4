import * as graphql from "@nestjs/graphql";
import { StoreCreditResolverBase } from "./base/storeCredit.resolver.base";
import { StoreCredit } from "./base/StoreCredit";
import { StoreCreditService } from "./storeCredit.service";

@graphql.Resolver(() => StoreCredit)
export class StoreCreditResolver extends StoreCreditResolverBase {
  constructor(protected readonly service: StoreCreditService) {
    super(service);
  }
}
