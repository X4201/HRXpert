function sendRejectionEmail(candidateEmail, candidateName) {
  var subject = "Job Application Status - Rejection";
  var body = "Dear " + candidateName + ",\n\n" +
             "Thank you for your application. We regret to inform you that we will not be moving forward with your application at this time. " +
             "We appreciate your interest in the position and wish you all the best in your future endeavors.\n\n" +
             "Best regards,\n" +
             "HR Team";

  MailApp.sendEmail(candidateEmail, subject, body);
}