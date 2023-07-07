/*
  Responsibility
    Generate HTML for the dropdown of crafters. When one is
    selected, update transient state.
*/

export const Crafters = () => {
  const crafters = getCrafters();

  return `
    <h3>Crafters</h3>
    <select id="crafter">
        <option value="0">--Choose A Crafter--</option>
    </select>
  `;
};
