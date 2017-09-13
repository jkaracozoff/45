import React, {Component} from 'react';
//import BarChart from './BarChart'
const SimpleLineChart = require('./SimpleLineChart.js');

const type_lookup = {
      'bp' : 'BP',
      'weight' : 'Weight',
      'temp' : 'Temperature',
      'pulseox' : 'SpO2',
      'glucose' : 'Glucose'
};

const units = {
       'bp' : 'mmHg',
       'weight' : 'Lbs',
       'temp' : 'Deg C',
       'pulseox' : '%',
       'glucose' : 'mG/dL'
};

const fields = {
        'bp' : ['systolic', 'diastolic', 'bpm'],
        'weight' : ['weight_lbs'],
        'temp' : ['celsius'],
        'pulseox' : ['spo2'],
        'glucose' : ['mg_dl']
};

const fancy = {
   'systolic' : 'Systolic',
   'diastolic' : 'Diastolic',
   'bpm' : 'BPM',
   'celsius' : 'Deg Celsius',
   'spo2' : 'SpO2',
   'mg_dl' : 'Glucose',
   'weight_lbs' : 'Weight'
}

class Card extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      most_recent: [],
      chart_data: []
    };
  }

  componentWillMount() {
    this.processProps(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.processProps(nextProps);
  }

  processProps(props) {
    var data = props.patient.data.slice(0);
    var most_recent = [];
    var chart_data = [];
    var most_recents = {};
    if (data.length) {
      for(var i=0; i < data.length; i++){
         var e = data[i]
         if(!(e.type in most_recents)){
            most_recents[e.type] = e;
         }else{
            if(Date.parse(e.created_date) < Date.parse(most_recents[e.type].created_date)){
               most_recents[e.type] = e;
            }
         }
      }

      //Exploit presort
      for(var i=0; i < data.length; i++){
        var e = data[i];
        if(most_recents[e.type] == e){
           most_recent.push(e);
        }
        if(most_recent.length && most_recent[0].type == e.type){
           var na = {};
           na['time'] = Date.parse(e.created_time);
           for(var j=0; j < fields[e.type].length; j++){
              var n = fields[e.type][j];
              na[n] = e[n];
           }
           chart_data.push(na);
        }
      }      
    }

    this.setState({
      data: data,
      most_recent: most_recent,
      chart_data : chart_data
    });
  }

  meas_to_string(meas) {
    var type = meas.type;
    var str = '';
    for(var i=0; i < fields[type].length; i++){
       str += Math.round(meas[fields[type][i]]) + ' '
       if(i != (fields[type].length-1))
         str += '/ '
    }
    str += units[type];
    var color = "#000";
    if(meas.disposition){
       color = meas.disposition.color;
    }
    return {
      type: type_lookup[type], 
      output: str,
      time: this.formatMeasurementTime(meas.created_time), 
      color: color
    };
  }

  formatMeasurementTime(isoDate) {
    var d = new Date();
    var date = new Date(isoDate);
    if (d.toDateString() == date.toDateString()) {
      var hours = date.getHours() 
      return (hours<1?12:hours<13?hours:(hours-12)) + ":" + (date.getMinutes()<10?'0':'') + date.getMinutes() + ":" + 
             (date.getSeconds()<10?'0':'') + date.getSeconds() + ' ' + (hours<12?'AM':'PM');
    }
    return date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear();
  }
  
  render() {
    var disposition = '';
    var most_recent = '';
    var ovs = [];

    if (this.state.most_recent.length){
      if (this.state.most_recent[0].disposition) {
        disposition = <h3 style={{color: this.state.most_recent[0].disposition.color}}>{this.state.most_recent[0].disposition.string}</h3>;
      }
      for(var i=0; i < this.state.most_recent.length; i++){
          var mra = this.meas_to_string(this.state.most_recent[i]);
          if(i==0){
            most_recent = <div className="most-recent"><b>{mra.type} </b>{mra.output}<div className="time">{mra.time}</div></div>;
          }else{
            ovs.push(mra);
          }
      }
    }
    ovs = ovs.map((mra,index) => {
            return (
               <div className="other-vitals" key={index}><span style={{color: mra.color}}><b>{mra.type} </b>{mra.output}</span></div>
            );
        });
    return (
    <div className="stelCard">
      <div className="stelCard-block">
        <img className="patient-photo" src={this.props.patient.photo} />
        <span className="patient-name">{this.props.patient.name}</span>
        {disposition}
        {most_recent}
        <div className="other-vitals">Other vitals</div>
        {ovs}
        <SimpleLineChart formatMeasurementTime={this.formatMeasurementTime} labels={fancy} chart_data={this.state.chart_data} />
      </div>
    </div>
    ); 
  }
}

module.exports = Card;