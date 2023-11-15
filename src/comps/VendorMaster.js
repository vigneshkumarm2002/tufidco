import React from "react";
import Table from "./table";

const VendorMaster = () => {
  return (
    <Table
      tableName="Vendor Master"
      aboutTable="Add new Vendor, edit data, print data and remove from system"
      addButton={true}
    />
  );
};

export default VendorMaster;
