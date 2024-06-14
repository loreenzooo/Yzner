
function balik(){
    window.location.href = "C:Users/laurence/OneDrive/Desktop/.NET Website/MyCodes/.netWebsite/.netWebsite/index.html";
}

function btn(){
alert('Are you sure?');
let customerResponse = prompt('Confirm your address: ');
alert('Your product will be delivered in: ' + customerResponse);
let customer = confirm('Do you wanna give feedback to the seller?');
if(customer)
    {
    let customerFeedback = prompt ('Feedback');
    alert('Thank you for your feedback!');
    balik();
}
else
{
    balik();
    alert('Thank you for order!');
    
}
}



