function onEdit(e) {
  var sheetName = "Candidate";
  var sheet = e.source.getSheetByName(sheetName);
  
  if (sheet && e.range.getSheet().getName() === sheetName) {
    var range = e.range;
    var statusColumn = 15; 
    var emailColumn = 9; 
    var candidateNameColumn = 10; 
    
    if (range.getColumn() == statusColumn) {
      var status = range.getValue();

      if (status == "Fail") {
        var row = range.getRow();
        var email = sheet.getRange(row, emailColumn).getValue();
        var candidateName = sheet.getRange(row, candidateNameColumn).getValue();

        sendFailEmail(email, candidateName);
      }
    }
  }
}

function sendFailEmail(email, candidateName) {
  var subject = "Application Status Update";
  var body = `Dear ${candidateName},

We regret to inform you that your application has been marked as 'Fail'. Thank you for your interest in the position and for taking the time to apply.

Best regards,
EXPERT IT COMPANY SDN BHD
;

  MailApp.sendEmail(email, subject, body);
}
