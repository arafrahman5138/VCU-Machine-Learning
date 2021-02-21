// Uncomment commented code on this file and the page button files if you want styled buttons

import React from "react";
import './ModuleNavHeader.css'
import { NextModuleButton } from './NextModuleButton'
import { PrevModuleButton } from './PrevModuleButton'

function ModuleNavHeader(props) {
    return (
        <> 
        <div className='space'>
            <div className='header-container'>
                <div className='item-container'>
                    <div className='buttons'> 
                        <PrevModuleButton title='Previous Module' link={props.prevLink}/>
                        {/* <PrevModuleButton link={props.prevLink}>Previous Module</PrevModuleButton> */}
                    </div>
                    <div className='title'>
                        <p>{props.title}</p>
                    </div>
                    <div className='buttons'> 
                        <NextModuleButton title='Next Module' link={props.nextLink}/>
                        {/* <NextModuleButton link={props.nextLink}>Next Module</NextModuleButton> */}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ModuleNavHeader