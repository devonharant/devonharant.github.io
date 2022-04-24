'use strict';

const element = React.createElement;

function reactstuff(){
    return(
        <div>THIS IS REACT CODE</div>
    );
};

const dom = document.querySelector("#reactcontainer");
ReactDOM.render(element(reactstuff), domContainer);