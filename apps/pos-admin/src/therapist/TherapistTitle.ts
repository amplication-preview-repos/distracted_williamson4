import { Therapist as TTherapist } from "../api/therapist/Therapist";

export const THERAPIST_TITLE_FIELD = "id";

export const TherapistTitle = (record: TTherapist): string => {
  return record.id?.toString() || String(record.id);
};
