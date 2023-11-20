const data = {
  municipalCorporationsData: [
    {
      localbody: [
        {
          Name: "Coimbatore",
          Code: "252653",
        },
      ],
      district: "Coimbatore",
      bankAccountNo: "12345679",
      email: "def@gmail.com",
      panNo: "AAACS0002B",
      nameAsPerBankRecords: "Coimbatore Municipal Corporation",
      actions: ["View", "Edit", "Delete"],
    },
    {
      localbody: [
        {
          Name: "Avadi",
          Code: "252276",
        },
      ],
      district: "Chennai",
      bankAccountNo: "12345678",
      email: "abc@gmail.com",
      panNo: "AAACS0001A",
      nameAsPerBankRecords: "Avadi Municipal Corporation",
      actions: ["View", "Edit", "Delete"],
    },
    // Add more entries if needed
  ],

  preSanction: [
    {
      inwardDate: "11/08/2023",
      inwardNumber: 5484415,
      headOfDepartment: "Chennai Metropolitan Water Supply And Sewerage Board",
      ulbName: "Tiruppur",
      documentDate: "5/07/2023",
      schemeName: "KNMT",
      status: ["Received"],
    },
    // Add more entries if needed
  ],

  projectData: [
    {
      projectName: "Lakshmi Vinayaga Nagar Extension Cross Street – I",
      projectID: "K_MI_088_2022_W_1993",
      agencyType: "Municipality",
      placeOfProject: "Lakshmi Vinayaga Nagar",
      agencyCode: 101,
      district: "Thanjavur",
      scheme: "KNMT",
      projectCreateDate: "5/07/2023",
    },
    {
      projectName: "Lakshmi Vinayaga Nagar Extension Cross Street – II",
      projectID: "K_MI_018_2022_W_2563",
      agencyType: "Municipality",
      placeOfProject: "Lakshmi Vinayaga Nagar",
      agencyCode: 101,
      district: "Thanjavur",
      scheme: "KNMT",
      projectCreateDate: "5/07/2023",
    },
    // Add more entries if needed
  ],

  physicalProgress: [
    {
      projectName: "Lakshmi Vinayaga Nagar Extension Cross Street – I",
      projectID: "K_MI_088_2022_W_1993",
      agencyType: "Municipality",
      workCreateDate: "5/07/2023",
      placeOfProject: "Lakshmi Vinayaga Nagar",
      district: "Thanjavur",
      status: ["Approved"],
      actions: ["Project Updation"],
    },
    {
      projectName: "Lakshmi Vinayaga Nagar Extension Cross Street – II",
      projectID: "K_MI_018_2022_W_2563",
      agencyType: "Municipality",
      workCreateDate: "5/07/2023",
      placeOfProject: "Lakshmi Vinayaga Nagar",
      district: "Thanjavur",
      status: ["Approved"],
      actions: ["Project Updation"],
    },
    // Add more entries if needed
  ],

  Vendordata: [
    {
      vendordetails: [
        {
          vendorName: "Suyog",
          vendorCode: "TN_VEN26",
          pfmsStatus: "PENDING",
        },
      ],
      companyName: "ALIGHT",
      emailId: "SUYOG@COM",
      phoneNo: "5354554656",
      status: ["Active", "Pending"],
      actions: ["View", "Edit", "Delete"],
    },
    {
      vendordetails: [
        {
          vendorName: "partth",
          vendorCode: "TN_VEN6",
          pfmsStatus: "ACCP",
        },
      ],
      companyName: "alight",
      emailId: "parth@gmail.com",
      phoneNo: "9103298293",
      status: ["Active", "Approved"],
      actions: ["View", "Edit", "Delete"],
    },
    {
      vendordetails: [
        {
          vendorName: "parthhhh",
          vendorCode: "TN_VEN7",
          pfmsStatus: "ACCP",
        },
      ],
      companyName: "alight",
      emailId: "parth@gmail.com",
      phoneNo: "9109283192",
      status: ["Active", "Approved"],
      actions: ["View", "Edit", "Delete"],
    },
  ],

  waterBoardData: [
    {
      localBodyName: "Chennai Metropolitan Water Supply And Sewerage Board",
      district: "Chennai - 568",
      bankAccountNo: "12345678",
      emailID: "abc@gmail.com",
      panNo: "AAACS0001A",
      nameAsPerBankRecords:
        "Chennai Metropolitan Water Supply And Sewerage Board",
    },
  ],
  // Add more entries as needed
  schemeOpeningData: [
    {
      "S.No": 1,
      Scheme: "NRHM ECRP",
      "Scheme Number": "ABC123",
      Department: "Health Department",
      Fy: "2023-2024",
      Date: "01-Apr-2023",
      Mode: "Opening Balance",
      Amount: "Rs 40.00 lakhs",
      "Created By": "Admin",
      "Created On": "Aug. 1, 2023, 1:31 p.m.",
    },
    {
      "S.No": 2,
      Scheme: "NRHM ECRP",
      "Scheme Number": "XYZ456",
      Department: "Health Department",
      Fy: "2023-2024",
      Date: "01-Apr-2023",
      Mode: "Opening Balance",
      Amount: "Rs 40.00 lakhs",
      "Created By": "Admin",
      "Created On": "Aug. 1, 2023, 1:31 p.m.",
    },
    // Add more entries as needed
  ],
  concessionaireData: [
    {
      "S.No": 1,
      "Concessionaire Name": "A B C ASSOCIATE",
      "Proprietor Name": "None",
      "GST / PAN Number": "NA",
      "Login Info": "Login ID: PWD",
      Address: "Chennai",
      District: "Chennai",
      "Bank Info": "NA",
    },
    {
      "S.No": 2,
      "Concessionaire Name": "A. H. Construction Pro. Salman Khan",
      "Proprietor Name": "None",
      "GST / PAN Number": "NA",
      "Login Info": "Login ID: PWD",
      Address: "Chennai",
      District: "Chennai",
      "Bank Info": "NA",
    },
    // Add more entries as needed
  ],
  architectData: [
    {
      Sr: 1,
      "Architect Name": "M/S A Mridul",
      "Proprietor Name": "None",
      "GST / PAN Number": "NA",
      "Login Info": "Login ID: PWD",
      Address: "Chennai",
      District: "Chennai",
      "Bank Info": "NA",
    },
    {
      Sr: 2,
      "Architect Name": "M/S Acme Associates",
      "Proprietor Name": "DSFJKEFKRET678",
      "GST / PAN Number": "NA",
      "Login Info": "Login ID: PWD",
      Address: "Chennai",
      District: "Chennai",
      "Bank Info": "NA",
    },
    // Add more entries as needed
  ],
  invoiceData: [
    {
      SNO: 1,
      "Invoice No": "INV-2023050001",
      "Invoice Date": "April 12, 2023",
      Project: "Govt. Excellence H.S School, Bagli",
      Stage: "paid",
      Status: "paid",
      "Total Amount": "₹ 88,00,000.00",
      "Created By": "Admin",
      "Created Date": "May 12, 2023, 5 p.m.",
    },
    {
      SNO: 2,
      "Invoice No": "INV-2023060001",
      "Invoice Date": "April 15, 2023",
      Project: "Govt. Excellence H.S School, Bagli",
      Stage: "paid",
      Status: "paid",
      "Total Amount": "₹ 5,00,000.00",
      "Created By": "Admin",
      "Created Date": "May 15, 2023, 5 p.m.",
    },
    // Add more entries as needed
  ],
  demandData: [
    {
      SNO: 1,
      "Dep/Scheme": "Education Department",
      Project: "Govt. Excellence H.S School, Bagli",
      "Demand Type": "Approved",
      Status: "paid",
      "Demand Date": "April 12, 2023",
      "Total Amount": "₹ 88,00,000.00",
      "Created By": "Admin",
      "Created Date": "May 12, 2023, 5 p.m.",
    },
    {
      SNO: 2,
      "Dep/Scheme": "Health Department",
      Project: "Govt. Hospital, Bagli",
      "Demand Type": "Immediate Demand",
      Status: "paid",
      "Demand Date": "April 15, 2023",
      "Total Amount": "₹ 5,00,000.00",
      "Created By": "Admin",
      "Created Date": "May 15, 2023, 5 p.m.",
    },
    // Add more entries as needed
  ],
  IssuesData: [
    {
      SNO: 1,
      Heading: "Administration Issues",
      Description: "-",
      Date: "April 12, 2023",
      File: "No File",
      "Created By": "Admin",
      "Created Date": "July 19, 2023, 6:17 p.m.",
    },
    // Add more entries as needed
  ],
  attendenceData: [
    {
      SNO: 1,
      Name: "Abhishek Thakur (Divisional Project Engineer (DPE))",
      Time: "April 15, 2023",
      Place: "Govt. Excellence H.S School, Bagli",
      Image: "-",
      Status: "Present",
    },
    {
      SNO: 2,
      Name: "Education Department",
      Time: "April 12, 2023",
      Place: "Govt. Excellence H.S School, Bagli",
      Image: "-",
      Status: "Present",
    },
    // Add more entries as needed
  ],
  circularData: [
    {
      SNO: 1,
      Heading: "Diwali Holiday Announcement",
      Description: "-",
      Date: "April 12, 2023",
      File: "No File",
      CreatedBy: "Admin",
      CreatedDate: "July 19, 2023, 6:17 p.m.",
    },
    {
      SNO: 2,
      Heading: "Rules Update Notice",
      Description: "-",
      Date: "April 12, 2023",
      File: "No File",
      CreatedBy: "Admin",
      CreatedDate: "July 19, 2023, 6:17 p.m.",
    },
    // Add more entries as needed
  ],
  masterData: [
    { text: "Division", bgColor: "#BDD4F5", icon: "description" },
    { text: "District", bgColor: "#FFE0B2", icon: "description" },
    { text: "Work Type", bgColor: "#D1C4E9", icon: "description" },
    { text: "Sub Work Type", bgColor: "#F4A6A6", icon: "description" },
    { text: "Sor Agency", bgColor: "#E1BEE7", icon: "description" },
    { text: "UOM", bgColor: "#B3E0C2", icon: "description" },
    { text: "Rate Type", bgColor: "#C5CAE9", icon: "description" },
    { text: "Priority", bgColor: "#E894C1", icon: "description" },
    { text: "Department", bgColor: "#FFE0B2", icon: "description" },
    { text: "Scheme", bgColor: "#B2DFDB", icon: "description" },
    { text: "Project Head", bgColor: "#FFCCBC", icon: "description" },
    { text: "Budget Allocation", bgColor: "#C8E6C9", icon: "description" },
    { text: "Checklist Template", bgColor: "#F5D993", icon: "description" },
    { text: "Model Type", bgColor: "#D7CCC8", icon: "description" },
  ],

  reportData: [
    { text: "Project Summary", bgColor: "#BDD4F5", icon: "description" },
    { text: "Project Detail", bgColor: "#FFE0B2", icon: "description" },
    { text: "Project Stage", bgColor: "#D1C4E9", icon: "description" },
    { text: "Estimate", bgColor: "#F4A6A6", icon: "description" },
    { text: "BOQ", bgColor: "#E1BEE7", icon: "description" },
    { text: "RA", bgColor: "#B3E0C2", icon: "description" },
    { text: "Gantt", bgColor: "#C5CAE9", icon: "description" },
    { text: "Project Issue", bgColor: "#E894C1", icon: "description" },
    { text: "Project Picture", bgColor: "#FFE0B2", icon: "description" },
    { text: "Project Video", bgColor: "#B2DFDB", icon: "description" },
  ],

  FormatData: [
    { text: "Acceptance of Work", bgColor: "#BDD4F5", icon: "description" },
    { text: "Complete Information", bgColor: "#FFE0B2", icon: "description" },
    { text: "Progress Report", bgColor: "#D1C4E9", icon: "description" },
    { text: "Pending Payment", bgColor: "#F4A6A6", icon: "description" },
    { text: "Physical and Financial Progress", bgColor: "#E1BEE7", icon: "description" },
    { text: "Format", bgColor: "#B3E0C2", icon: "description" },
    { text: "Initial Work", bgColor: "#C5CAE9", icon: "description" },
    { text: "Completed Work", bgColor: "#E894C1", icon: "description" },
    { text: "Format", bgColor: "#FFE0B2", icon: "description" },
  ],

  financeReportData: [
    { text: "Project Grant and Balance Report", bgColor: "#BDD4F5", icon: "description" },
    { text: "Project Expenditure Report", bgColor: "#FFE0B2", icon: "description" },
    { text: "General Ledger (GL) Wise Report", bgColor: "#D1C4E9", icon: "description" },
    { text: "Allocation & Expenditure Report", bgColor: "#F4A6A6", icon: "description" },
  ],

  schemeFinancialData: [
    {
      project: "Scheduled Tribe Department",
      totproj: "Total Scheme: 149",
      amount: "Balance Amount: Rs 14.00 cr",
    },
    {
      project: "Agriculture Department",
      totproj: "Total Scheme: 9",
      amount: "Balance Amount: Rs 14.00 cr",
    },
  ],
  projectFinancialData: [
    {
      project : "Revenue Department - Construction of houses",
      totproj : "Total Projects: 149",
      amount : "Balance Amount: Rs 14.00 cr",
     
      
      
    },
    {
      project : "Construction work of Hospital Wards",
      totproj : "Total Projects: 9",
      amount : "Balance Amount: Rs 14.00 cr",
     
      
      
    },
  ],
 fileListData :[
    {
      projectName: "(A) Lakshmi Vinayaga Nagar Extension Cross Street – I",
      category: "Sanction Type : Loan",
      agencyCode: "K_MI_088_2022_W_1993",
      stageAmount: 18.55,
      lastPaymentDate: "05/07/2023",
      actions: ["View","Edit","Delete"]
    },
    // Add more projects as needed
  ],
  suppliers : [
    {
      sno: 1,
      supplierName: "Aarif Khan",
      proprietorName: "None",
      gstPANNumber: "None",
      loginInfo: "Login ID: PWD",
      address: "Chennai",
      district: "Chennai",
      bankInfo: "NA",
    },
    {
      sno: 2,
      supplierName: "Abhaya Pratap Singh",
      proprietorName: "None",
      gstPANNumber: "None",
      loginInfo: "Login ID: PWD",
      address: "Chennai",
      district: "Chennai",
      bankInfo: "NA",
    },
    // Add more suppliers as needed
  ],

  userData: [
    {
      Name: 'Abhishek Thakur',
      LoginId: 'dpe.narsinghpur',
      Role: 'Divisional Project Engineer (DPE)',
      Mobile: '9827671646',
      LastLogin: 'June 26, 2023, 12:32 p.m.',
      status: ['Active'],
      actions:["View","Edit","Delete"]
    }
  ]
  

  
}

export default data;
