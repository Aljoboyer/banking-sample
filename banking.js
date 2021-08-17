//combine function

function getInputvalue(inputamount){
   const transitationfield = document.getElementById(inputamount);
   const transitationtext = transitationfield.value;
   const  transitation = parseFloat(transitationtext);
   transitationfield.value = '';

   return transitation;
}
//adding amount

function updatefield(balance,fieldamount){
   
   const currentbalance = document.getElementById(balance);
         const  previousbalancetext = currentbalance.innerText;
         const previousbalance = parseFloat(previousbalancetext)

         const newbalance =  previousbalance + fieldamount;
         currentbalance.innerText  = newbalance;

         // return newbalance;
}

//checking function

function getcurrentbalance(){
   const totalamount = document.getElementById('totalbalance')
   const total = parseFloat(totalamount.innerText)

   return total;
}

//update total balance 

function updatetotalbalance(fieldamount, isadd){
      const totalamount = document.getElementById('totalbalance')

      const total =  getcurrentbalance()
      if(isadd == true)
        {
         const alltotal = total + fieldamount
         totalamount.innerText = alltotal; 
        }
        else
        {
            const alltotal = total  - fieldamount
            totalamount.innerText = alltotal;
        }
       
}
//deposit js

document.getElementById('depositbutton').addEventListener('click',
function(){
   //  const depositfield = document.getElementById('depositamount');
   //  const deposittext = depositfield.value;
   //  const  deposit = parseFloat(deposittext);
   
   const depositfieldamount = getInputvalue('depositamount');
   if(depositfieldamount > 0 )
   {
      updatetotalbalance(depositfieldamount,true)
      const latestbalance = updatefield('dopsitbalance', depositfieldamount)
   }
   
   // const currentdeposit = document.getElementById('dopsitbalance');
   // const  previousamounttext = currentdeposit.innerText;
   // const previousamount = parseFloat(previousamounttext)

   // const newdeposit =  previousamount + deposit;
   // currentdeposit.innerText  = newdeposit;

   //  const totalamount = document.getElementById('totalbalance')
   //       const total = parseFloat(totalamount.innerText)
      
   //      const alltotal = total + fieldamount
   //      totalamount.innerText = alltotal; 
})

//withdraw js

document.getElementById('withDrawbutton').addEventListener('click',
function(){
   //  const withdrawfield = document.getElementById('withDrawamount');
   //  const withdrawtext = withdrawfield.value;
   //  const withdraw = parseFloat(withdrawtext);
      const totalbalances =  getcurrentbalance()
      const withdrawfieldamount = getInputvalue('withDrawamount');
      if(withdrawfieldamount > 0 && totalbalances > withdrawfieldamount)
      {
         updatefield('withdrawbalance', withdrawfieldamount);
         updatetotalbalance(withdrawfieldamount,false)
      }
      else{
         alert ('ERror');
      }
   //  const currentwithdraw = document.getElementById('withdrawbalance');
   // const previouswithdrawamount  =parseFloat(previouswithdrawamounttext);
   // const  previouswithdrawamounttext = currentwithdraw.innerText
   //  let newdewithdraw = previouswithdrawamount + withdraw ;
   //  currentwithdraw.innerText  = newdewithdraw;

   //  const totalwithdrawamounts = document.getElementById('totalbalance');
   //  const alltotalwithdraw = parseFloat(totalwithdrawamounts.innerText)s    
  
   //       const totalwithdraw = alltotalwithdraw  - fieldamount
      
   //       totalwithdrawamounts.innerText = totalwithdraw;
    
})


//deposit button enable

document.getElementById('depositamount').addEventListener('keyup',function(event){
   // const deletefield = document.getElementById('deleteinput');
   const depobtn = document.getElementById('depositbutton')
   if(event.target.value != '')
   {
      depobtn.removeAttribute('disabled');
   }
   else {
      depobtn.setAttribute('disabled', true);
   }
})