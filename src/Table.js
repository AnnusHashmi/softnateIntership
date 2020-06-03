import React from 'react';
import { Table } from 'reactstrap';

const CustomerTable = (props) => {
  props.customerList.map((customerList)=>{
    return(
      console.log(customerList.firstName)
      
    )
  })


  
  return (
    <div>

    </div>
  );
}

export default CustomerTable;