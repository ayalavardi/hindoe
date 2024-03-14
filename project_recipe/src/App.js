import './App.css';
import { Main } from '../src/Comp/Main';
import { Operations } from './Comp/Operations';
import store from "./Comp/Store";
import { Provider } from 'react-redux';
import Payment from './Comp/Payment';


function App() {
  return <>
  {/* <BasicTextFields></BasicTextFields> */}
  <Provider store={store}>
<Main/>
{/* <Payment></Payment> */}
</Provider>
{/* <BasicTextFields></BasicTextFields> */}
{/* <BasicModal/> */}
{/* <RecipeReviewCard/> */}
{/* <AccountMenu></AccountMenu> */}
{/* <Login></Login> */}
{/* <PrimarySearchAppBar></PrimarySearchAppBar> */}
{/* <Operations></Operations> */}
{/* <Gg></Gg> */}
</>
}

export default App;