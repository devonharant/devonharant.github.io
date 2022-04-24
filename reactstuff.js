'use strict';

const element = React.createElement;

const reactstuff = () =>{
    return(
        <div>THIS IS REACT CODE</div>
    );
};

const dom = document.querySelector("#reactcontainer");
ReactDOM.render(reactstuff, domContainer);