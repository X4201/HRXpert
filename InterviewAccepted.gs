function sendAcceptedEmail(candidateEmail, candidateName,onboardingDate) {
  var subject = "Job Application Status - Accepted";
  var body = "Dear " + candidateName + ",\n\n" +
             "Congratulations! We are pleased to inform you that you have successfully passed the interview \n\n" +
             "Your onboarding date is scheduled for: " + onboardingDate + "\n\n" +
             "We look forward to having you join our team.\n\n" +
             "Best regards,\n" +
             "HR Team";
  MailApp.sendEmail(candidateEmail, subject, body);
}