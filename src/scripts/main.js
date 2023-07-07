/* 
    Responsibiity: 

    Initiate process to covert all state to HTML (via the
    GnomeMercy component) and update the DOM with the 
    final result.

    Also, listen for any state change and covert state to
    HTML again.
*/

import { GnomeMercy } from "./GnomeMercy.js";

const mainContainer = document.querySelector("#container");

const render = () => {
  /*
        Fetch all of the database so that it's stored in 
        application state. After all data is fetched, 
        invoke GnomeMercy component to kick off the conversion
        of state to HTML
    */
};

render();

// Listen for state changes and invoke render() when it does
