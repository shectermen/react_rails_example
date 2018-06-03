import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

var records = new XMLHttpRequest();
records.open('GET', 'records.json', false);
records.send();

if (records.status != 200) {
  alert( records.status + ': ' + records.statusText ); 
} else {
  records = JSON.parse(records.response)
}
 
const Records = props => (
  props.collection.map(function(item, index) {
    return (
      <tr key={index}>
        <td className="records__id">{item.id}</td>
        <td className="records__title">{item.title}</td>
        <td className="records__data">{item.date}</td>
        <td className="records__amount">{item.amount}</td>
      </tr>
    )
  })
)

 

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Records collection={records} />,
    document.getElementById('records')
  )
})



