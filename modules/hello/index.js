/**
 * @param {string} name
 * @returns {string}
 */
export function hello(name) {
  return `Hello ${name}`;
}

/**
 * @param { import("./types.d").Person } person
 */
export function bye(person) {
  return `Bye ${person.name}`;
}
