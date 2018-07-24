import * as React from 'react';
import * as ReactDOM from 'react-dom'; 
import {observable, action} from 'mobx';
import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';

class AppState {
  @observable Deep = 0;
  @observable Show = 'visible';
  constructor() {
  }
  @action onclick = () => {
    this.Deep++;
  }
  @action showMy = () =>{
    if (this.Show === 'visible' ) 
      this.Show = 'hidden' 
    else 
        this.Show = 'visible';
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
               <p>Hello react mobx typescrypt &nbsp; {appState.Deep}</p>            
            </div>  
            <div style={{ padding:10}}>
               <button onClick={appState.onclick}>Increment</button>
            </div>
            <div style={{ padding:10}}>
              <button onClick={appState.showMy}>{appState.Show}</button>
            </div>  
            </div>
          </div>);
  }   
}

ReactDOM.render(<App appState={appState}/>, document.getElementById('root'));