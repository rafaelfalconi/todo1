import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import Pokemon from "./Pokemon";
import TermsAndConditions from "./TermsAndConditions";
import Home from "./Home";
import Move from "./Moves";
import NotFound from "./NotFound";


const Router = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/pokemon/:name">
                    <Pokemon/>
                </Route>
                <Route exact path="/move/:name">
                    <Move/>
                </Route>
                <Route exact path="/terms-conditions">
                    <TermsAndConditions/>
                </Route>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route>
                    <NotFound/>
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
