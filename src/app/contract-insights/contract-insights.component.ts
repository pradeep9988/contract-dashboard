import { Component, OnInit } from '@angular/core';
import * as Highcharts from "highcharts/highstock";
declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');
const IndicatorsCore = require("highcharts/indicators/indicators");
IndicatorsCore(Highcharts);
const IndicatorZigZag = require("highcharts/indicators/zigzag");
IndicatorZigZag(Highcharts);
Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);
@Component({
  selector: 'app-contract-insights',
  templateUrl: './contract-insights.component.html',
  styleUrls: ['./contract-insights.component.css']
})
export class ContractInsightsComponent implements OnInit {
  Highcharts = Highcharts;
  optionsOne:any = {
    chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45,
            beta: 0
        }
    },
    title: {
        text: ''
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            depth: 35,
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }
    },
    series: [{
        type: 'pie',
        name: 'Contracts Signed',
        data: [
            ['NEW', 56.0],
            ['RENEWALS', 33.4],
            /* {
                name: 'Chrome',
                y: 12.8,
                sliced: true,
                selected: true
            }, */
            ['TERMINATION', 10.6],
           
        ]
    }]
  }
  optionsTwo:any = {
    chart: {
        type: 'column'
    },
    title: {
        text: ''
    },
    xAxis: {
        categories: [
            'California',
            'Nevada',
            'Washington DC',
            'Florida'
            
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0; font-size: 12px;">{series.name}: </td>' +
            '<td style="padding:0; font-size: 12px;"><b>{point.y:.1f} %</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Royalty Signed',
        data: [4, 8, 9, 10]

    }]
  }
  optionsThree:any = {
    chart: {
        type: 'column'
    },
    title: {
        text: ''
    },
    xAxis: {
        categories: [
            'California',
            'Nevada',
            'Washington DC',
            'Florida'
            
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0; font-size: 12px;">{series.name}: </td>' +
            '<td style="padding:0; font-size: 12px;"><b>{point.y:.1f} </b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Term of renewal',
        data: [2, 1, 8, 15]

    }]
  }
  constructor() { }

  ngOnInit() {
  }

}