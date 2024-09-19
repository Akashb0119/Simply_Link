import './App.css';
import Coursegoal from './componens/Coursegoal';
import {ConstMethod} from './componens/constMethod/constMethod'


function App() {
  return (
    <div className="App">
     <Coursegoal title='Testing' description='Working r not'>
     <p>children</p>
    </Coursegoal>
    <ConstMethod title='Const' description='Using interface customer type'/>

   
    </div>
    
  );
}

export default App;
