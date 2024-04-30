export type NumberParams = {
  /**
   * The minimum range of available numbers greater than or lesser than the given number 
   * @default 1e6
   */
  interval?: number;
  /**
   * Whether the threshold numbers should be included or not
   * @default false
   */
  including?: boolean;
};
