export interface TideGetQuery {
  /**
   * The number of items to skip before starting to collect the result set.
   */
  offset?: number;
  /**
   * Search string to query
   */
  textSearch?: string;
}
