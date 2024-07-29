function leaveRejectionEmail(employeeEmail, employeeName, leaveType, startDate, endDate, status, remark) {
  var subject = "Leave Application Status - Rejection";
  var body = "Dear " + employeeName + ",\n\n" +
            
            "---Leave Details---:" + "\n" +
            "Type of Leave: " + leaveType + "\n" +
            "Start Date: " + startDate  + "\n" +
            "End Date: " + endDate + "\n\n" +

            "Your Leave Status: " + status + "\n" +
            "Remark: " + remark + "\n\n" +

            "Regret to inform you that your leave application has been reviewed and, unfortunately, it cannot be approved at this time..\n" +
            "understand that this may be disappointing, and we apologize for any inconvenience this may cause. We highly encourage you to discuss potential alternatives with your supervisor or team to manage your workload during this period or consider resubmitting your request for alternative dates if possible..\n\n" +

            "Thank you for your understanding.\n\n" +

            "Best regards,\n" +
            "HR Team";

  MailApp.sendEmail(employeeEmail, subject, body);
}       