import './App.css';
import { Navbar } from './components/Navbar';
// import {DrawerComponent} from './components/DrawerComponent'
import DateTimePickerComponent from './components/DateTimePickerComponent';
import { ButtonGroupComponent } from './components/ButtonGroupComponent'
import { CameraPreview } from './components/CameraPreview'
function App() {

  return (

    <div className="App" >
      {/* <DrawerComponent/> */}
      <Navbar/>
      <DateTimePickerComponent />
      <ButtonGroupComponent />
      <CameraPreview />
    </div>
  );
}

export default App;
