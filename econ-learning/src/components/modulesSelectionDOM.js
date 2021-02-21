import React from "react";
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import ModulePages from './modulePagesDOM.js';
import { modulesData } from "./modulesData.js";
import './moduleSelection.css';

export default function ModulesSelectionDOM() {
    let match = useRouteMatch();
    
    return (
        <Switch>
        
        <Route path="/modules/:module(\d+)/:page(\d+)?">
            <ModulePages/>
        </Route>
        
        <Route path="/modules">
        <div className="content">
            <h1 align="center">Modules</h1>
            <div className="modulesSelection">
                {
                modulesData.map((data, key) => {
                    var style = {
                        backgroundImage: `url(${data.Image})`,
                    }
                    return (
                        <div className="modulesDisplay">
                            <Link to={`${match.url}/${key}`}>
                            <div className="modulesCard" style={style}>
                                <div className="cardOverlay"></div>
                                <p>{data.Title}</p>
                            </div>
                            </Link>
                        </div>
                    )
                })
                }
            </div>
        </div>
        </Route>

        
        </Switch>
    )
}

