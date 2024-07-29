function sendSuccessfulEmail(interviewEmail, interviewDate, interviewST, interviewET) {
  var subject = "Job Application Status - Accepted";
  var body = "Dear " + interviewEmail + ",\n\n" +
             "We are pleased to inform you that you selected for an interview on"+ interviewDate + ",\n\n" +
             "Your interview Start Time: " + interviewST + "\n\n" +
             "Your interview End Time: " + interviewET + "\n\n" +
             "See you.\n\n" +
             "Best regards,\n" +
             "HR Team";
  MailApp.sendEmail(candidateEmail, subject, body);
}