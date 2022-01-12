import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import Pokemon from "./Pokemon";
import TermsAndConditions from "./TermsAndConditions";
import Home from "./Home";
import Move from "./Moves";


const Router = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/pokemon/:name">
                    <Pokemon/>
                </Route>
                <Route path="/move/:name">
                    <Move/>
                </Route>
                <Route path="/terms-conditions">
                    <TermsAndConditions/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
            <footer>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/terms-conditions">Terms & Conditions</Link>
                    </li>
                </ul>
            </footer>
        </BrowserRouter>
    );
};

export default Router;
