function clicked() {
	
	var user=document.getElementById('Name');
	var email=document.getElementById('Email ID');
	var phone=document.getElementById('Phone');
	var feedback=document.getElementById('Feedback');
	
	var corname = "Sneha";
	var coremail = "STangirala@my.harrisburgu.edu";
	var corphone =  "1234567890";
	var corfeedback = "My pooch is happy";
	
	if(user.value.length > 3) {
		
		if(email.value.length > 3)  {
			
			if(phone.value.length > 3) {
				
				if(feedback.value.length > 3) {
					
					window.alert("Thank you for your interest in DogsDayCare. A member of our team will reply to your email within one business day (often much sooner. For situations requiring immediate assistance, please contact us by phone" + "/t" +user.value);
					
				}else {
					
					window.alert("No Data!");
					
					
				}
				
			}else {
				
				window.alert("No Data!");
				
				
			}
			
		}else {
			
			window.alert("No Data!");
			
		}
		
	}else {
			
			window.alert("No Data!");
			
		}
	
}