import { Spa as TSpa } from "../api/spa/Spa";

export const SPA_TITLE_FIELD = "id";

export const SpaTitle = (record: TSpa): string => {
  return record.id?.toString() || String(record.id);
};
