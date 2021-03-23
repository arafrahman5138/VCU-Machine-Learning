import React, { useContext } from "react";
import Chart from '../components/ChartSample'
import DragChart from '../components/TestingDragChart'
import Footer from '../components/Footer'

function Home() {
    return (
        <>
        <h1 align="center">Home</h1>
        Welcome Student!
        <DragChart/>    

        <Footer/>
        </>

    )
}

export default Home