export type UtilitySlug =
  | "oncor"
  | "centerpoint"
  | "aepnorth"
  | "aepcentral"
  | "tnmp"
  | "lubbock";

export interface Utility {
  slug: UtilitySlug;
  name: string;
  code: string;
}
