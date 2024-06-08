/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { StoreCredit } from "./StoreCredit";
import { StoreCreditCountArgs } from "./StoreCreditCountArgs";
import { StoreCreditFindManyArgs } from "./StoreCreditFindManyArgs";
import { StoreCreditFindUniqueArgs } from "./StoreCreditFindUniqueArgs";
import { DeleteStoreCreditArgs } from "./DeleteStoreCreditArgs";
import { StoreCreditService } from "../storeCredit.service";
@graphql.Resolver(() => StoreCredit)
export class StoreCreditResolverBase {
  constructor(protected readonly service: StoreCreditService) {}

  async _storeCreditsMeta(
    @graphql.Args() args: StoreCreditCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [StoreCredit])
  async storeCredits(
    @graphql.Args() args: StoreCreditFindManyArgs
  ): Promise<StoreCredit[]> {
    return this.service.storeCredits(args);
  }

  @graphql.Query(() => StoreCredit, { nullable: true })
  async storeCredit(
    @graphql.Args() args: StoreCreditFindUniqueArgs
  ): Promise<StoreCredit | null> {
    const result = await this.service.storeCredit(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => StoreCredit)
  async deleteStoreCredit(
    @graphql.Args() args: DeleteStoreCreditArgs
  ): Promise<StoreCredit | null> {
    try {
      return await this.service.deleteStoreCredit(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
