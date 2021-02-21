import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chartjs-plugin-dragdata';
import './ChartSample.css';

const five = {
    labels: ['January', 'February', 'March',
        'April', 'May'],
    datasets: [
        {
            label: 'Actual Price',
            lineTension: 0,
            backgroundColor: '#7ED2EF',
            borderColor: '#7ED2EF',
            borderWidth: 2,
            data: [65, 59, 80, 81, 56],
            fill: false,
        },
        {
            label: 'Your Prediction',
            lineTension: 0,
            backgroundColor: '#1C9CD3',
            borderColor: '#1C9CD3',
            borderWidth: 2,
            data: [15, 20, 70, 68, 65],
            fill: false
        },
        {
            label: 'Machine\'s predicitons',
            lineTension: 0,
            backgroundColor: '#195D81',
            borderColor: '#195D81',
            borderWidth: 2,
            data: [15, 25, 40, 50, 49],
            fill: false

        }
    ]
}

const tenOptions = {
    options: {
        scales: {
            xAxes: [{
                gridLines: { display: false, color: 'grey', },
                ticks: { fontColor: '#3C3C3C', fontSize: 14, },
            }],
            yAxes: [{
                scaleLabel: { display: true, labelString: 'Color Strength', fontSize: 14, },
                ticks: {
                    display: true,
                    min: -5,
                    max: 100,
                    scaleSteps: 50,
                    scaleStartValue: -50,
                    maxTicksLimit: 4,
                    fontColor: '#9B9B9B',
                    padding: 30,
                    callback: point => (point < 0 ? '' : point),
                }
            }],
        },
        maintainAspectRatio: false,
        responsive: true
    }
}

const ten = {
    labels: ['January', 'February', 'March',
        'April', 'May', 'June', 'July', 'August', 'September', 'October'],
    datasets: [
        {
            label: 'Actual Price',
            lineTension: 0,
            backgroundColor: '#7ED2EF',
            borderColor: '#7ED2EF',
            borderWidth: 2,
            data: [65, 59, 80, 81, 56, 50, 40, 45, 55, 60],
            fill: false,
        },
        {
            label: 'Your Prediction',
            lineTension: 0,
            backgroundColor: '#1C9CD3',
            borderColor: '#1C9CD3',
            borderWidth: 2,
            data: [15, 20, 70, 68, 65, 55, 42, 40, 45, 55],
            fill: false
        },
        {
            label: 'Machine\'s predicitons',
            lineTension: 0,
            backgroundColor: '#195D81',
            borderColor: '#195D81',
            borderWidth: 2,
            data: [15, 25, 40, 50, 49, 50, 55, 50, 55, 50],
            fill: false

        }
    ]
}

const fifteen = {
    labels: ['January', 'February', 'March',
        'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March'],
    datasets: [
        {
            label: 'Actual Price',
            lineTension: 0,
            backgroundColor: '#7ED2EF',
            borderColor: '#7ED2EF',
            borderWidth: 2,
            data: [65, 59, 80, 81, 56, 50, 40, 45, 55, 60, 70, 75, 70, 62, 60],
            fill: false,
        },
        {
            label: 'Your Prediction',
            lineTension: 0,
            backgroundColor: '#1C9CD3',
            borderColor: '#1C9CD3',
            borderWidth: 2,
            data: [15, 20, 70, 68, 65, 55, 42, 40, 45, 55, 60, 65, 70, 78, 79],
            fill: false
        },
        {
            label: 'Machine\'s predicitons',
            lineTension: 0,
            backgroundColor: '#195D81',
            borderColor: '#195D81',
            borderWidth: 2,
            data: [15, 25, 40, 50, 49, 50, 55, 50, 55, 50, 68, 71, 78, 80, 75],
            fill: false

        }
    ]
}
export default class ChartSample extends React.Component {
    render() {
        return (
            <body class="formattingTest">
                <div className="chartFormat">
                    <div className="fiveElement" id="fiveElement">
                        <Line className="testing"
                            data={five}
                            options={{
                                title: {
                                    display: true,
                                    text: 'Stock price',
                                    fontSize: 20
                                },
                                legend: {
                                    display: true,
                                    position: 'right'
                                },
                                layout: {
                                },
                                maintainAspectRatio: false,
                                responsive: true

                            }}
                        />
                    </div>
                    <div className="tenElement" id="tenElement">
                        <Line className="testing2"
                            data={ten}
                            options={tenOptions}
                        />
                    </div>
                    <div className = "fifteenElement" id="fifteenElement">
                        <Line className="testing3"
                            data={fifteen}
                            options={{
                                title: {
                                    display: true,
                                    text: 'Stock price',
                                    fontSize: 20
                                },
                                legend: {
                                    display: true,
                                    position: 'right'
                                },
                                layout: {
                                    padding: {
                                        top: 0,
                                        bottom: 0,
                                        right: 0,
                                        left: 0
                                    }
                                },
                                maintainAspectRatio: false,
                                responsive: true

                            }}
                            />
                    </div>
                </div>
                <button class="chartFormat select" onClick={() => cycleCharts()}>Next Chart</button>
            </body>
        );
    }
}

/**function down_handler(event) {
    // check for data point near event location
    const points = document.getElementById('testing2').getElementAtEvent(event, { intersect: false });
    if (points.length > 0) {
        // grab nearest point, start dragging
        activePoint = points[0];
        canvas.onpointermove = move_handler;
    };
};

function up_handler(event) {
    // release grabbed point, stop dragging
    activePoint = null;
    canvas.onpointermove = null;
};

function move_handler(event) {
    // locate grabbed point in chart data
    if (activePoint != null) {
        var data = activePoint._chart.data;
        var datasetIndex = activePoint._datasetIndex;

        // read mouse position
        const helpers = Line.helpers;
        var position = helpers.getRelativePosition(event, document.getElementById('testing'));

        // convert mouse position to chart y axis value 
        var chartArea = document.getElementById('testing2').chartArea;
        var yAxis = document.getElementById('testing2').scales["y-axis-0"];
        var yValue = map(position.y, chartArea.bottom, chartArea.top, yAxis.min, yAxis.max);

        // update y value of active data point
        data.datasets[datasetIndex].data[activePoint._index] = yValue;
        window.myChart.update();
    };
};

// map value to other coordinate system
function map(value, start1, stop1, start2, stop2) {
    return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1))
};**/

var increment = 1;

function cycleCharts() {
    if (increment == 1) {
        document.getElementById('fiveElement').style.display = 'none'
        document.getElementById('tenElement').style.display = 'block'
        increment++;
        return
    }
    else if (increment == 2) {
        document.getElementById('tenElement').style.display = 'none'
        document.getElementById('fifteenElement').style.display = 'block'
        increment++;
        return
    }
    else if (increment == 3) {
        document.getElementById('fifteenElement').style.display = 'none'
        document.getElementById('fiveElement').style.display = 'block'
        increment = 1;
        return
    }
}