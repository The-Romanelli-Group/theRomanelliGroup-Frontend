export const slugify = (str = "") =>
  str
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const buildPropertySlug = (address, listingKey) => {
  const addressSlug = slugify(address);
  return addressSlug ? `${addressSlug}-${listingKey}` : listingKey;
};

// Reads the real ListingKey back out of a slug. Falls back to returning
// the input unchanged for old links shared before slugs existed (plain
// "/properties/20260915002850104520000000"), so nothing already indexed
// or shared ever breaks.
export const extractListingKeyFromSlug = (slugOrId) => {
  if (!slugOrId) return slugOrId;
  const lastDash = slugOrId.lastIndexOf("-");
  return lastDash === -1 ? slugOrId : slugOrId.slice(lastDash + 1);
};