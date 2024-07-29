// @ts-nocheck
function updateJobPostings() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('JobPosting');
  var dataRange = sheet.getDataRange();
  var data = dataRange.getValues();
  
  var jobPostings = [];
  for (var i = 1; i < data.length; i++) { 
    var jobPosting = {
      jobID: data[i][0],
      jobTitle: data[i][1],
      department: data[i][2],
      jobLevel: data[i][3],
      employmentType: data[i][4],
      jobDescription: data[i][5],
      responsibilities: data[i][6],
      educationRequirements: data[i][7],
      skillsRequired: data[i][8],
      salaryRange: data[i][9],
      contactInformation: data[i][10],
      numberOfOpenings: data[i][11],
      googleFormLink: data[i][12]
      };
    jobPostings.push(jobPosting);
  }
  
  Logger.log(jobPostings);
  
}
