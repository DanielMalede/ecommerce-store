import { Login } from "@mui/icons-material";
import {Route, Routes } from "react-router-dom";
import "./App.css";
import {
  Header,
  Home,
  NotFound,
  CheckOut,
  ProtectedPage,
  SignIn,
  SignUp,
  About,
  Surfboards,
  Account,
  SideCart,
  Footer,ForgotPassword,
} from "./components/pages";
import { SurfBoardsProvider } from "./context/SurfBoardContext";
import {
  UserAuthContextProvider,
  useUserAuth,
} from "./context/UserAuthContext";

function App() {
  let { user } = useUserAuth();
  return (
    <div className="App">
        <SurfBoardsProvider>
        {!user ? "" : <Header />}
        {console.log(user)}
          <Routes>
            <Route path="/Home" element={user!=null?<Home />:<SignIn/>} />
            <Route path="SignIn" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/" element={<ProtectedPage><SignIn /></ProtectedPage>}/>
            <Route path="*" element={<NotFound />} />
            <Route path="About" element={user!=null?<About />:<SignIn/>} />
            <Route path="Store" element={user!=null?<Surfboards />:<SignIn/>} />
            <Route path="Account" element={user!=null?<Account />:<SignIn/>} />
            <Route path="SideCart" element={user!=null?<SideCart />:<SignIn/>} />
            <Route path="CheckOut" element={user!=null?<CheckOut />:<SignIn/>} />
            <Route path="ForgotPassword" element={<ForgotPassword/>} />
          </Routes>
        {!user?"":<Footer/>}
        </SurfBoardsProvider>
    </div>
  );
}

export default App;
