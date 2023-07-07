/*
    Responsbility:

        Manage application state and provide functions to change permanent
        state with fetch() call to the API.
*/

// access API craftRequest and store in applicationState
export const fetchCraftRequests = () => {
  return fetch(`${API}/craftRequests`)
      .then(response => response.json())
      .then(
          (request) => {
              // Store the external state in application state
              applicationState.craftRequests = request
          }
      )
}

// access API craftCraftType and store in applicationState
export const fetchCraftTypes = () => {
  return fetch(`${API}/craftTypes`)
      .then(response => response.json())
      .then(
          (craftType) => {
              // Store the external state in application state
              applicationState.craftCraftTypes = craftType
          }
      )
}

const API = "http://localhost:8088";

const applicationState = {
  craftTypes: [],
  craftRequests: [],
  crafters: [],
  ingredients: [],
  userChoices: {
    crafterId: 0,
    chosenIngredients: new Set(),
    requestId: 0
  }
};

/*
  Once a new craft completion has been saved in the API,
  add all of the ingredients chosen by the user.
*/
const createCraftIngredients = (completion) => {
  const fetchArray = [];

  applicationState.userChoices.chosenIngredients.forEach(
    (chosenIngredientId) => {
      fetchArray.push(
        fetch(`${API}/craftIngredients`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            ingredientId: chosenIngredientId,
            completionId: completion.id
          })
        })
          .then((response) => response.json())
          .then(() => {
            console.log("Fetch call done");
          })
      );
    }
  );

  // This is where all the fetches (Promises) all run and resolve
  Promise.all(fetchArray).then(() => {
    console.log("All fetches complete");
    applicationState.userChoices.chosenIngredients.clear();
  });
};

export const setIngredients = (id) => {
  // Step 1: Use the has() method to determine if the Set has the ingredient
  // Step 2: If it does, remove it with delete() method
  // Step 3: If it does not, add it with add() method
};
