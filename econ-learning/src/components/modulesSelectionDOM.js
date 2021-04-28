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
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import { withStyles, makeStyles } from '@material-ui/core/styles';

export default function ModulesSelectionDOM() {
    let match = useRouteMatch();

    const CustomTooltip = withStyles((theme) => ({
        tooltip: {
          backgroundColor: '#7ED2EF',
          color: 'white',
          boxShadow: theme.shadows[1],
          fontSize: 20,
        },
      }))(Tooltip);
    
    return (
        <Switch>
        
        {/* Dynamic route creation */}
        <Route path="/modules/:module(\d+)/:page(\d+)?"> 
            <ModulePages/>
        </Route>
        
        {/* This map function created all of the module cards on the modules page */}
        <Route path="/modules">
        <div className="content">
            <h1 align="center">Modules</h1>
            <div className="modulesSelection">
                {
                modulesData.map((data, key) => {
                    var style = {
                        backgroundImage: `url(/images/${data.Image})`,
                    }
                    return (
                        <div className="modulesDisplay">
                            <CustomTooltip title={data.Description} placement="right">
                            <Link to={`${match.url}/${key}`}>
                            <div className="modulesCard" style={style}>
                                <div className="cardOverlay"></div>
                                <p>{data.Title}</p>
                            </div>
                            </Link>
                            </CustomTooltip>
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

