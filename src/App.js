import React, { Component } from 'react';
import { Table } from 'reactstrap';
import CustomerTable from './Table';

class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      customers : [
        {
            "id"         : "1",
            "firstName"      : "Annus",
            "lastName"  : "Hashmi",
            "city"  :  "Karachi",
            "country" : "Pakistan",
            "houseNumber" : "A-46",
            "block" :   "10A",
            "area"  :   "GulshanIqbal",
            "countryCode" : "+92",
            "cellphone" :   "03362336972"
            
        },
        {
            "id"         : "2",
            "firstName"      : "Ebad",
            "lastName"  : "Ali",
            "city"  :  "Karachi",
            "country" : "Pakistan",
            "houseNumber" : "B-16",
            "block" :   "7",
            "area"  :   "GulshanIqbal",
            "countryCode" : "+92",
            "cellphone" :   "03002124164"
        },
        {
            "id"         : "3",
            "firstName"      : "Hassan",
            "lastName"  : "Asim",
            "city"  :  "Karachi",
            "country" : "Pakistan",
            "houseNumber" : "C-6",
            "block" :   "13",
            "area"  :   "GulistanJohar",
            "countryCode" : "+92",
            "cellphone" :   "03313092285"
        },
        {
            "id"         : "4",
            "firstName" : "Ammar",
            "lastName"  : "Ahmed",
            "city"  :  "Karachi",
            "country" : "Pakistan",
            "houseNumber" : "A-17",
            "block" :   "3",
            "area"  :   "Federal B Area",
            "countryCode" : "+92",
            "cellphone" :   "03362336972"
        },
        {
            "id"         : "5",
            "firstName"      : "Tariq",
            "lastName"  : "Iqbal",
            "city"  :  "Karachi",
            "country" : "Pakistan",
            "houseNumber" : "B-8",
            "block" :   "7",
            "area"  :   "DHA",
            "countryCode" : "+92",
            "cellphone" :   "03362336972"
        },
        {
            "id"         : "6",
            "firstName"  : "Farah",
            "lastName"  : "Saeed",
            "city"  :  "Karachi",
            "country" : "Pakistan",
            "houseNumber" : "D-56",
            "block" :   "11",
            "area"  :   "GulistanJohar",
            "countryCode" : "+92",
            "cellphone" :   "03362336972"
        }
    ],

    searchName: '',
    searchCellphone : '',
    searchArea : ''
    }

    
  }


  renderTableHeader() {
    let header = Object.keys(this.state.customers[0])
    return header.map((key, index) => {
       return <th key={index}>{key.toUpperCase()}</th>
    })
 }

  renderTable() {
    return this.state.customers.map((customer, index) => {
       const { id, firstName, area, cellphone, lastName, city, country, countryCode, block, houseNumber } = customer //destructuring
       return (
          <tr key={id}>
             <td>{id}</td>
             <td>{firstName}</td>
             <td>{lastName}</td>
             <td>{city}</td>
             <td>{country}</td>
             <td>{houseNumber}</td>
             <td>{block}</td>
             <td>{area}</td>
             <td>{countryCode}</td>
             <td>{cellphone}</td>
          </tr>
       )
    })
 }

  render(){

    const filterName = this.state.customers.filter(customer => customer.firstName.toLowerCase().includes(this.state.searchName.toLocaleLowerCase()));
    console.log(filterName);
    
    const filterCellphone = this.state.customers.filter(customer => customer.cellphone.includes(this.state.searchCellphone));
    console.log(filterCellphone);

    const filterArea = this.state.customers.filter(customer => customer.area.includes(this.state.searchArea));
    console.log(filterArea);
    
    return (
      <div>
            <input type='search' placeholder='search by Name' className='input' onChange={e =>{this.setState({searchName : e.target.value})}}/>

            <input type='search' placeholder='search by cellPhone Number' className='input' onChange={e =>{this.setState({searchCellphone : e.target.value})}}/>

            <input type='search' placeholder='search by Area' className='input' onChange={e =>{this.setState({searchArea : e.target.value})}}/>
            
            
      </div>
    );
  }
 
}

export default App;
