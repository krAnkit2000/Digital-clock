import React from 'react';



    function date() {
        const currDay = new Date().getDate();
        const currMonth = new Date().toLocaleString([], {
          month: 'long',
        });
        const currYear = new Date().getFullYear();
      
        return <div className='date'> {currDay} {currMonth}  {currYear}</div>;
      }




export default date 
