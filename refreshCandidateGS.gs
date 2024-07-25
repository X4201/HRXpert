function copyFormResponsesToCandidateData() {
  var sourceSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Form responses');
  var targetSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Candidate_J1');

  // Clear the target sheet before copying new data
  targetSheet.clear();

  // Get the data from the source sheet
  var data = sourceSheet.getDataRange().getValues();

  // Paste the data into the target sheet
  targetSheet.getRange(1, 1, data.length, data[0].length).setValues(data);
}

// Set a trigger to run this function every time a form is submitted
function createOnFormSubmitTrigger() {
  var form = FormApp.openById('1o3Ky1IEHMnC0TN_z6DnG256L2SlX7if08hLWwCW54eg'); // Replace with your form ID
  ScriptApp.newTrigger('copyFormResponsesToCandidateData')
    .forForm(form)
    .onFormSubmit()
    .create();
}
