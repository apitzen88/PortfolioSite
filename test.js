function clearErrors() {
   for (var loopCounter = 0;
       loopCounter < document.forms["sampleForm"].elements.length;
       loopCounter++) {
       if (document.forms["sampleForm"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {
           document.forms["sampleForm"].elements[loopCounter]
               .parentElement.className = "form-group";
       }
   }
}
function validateItems() {
   clearErrors();
   var startNum = document.forms["sampleForm"]["startNum"].value;
   var endNum = document.forms["sampleForm"]["endNum"].value;
   var stepNum = document.forms["sampleForm"]["stepNum"].value;
   if (startNum == "" || isNaN(startNum)) {
       alert("Start Number must be filled in with a number.");
       document.forms["sampleForm"]["startNum"]
           .parentElement.className = "form-group has-error"
       document.forms["sampleForm"]["startNum"].focus();
       return false;
   }
   if (endNum == "" || Number(endNum) <= Number (startNum) || isNaN(endNum)) {
       alert("End Number must be larger than your Start number.");
       document.forms["sampleForm"]["endNum"]
           .parentElement.className = "form-group has-error"
       document.forms["sampleForm"]["endNum"].focus();
       return false;
   }
   if (stepNum == "" || isNaN(stepNum)) {
       alert("Step must be greater than 0.");
       document.forms["sampleForm"]["stepNum"]
           .parentElement.className = "form-group has-error"
       document.forms["sampleForm"]["stepNum"].focus();
       return false;
   }
   else {
       document.getElementById("submitButton").innerText = "Recalculate";
       document.getElementById("results").style.display = "block";
       document.getElementById("startNum").innerText = startNum;
       document.getElementById("endNum").innerText = numEnd;
       document.getElementById("stepNum").innerText = numStep;
       
       return false;
   }
}