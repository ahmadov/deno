import requiredArgs from '../_lib/requiredArgs/index.ts'
import { secondsInMinute } from '../constants/index.ts'

/**
 * @name minutesToSeconds
 * @category Conversion Helpers
 * @summary Convert minutes to seconds.
 *
 * @description
 * Convert a number of minutes to a full number of seconds.
 *
 * @param { number } minutes - number of minutes to be converted
 *
 * @returns {number} the number of minutes converted in seconds
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Convert 2 minutes to seconds
 * const result = minutesToSeconds(2)
 * //=> 120
 */
export default function minutesToSeconds(minutes: number): number {
  requiredArgs(1, arguments)
  return Math.floor(minutes * secondsInMinute)
}
