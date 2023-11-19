import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Vendor from "./VendorMaster";
import Container from "./Container";
import data from "./tableData.js"
import SOR from './navComps/sor.js';
import List from "./List.js"
import FinancialProgress from './navComps/financialProgression.js';
import ProjectSanction from "./navComps/preSanction.js"
import FileUpload from './navComps/fileUpload.js';
import GanttChart from './navComps/ganttChart.js';
import NotFound from './navComps/notFound.js';

const RouterComp = () => {
  console.log(data)
  return (
    <Routes>
      <Route path="/dashboard" element={<Home/>} />

      <Route path="/setup/master-data" element={<Container cardData={data.masterData} addButton={false}  tableName="Master Data" folderpath="Setup / Master Data" />} />
      <Route path="/setup/sor" element={<SOR addButton={true}  tableName="SOR"  folderpath="Setup / SOR" />} />
      <Route path="/setup/non-sor" element={<SOR addButton={true}  tableName="Non SOR"  folderpath="Setup / Non SOR" />} />
      <Route path="/setup/vendor-master" element={<Container tableData={data.Vendordata} addButton={true}  tableName="Vendor Master" aboutTable="Add new Vendor, edit data,print data and remove from system" folderpath="Setup / Vendor Master" />} />

      <Route path="/implementing-agency/municipal-corporation" element={<Container tableData={data.municipalCorporationsData} addButton={true} tableName="Municipal Corporation" aboutTable="Project, Edit data, view data" folderpath="Implementing Agency / Municipal Corporation" />} />
      <Route path="/implementing-agency/municipality" element={<Container tableData={data.municipalCorporationsData} addButton={true}  tableName="Municipality" aboutTable="Project, Edit data, view data" folderpath="Implementing Agency / Municipality" />} />
      <Route path="/implementing-agency/town-panchayat" element={<Container tableData={data.municipalCorporationsData} addButton={true}  tableName="Town Panchayat" aboutTable="Project, Edit data, view data" folderpath="Implementing Agency / Town Panchayat" />}/>
      <Route path="/implementing-agency/water-board" element={<Container tableData={data.waterBoardData} addButton={true}  tableName="Water Board" aboutTable="Project, Edit data, view data" folderpath="Implementing Agency / Water Board" />} />

      <Route path="/post-sanction/pre-sanction" element={<Container tableData={data.preSanction} addButton={true}  tableName="Pre Sanction List" aboutTable="Project, Edit data, view data and remove from system" folderpath="Implementing Agency / Pre Sanction" />}  />
      <Route path="/post-sanction/project-sanction"  element={<ProjectSanction addButton={true}   tableName="Project Sanction"  folderpath="Finance / Project Sanction" />} />

      <Route path="/finance/scheme-opening-balance" element={<Container tableData={data.schemeOpeningData} addButton={true}  tableName="Scheme Opening Balance"  folderpath="Finance / Scheme Opening Balance" />}  />
      <Route path="/finance/scheme-money-received" element={<Container tableData={data.schemeOpeningData} addButton={true}  tableName="Scheme Money Received"  folderpath="Finance / Scheme Money Received" />} />
      <Route path="/finance/scheme-financial-position" element={<List addButton={true}  data={data.schemeFinancialData} tableName="Scheme Financial Position"  folderpath="Finance / Scheme Financial Position" />} />
      <Route path="/finance/project-opening-balance" element={<Container tableData={data.schemeOpeningData} addButton={true}  tableName="Project Opening Balance"  folderpath="Finance / Project Opening Balance" />} />
      <Route path="/finance/project-fund-allocation" element={<Container tableData={data.schemeOpeningData} addButton={true}  tableName="Project Fund Allocation"  folderpath="Finance / Project Fund Allocation" />} />
      <Route path="/finance/project-financial-position" element={<List addButton={true}  data={data.projectFinancialData} tableName="Project Financial Position"  folderpath="Finance / Project Financial Position" />} />
      <Route path="/finance/allocation-and-expenditure" element={<Container tableData={data.schemeOpeningData} addButton={true}  tableName="Allocation and Expenditure"  folderpath="Finance / Allocation and Expenditure" />} />
      <Route path="/finance/financial-progress" element={<FinancialProgress addButton={true}   tableName="Financial Progress"  folderpath="Finance / Financial Progress" />} />
      <Route path="/finance/financial-progress-list" element={<Container tableData={data.schemeOpeningData} addButton={true}  tableName="Financial Progress List"  folderpath="Finance / Financial Progress List" />} />
      <Route path="/finance/budget-provision" element={<Container tableData={data.schemeOpeningData} addButton={true}  tableName="Budget Provision"  folderpath="Finance / Budget Provision" />} />
      <Route path="/finance/finance-report" element={<Container cardData={data.financeReportData} addButton={false}  tableName="Finance Report" folderpath="Finance / Finance Report" />} />

      <Route path="/administration-sanction/file-upload" element={<FileUpload  addButton={false}  tableName="File Upload" folderpath="Administration Sanction / File Upload" />} />
      <Route path="/administration-sanction/file-list"  element={<Container tableData={data.fileListData} addButton={true}  tableName="File List"  folderpath="Administration Sanction / File List" />} />

      <Route path="/user-profile/users" element={<Container tableData={data.userData} addButton={true}  tableName="Users" folderpath="User profile / Users"/>} />

      <Route path="/contractor" element={<Container tableData={data.concessionaireData} addButton={true}  tableName="Contractor"  folderpath="Contractor" />} />
      <Route path="/architect" element={<Container tableData={data.architectData} addButton={true}  tableName="Architect"  folderpath="Architect" />}/>
      <Route path="/supplier" element={<Container tableData={data.suppliers} addButton={true}  tableName="Suppliers"  folderpath="Supplier" />} />
      <Route path="/projects" element={<Container tableData={data.projectData} addButton={true}  tableName="List Of Project" aboutTable="Project, Edit data, view data and remove from system" folderpath=" Projects" />} />
      <Route path="/gantt-chart"  element={<GanttChart addButton={true}  tableName="Gantt Chart"  folderpath="GanttChart" />} />
      <Route path="/physical-progress/progress-updation" element={<Container tableData={data.physicalProgress} addButton={true}  tableName="Progress Updation"  folderpath="Physical Progress / Progress Updation "/>}/>
      <Route path="/invoice" element={<Container tableData={data.invoiceData} addButton={true}  tableName="Invoice" folderpath="Invoice"/>} />
      <Route path="/demand" element={<Container tableData={data.demandData} addButton={true}  tableName="Demand" folderpath="Demand"/>} />
      <Route path="/issue" element={<Container tableData={data.IssuesData} addButton={true}  tableName="Issues" folderpath="Issues"/>} />
      <Route path="/attendance" element={<Container tableData={data.attendenceData} addButton={true}  tableName="Attendance" folderpath="Attendance"/>} />
      <Route path="/circular" element={<Container tableData={data.circularData} addButton={true}  tableName="Circular" folderpath="Circular"/>} />
      <Route path="/format" element={<Container cardData={data.FormatData} format={true} addButton={false}  tableName="Format" folderpath="Format" />} />
      <Route path="/report" element={<Container cardData={data.reportData} addButton={false}  tableName="Report" folderpath="Report" />} />
      {/* Add a catch-all route for 404 pages */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RouterComp;
