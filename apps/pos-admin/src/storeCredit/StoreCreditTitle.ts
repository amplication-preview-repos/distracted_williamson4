import { StoreCredit as TStoreCredit } from "../api/storeCredit/StoreCredit";

export const STORECREDIT_TITLE_FIELD = "id";

export const StoreCreditTitle = (record: TStoreCredit): string => {
  return record.id?.toString() || String(record.id);
};
