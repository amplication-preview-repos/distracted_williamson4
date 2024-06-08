import { StoreCreditWhereInput } from "./StoreCreditWhereInput";
import { StoreCreditOrderByInput } from "./StoreCreditOrderByInput";

export type StoreCreditFindManyArgs = {
  where?: StoreCreditWhereInput;
  orderBy?: Array<StoreCreditOrderByInput>;
  skip?: number;
  take?: number;
};
