import * as React from 'react';
import * as ReactDOM from 'react-dom'; 
import {observable, action, computed} from 'mobx';
import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';

class AppState {
  @observable a = 1;
  @observable b = 1;

  @observable Show = 'visible';
  constructor() {
     
  }
  @action onclickA = () => {
    this.a++;
  }
  @action onclickB = () => {
    this.b++;
  }
  @action showMy = () =>{
    if (this.Show === 'visible' ) 
      this.Show = 'hidden' 
    else 
        this.Show = 'visible';
  }
  @computed get perimetr() {
    return (this.a+this.b)*2;
  }
  perim () {
    return (this.a+this.b)*2;
  }
}

const appState = new AppState();

@observer
class App extends React.Component<{appState: AppState}> {

render() {
  return (<div style={{display: 'flex', justifyContent: 'center', textAlign: 'center'}}>
            <div style={{justifyContent: 'center', background:'#ddd', border :'4px double black',textAlign: 'center', flexWrap: 'wrap', flexDirection: 'column', width:200}}>
              <DevTools />
            <div style={{textAlign: 'center', padding: 25, visibility:appState.Show, background:'#eee'}}> 
               <p>Hello react mobx typescrypt</p>
               <p>width (a): {appState.a} &nbsp; <br/>height (b): {appState.b} </p>
            </div>  
            <div style={{ padding:10}}>
               <button onClick={appState.onclickA}>Increment A</button>
               <button onClick={appState.onclickB}>Increment B</button>
            </div>
            <div style={{ padding:10}}>
              <button onClick={appState.showMy}>{appState.Show}</button>
              <p>Perimetr computed {appState.perimetr}</p>
              <p>Perimetr not computed {appState.perim()}</p>
            </div>  
            </div>
          </div>);
  }   
}

ReactDOM.render(<App appState={appState}/>, document.getElementById('root'));