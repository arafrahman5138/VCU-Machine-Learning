import React from "react";
import ModuleNavHeader from '../components/ModuleNavHeader.js'
import * as Styled from './StyledButton'


import {
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  Redirect
} from "react-router-dom";


import { modulesData } from "./modulesData.js";
import './modulePages.css';

export default function ModulePagesDOM() {
    let { module, page } = useParams();

    module = parseInt(module);

    if (modulesData[module] === undefined) {
      return <Redirect to={`/modules`}/>;
    }

    if (page === undefined) {
        page = 0;
    }

    page = parseInt(page);

    if (modulesData[module].Pages[page] === undefined) {
      return <Redirect to={`/modules`}/>
    }

    return (
      <div>
          <div className="topNavigation">
            {/* <p>&lt;Previous Module</p>
            <h1>{modulesData[module].Title}</h1>
            <p>Next Module&gt;</p> */}
            <ModuleNavHeader title={modulesData[module].Title} prevLink={`/modules/${module-1}`} nextLink={`/modules/${module+1}`}/>
          </div>
          

          <h2 className="modTitle">{modulesData[module].Pages[page][0]}</h2>
          <div className="image" align="center">
            <img className = "modImg" src={`/images/${modulesData[module].ModuleImg[page]}`} />
          </div>
          {console.log("name" + modulesData[module].ModuleImg[0])}
          <div className="pageContent">
             {modulesData[module].Pages[page][1]}
          </div>
          
          <BottomNavGen module={module} page={page}/>
          
      </div>
    );
}


function BottomNavGen(props) {
    const module = props.module;
    const pages = props.page;
    const len = modulesData[module].Pages.length;

    
    if ((len - pages - 1) === 0) {
      return (<div className="bottomNavigation">
        {/* <h4><Link to={`/modules/${module}/${pages - 1}`} replace>Previous Page</Link></h4> */}
        <Link to={`/modules/${module}/${pages - 1}`} replace>
          <Styled.Button> Previous Page </Styled.Button>
        </Link>

        <p>Page {pages + 1}/{len}</p>
        {/* <h4><Link to={`/quiz${module+1}`}>Start Quiz</Link></h4> */}

        <Link to={`/quiz${module+1}`} replace>
          <Styled.Button> Start Quiz </Styled.Button>
        </Link>
      </div>)
    }

    if (pages === 0) {
      return (<div className="bottomNavigation">
        {/* <h4>Previous Page</h4> */}
        <Styled.Button> Previous Page </Styled.Button>

        <p>Page {pages + 1}/{len}</p>
        {/* <h4><Link to={`/modules/${module}/${pages + 1}`} replace>Next Page</Link></h4> */}

        <Link to={`/modules/${module}/${pages + 1}`} replace>
          <Styled.Button> Next Page </Styled.Button>
        </Link>
      </div>)
    }


    return (<div className="bottomNavigation">
        {/* <h4><Link to={`/modules/${module}/${pages - 1}`} replace>Previous Page</Link></h4>
        <p>Page {pages + 1}/{len}</p>
        <h4><Link to={`/modules/${module}/${pages + 1}`} replace>Next Page</Link></h4> */}

        <Link to={`/modules/${module}/${pages - 1}`} replace>
          <Styled.Button> Previous Page </Styled.Button>
        </Link>

        <p>Page {pages + 1}/{len}</p>

        <Link to={`/modules/${module}/${pages + 1}`} replace>
          <Styled.Button> Next Page </Styled.Button>
        </Link>

    </div>)
}
