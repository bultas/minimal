/**
 * @typedef { import("./types").Person } Person
 */

/**
 * @param {string} name
 * @returns {string}
 */
export function hello(name) {
  return `Hello ${name}`;
}

/**
 * @param { Person } person
 */
export function bye(person) {
  return `Bye ${person.name}`;
}
