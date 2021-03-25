const React = require('react');
const ReactDom = require('react-dom');

class App extends React.Component{
    render(){
        return(
            <Test/>
        )
    }
}

class Test extends React.Component{
    render(){
        return(
            <h1>zzzzzzz</h1>
        )
    }
}

ReactDom.render(<App/> , document.getElementById('root'));