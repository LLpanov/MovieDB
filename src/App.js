import './App.scss';
import {Route, Routes} from "react-router-dom";
import {Home, Layout, MovieDetail, PageNotFound} from "./components";

function App() {
    return (<div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path={':id'} element={<MovieDetail/>}/>
                    <Route path={'*'} element={<PageNotFound/>}/>
                </Route>

            </Routes>

        </div>


    );
}

export default App;
