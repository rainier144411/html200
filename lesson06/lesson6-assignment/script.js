let balance = 0;
let withdraw = 0;
let deposit = 0;

function bankAction() {

  let actionType = prompt('Enter Q to quit.\n'+
      'Enter W to withdraw.\n'+
      'Enter D to deposit.\n'+
      'Enter B to view balance.\n');
  
  if (actionType === null || actionType === 'Q') {
        return; //break out of the function early if pressing cancel or entering Q and OK
    }
  
   switch (actionType) {
      case 'W': {
        withdraw = prompt('Enter an amount to withdraw: ');
        balance = balance - Number(withdraw);
        bankAction();
        break;
      }
       case 'D': {
        deposit = prompt('Enter an amount to deposit: ');
        balance = balance + Number(deposit);
        bankAction();
        break;
      }
      case 'B': {
        alert('Balance is ' + balance.toLocaleString("en-US", {style:"currency", currency:"USD"}));
        bankAction();
        break;
      }
      default: {
        alert('Enter a valid input.');
        bankAction();
        break;
      }
   }

};
