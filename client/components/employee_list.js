import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Employees from '../../imports/collections/employees';

const EmployeeList = () => {
      // if props include in above function argurment, here you can access props.employees => array of employee objects 
      return (
         <div>
            <div className="employee-list">
               Employee List
            </div>
         </div>
      );
};

export default creatContainer(() => {
      // setup subscription
      Meteor.subscribe('employees');

      // return an object. Whatever we return sent to EmployeeList as props
      return { employees: Employees.find({}).fetch()}

},EmployeeList);
