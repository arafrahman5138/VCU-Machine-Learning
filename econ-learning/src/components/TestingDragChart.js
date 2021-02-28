import React from 'react';
import { Line } from 'react-chartjs-2';
import './ChartSample.css';

const options = {
    title: {
        display: true,
        text: 'Stock price',
        fontSize: 20
    },
    legend: {
        display: true,
        position: 'right'
    },
    tooltips: { enabled: true },
    scales: {
        xAxes: [{
            gridLines: { dispaly: false, color: '#9B9B9B', },
            ticks: { fontColor: '#9B9B9B', fontSize: 14, },
        }],
        yAxes: [{
            scaleLabel: { display: false },
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
    dragData: true,
    onDragStart: function (e) {
        console.log(e)
    },
    onDrag: function (e, datasetIndex, index, value) {
        console.log(datasetIndex, index, value)
    },
    onDragEnd: function (e, datasetIndex, index, value) {
        console.log(datasetIndex, index, value)
    },
    maintainAspectRatio: false,
    responsive: true
};

var fiveLabel = {
    labels: ['January', 'February', 'March',
        'April', 'May']
};

var tenLabel = {
    labels: ['January', 'February', 'March',
        'April', 'May', 'June', 'July', 'August', 'September', 'October']
};

var fifteenLabel = {
    labels: ['January', 'February', 'March',
        'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March']
};

var fiveActual = {
    dataSet: [15, 20, 70, 68, 65]
};

var fiveYour = {
    dataSet: [65, 59, 80, 81, 56]
};

var fiveMachine = {
    dataSet: [15, 25, 40, 50, 49]
};

var tenActual = {
    dataSet: [65, 59, 80, 81, 56, 50, 40, 45, 55, 60]
};

var tenYour = {
    dataSet: [15, 20, 70, 68, 65, 55, 42, 40, 45, 55]
};

var tenMachine = {
    dataSet: [15, 25, 40, 50, 49, 50, 55, 50, 55, 50]
};

var fifteenActual = {
    dataSet: [65, 59, 80, 81, 56, 50, 40, 45, 55, 60, 70, 75, 70, 62, 60]
};

var fifteenYour = {
    dataSet: [15, 20, 70, 68, 65, 55, 42, 40, 45, 55, 60, 65, 70, 78, 79]
};

var fifteenMachine = {
    dataSet: [15, 25, 40, 50, 49, 50, 55, 50, 55, 50, 68, 71, 78, 80, 75]
};

var ten = {
    labels: ['January', 'February', 'March',
        'April', 'May', 'June', 'July', 'August', 'September', 'October'],
    datasets: [
        {
            data: [65, 59, 80, 81, 56, 50, 40, 45, 55, 60]
        },
        {
            data: [15, 20, 70, 68, 65, 55, 42, 40, 45, 55]
        },
        {
            data: [15, 25, 40, 50, 49, 50, 55, 50, 55, 50]
        }
    ]
};

var fifteen = {
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
};

export default class DraggableGraph extends React.Component {

    render() {

        const dataFive = {
            labels: fiveLabel.labels,
            datasets: [{
                    data: fiveYour.dataSet,
                    label: 'Actual Price',
                    lineTension: 0,
                    backgroundColor: '#7ED2EF',
                    borderColor: '#7ED2EF',
                    borderWidth: 2,
                    spanGaps: true,
                    fill: false,
                    lineTension: 0
                },
                {
                    data: fiveActual.dataSet,
                    label: 'Your Prediction',
                    lineTension: 0,
                    backgroundColor: '#1C9CD3',
                    borderColor: '#1C9CD3',
                    borderWidth: 2,
                    fill: false,
                    spanGaps: true,
                    lineTension: 0
                },
                {
                    data: fiveMachine.dataSet,
                    label: 'Machine\'s predicitons',
                    lineTension: 0,
                    backgroundColor: '#195D81',
                    borderColor: '#195D81',
                    borderWidth: 2,
                    fill: false,
                    spanGaps: true,
                    lineTension: 0
                }
            ],
        };

        const dataTen = {
            labels: tenLabel.labels,
            datasets: [{
                data: tenYour.dataSet,
                label: 'Actual Price',
                lineTension: 0,
                backgroundColor: '#7ED2EF',
                borderColor: '#7ED2EF',
                borderWidth: 2,
                spanGaps: true,
                fill: false,
                lineTension: 0
            },
            {
                data: tenActual.dataSet,
                label: 'Your Prediction',
                lineTension: 0,
                backgroundColor: '#1C9CD3',
                borderColor: '#1C9CD3',
                borderWidth: 2,
                fill: false,
                spanGaps: true,
                lineTension: 0
            },
            {
                data: tenMachine.dataSet,
                label: 'Machine\'s predicitons',
                lineTension: 0,
                backgroundColor: '#195D81',
                borderColor: '#195D81',
                borderWidth: 2,
                fill: false,
                spanGaps: true,
                lineTension: 0
            }
            ],
        };

        const dataFifteen = {
            labels: fifteenLabel.labels,
            datasets: [{
                data: fifteenYour.dataSet,
                label: 'Actual Price',
                lineTension: 0,
                backgroundColor: '#7ED2EF',
                borderColor: '#7ED2EF',
                borderWidth: 2,
                spanGaps: true,
                fill: false,
                lineTension: 0
            },
            {
                data: fifteenActual.dataSet,
                label: 'Your Prediction',
                lineTension: 0,
                backgroundColor: '#1C9CD3',
                borderColor: '#1C9CD3',
                borderWidth: 2,
                fill: false,
                spanGaps: true,
                lineTension: 0
            },
            {
                data: fifteenMachine.dataSet,
                label: 'Machine\'s predicitons',
                lineTension: 0,
                backgroundColor: '#195D81',
                borderColor: '#195D81',
                borderWidth: 2,
                fill: false,
                spanGaps: true,
                lineTension: 0
            }
            ],
        };

        return (
            <body>
                <div class="chartFormat">
                    <div class="fiveElement" id="fiveElement">
                        <Line 
                            data={dataFive}
                            options={options}
                            />
                    </div>
                    <div class="tenElement" id="tenElement">
                        <Line
                            data={dataTen}
                            options={options}
                        />
                    </div>
                    <div class="fifteenElement" id="fifteenElement">
                        <Line
                            data={dataFifteen}
                            options={options}
                        />
                    </div>
                </div>
                <button class="chartFormat select" onClick={() => cycleCharts()}>Next Chart</button>
            </body>
        );
    }
}

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