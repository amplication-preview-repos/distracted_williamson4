import { TherapistWhereInput } from "./TherapistWhereInput";
import { TherapistOrderByInput } from "./TherapistOrderByInput";

export type TherapistFindManyArgs = {
  where?: TherapistWhereInput;
  orderBy?: Array<TherapistOrderByInput>;
  skip?: number;
  take?: number;
};
