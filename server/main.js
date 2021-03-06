// Only executed on server
import _ from 'lodash'
import { Meteor } from 'meteor/meteor';
import { Employees } from '../imports/collections/employees';
import {image,helpers} from 'faker';

Meteor.startup(() => {
   // Good place to generate data-toggle

   // Check to see if data exists in collection
   const numberRecords = Employees.find({}).count();
   console.log(numberRecords);
   if (!numberRecords){
      // Generate some data
      _.times(5000, () => {
         const { name, email, phone } = helpers.createCard();

         Employees.insert({
            name, email, phone,
            avatar: image.avatar()
         })
      });
   }

   Meteor.publish('employees',function () {
      Employees.find({},{limit:20});
   });

});
