import { SpaWhereInput } from "./SpaWhereInput";
import { SpaOrderByInput } from "./SpaOrderByInput";

export type SpaFindManyArgs = {
  where?: SpaWhereInput;
  orderBy?: Array<SpaOrderByInput>;
  skip?: number;
  take?: number;
};
