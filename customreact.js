'use strict';

const element = React.createElement;

class CustomReact extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(<div>REACT HERE!!</div>)
    }
}

const domContainer = document.querySelector('#reactcontainer');
const root = ReactDOM.createRoot(domContainer);
root.render(CustomReact, domContainer);