'use strict';

const element = React.createElement;

const reactstuff = () =>{
    return(
        <div>this works</div>
    );
};

const dom = document.querySelector("#reactcontainer");
ReactDOM.render(element(reactstuff), domContainer);