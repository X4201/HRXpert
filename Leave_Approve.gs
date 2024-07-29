function leaveApprovalEmail(employeeEmail, employeeName, leaveType, startDate, endDate, status, remark) {
  var subject = "Leave Application Status - Approved";
  var body = "Dear " + employeeName + ",\n\n" +
            
            "---Leave Details---:" + "\n" +
            "Type of Leave: " + leaveType + "\n" +
            "Start Date: " + startDate  + "\n" +
            "End Date: " + endDate + "\n\n" +

            "Your Leave Status: " + status + "\n" +
            "Remark: " + remark + "\n\n" +

            "Your leave application has been approved, We understand the importance of taking time off to recharge and attend to personal matters, and we are pleased to accommodate your request." + "\n" +
            "We appreciate your dedication and hard work within the organization and look forward to your return, refreshed and ready to contribute your best." + "\n\n" +

            "Enjoy your well-deserved break!\n\n" +

            "Best regards,\n" +
            "HR Team";

  MailApp.sendEmail(employeeEmail, subject, body);
}       