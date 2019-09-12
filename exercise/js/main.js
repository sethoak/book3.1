/*
    Purpose:
    Get a random number fact and append it to the DOM.
*/

import data from "./data.js";
import dom from "./dom.js";

data.getNumberTrivia().then(triviaResponse => dom.printToDom(triviaResponse));

/*
main.js is the module that your HTML file references. Notice the import 
statements at the top. This is how other JS modules are pulled in by your 
application. So even though your index.html only specifies one Javascript 
file, your application will now look at import statements and pull in those 
Javascript modules for you.
*/
