/**
 * 
 * @param {number[]} numbers 
 */


export default function shuffle(numbers) {
    return numbers.sort(() => Math.random() - 0.5);
}