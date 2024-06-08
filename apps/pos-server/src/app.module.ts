import { Module } from "@nestjs/common";
import { SpaModule } from "./spa/spa.module";
import { TherapistModule } from "./therapist/therapist.module";
import { CheckInModule } from "./checkIn/checkIn.module";
import { OrderModule } from "./order/order.module";
import { StoreCreditModule } from "./storeCredit/storeCredit.module";
import { DiscountModule } from "./discount/discount.module";
import { AddonModule } from "./addon/addon.module";
import { OrderItemModule } from "./orderItem/orderItem.module";
import { CheckOutModule } from "./checkOut/checkOut.module";
import { UserModule } from "./user/user.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    SpaModule,
    TherapistModule,
    CheckInModule,
    OrderModule,
    StoreCreditModule,
    DiscountModule,
    AddonModule,
    OrderItemModule,
    CheckOutModule,
    UserModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
