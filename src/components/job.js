import React from "react";
import {FormattedDate,FormattedNumber,FormattedPlural} from 'react-intl';
const Job = (props) => {
  let leng=navigator.language
  let singular
  let plural
  if(leng==="es-ES"){
    singular=" millón"
    plural=" millones"
  }else{
    singular=" million"
    plural=" millions"
  }
  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>{props.offer.name}</td>
      <td>{props.offer.company}</td>
      <td>
          {props.offer.salary}
          <FormattedPlural value={props.offer.salary} one={singular} other={plural} />
      </td>
      <td>{props.offer.city}</td>
      <td>
          <FormattedDate
            value={new Date(props.offer.date)}
            year='numeric'
            month='long'
            day='numeric'
            weekday='long'
        />
      </td>
      <td>
        <FormattedNumber
          value={props.offer.visitas}
          unitDisplay="narrow"
        />
      </td>
    </tr>
  );
};

export default Job;
