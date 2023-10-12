
  var realForm = document.getElementById('new_wage'),
     wageAmount = document.querySelector('[name="wage[amount]"]');
   document.querySelector('[name="wage[zone_id]"]').selectedIndex = 1,
  document.querySelector('[name="wage[wage_type]"]').selectedIndex = 1;
  realFormSubmitInput = document.querySelector('[name="commit"]');
  wageAmount.value = '15:00';

  var addWage = document.querySelector('.js-toggle-next');

var secondCheckId
  var option = `<option value="" label=" "></option><option value="Canceled order">Canceled order</option><option value="Rescheduled order">Rescheduled order</option><option value="Unassign batch">Unassign batch</option><option value="Waiting bump">Waiting bump</option><option value="Additional distance">Additional distance</option><option value="Missing heavy pay">Missing heavy pay</option><option value="Return order">Return order</option><option value="Potential Bug">Potential Bug</option><option value="Wrong Store Hours / Store Outage">Wrong Store Hours / Store Outage</option><option value="Incorrect Location Pin">Incorrect Location Pin</option><option value="Customer Address Change">Customer Address Change</option>`

var selectBump = document.querySelectorAll('[name="reason"]')[1];
  
function executeNow() 
{     



    realForm.addEventListener("submit", (e)=> {
      e.preventDefault()
     location.reload();
    })
    addWage.click();
    if( document.querySelector('[name="wage[batch_id]"]').value !== ''
    )
    {
      console.log('sdsd')
      setTimeout(()=>{
        realFormSubmitInput.click()
    }, 2000)
    
    }
    else{
     window.close()
    }

 

}

  function realFormSubmission()
  {
     
    selectBump.innerHTML = option

  setTimeout(()=> {
    selectBump = document.querySelectorAll('[name="reason"]')[1];
    if(selectBump.length !== 0 )
    {
      document.querySelectorAll('[name="reason"]')[1].selectedIndex = 8;
       console.log(selectBump)
       
        executeNow()
    }
    else {
      setTimeout(()=> {
        selectBump = document.querySelectorAll('[name="reason"]')[1];
        document.querySelectorAll('[name="reason"]')[1].selectedIndex = 8;

           executeNow()
      }, 1000)
  
  
    }
  
  }, 1000)


  
           
       
      
  }



chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log("message is" , ":", message)
    document.querySelector('[name="wage[batch_id]"]').value= `${message}`;
    secondCheckId = `${message}`
  realFormSubmission()
  console.log("Recv. Send Response = " + document.title , message);
  sendResponse({title:document.title})
});

