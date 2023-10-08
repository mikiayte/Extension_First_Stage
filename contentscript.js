
  var realForm = document.getElementById('new_wage'),
     wageAmount = document.querySelector('[name="wage[amount]"]');
   document.querySelector('[name="wage[zone_id]"]').selectedIndex = 1,
  document.querySelector('[name="wage[wage_type]"]').selectedIndex = 1;
  document.querySelectorAll('[name="reason"]')[1].selectedIndex = 2;
  console.log(document.querySelectorAll('[name="reason"]'))
  realFormSubmitInput = document.querySelector('[name="commit"]');
  wageAmount.value = '15:00';

  var addWage = document.querySelector('.js-toggle-next');




  function realFormSubmission()
  {

    
          realForm.addEventListener("submit", (e)=> {
            e.preventDefault()
            
           location.reload();


          })
          addWage.click();
          setTimeout(()=>{
            realFormSubmitInput.click()
        }, 3000)
      
       
      
  }



chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log("message is" , ":", message)
    document.querySelector('[name="wage[batch_id]"]').value= `${message}`;
  realFormSubmission()
  console.log("Recv. Send Response = " + document.title , message);
  sendResponse({title:document.title})
});

