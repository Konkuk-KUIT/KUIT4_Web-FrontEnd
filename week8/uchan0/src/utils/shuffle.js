/**
 *
 * @param {number[]} numbers - An array of numbers to shuffle
 */

export default function shuffle(numbers) {
  return numbers.sort(() => Math.random() - 0.5);
}
