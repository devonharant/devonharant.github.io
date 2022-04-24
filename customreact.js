'use strict';

const element = React.createElement;

const CustomReact = () =>{
    return (
        <div>REACT HERE</div>
    );
}

const domContainer = document.querySelector('#reactcontainer');
const root = ReactDOM.createRoot(domContainer);
root.render(element(CustomReact));