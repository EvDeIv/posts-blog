/**
 * To check if callback isn't null and run it
 * @param callback A unction
 * @returns callback if exists
 */
export function runCallback(callback: () => void): void {
  // eslint-disable-next-line @typescript-eslint/prefer-optional-chain
  return callback && callback()
}
