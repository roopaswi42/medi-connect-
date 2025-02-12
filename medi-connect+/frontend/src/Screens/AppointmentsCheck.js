import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Box } from "@mui/material";
import { useState } from "react";
import PendingAppouintments from "./pendingAppouintments";
import AcceptedAppointment from "./AcceptedAppointment";
function AppointmentsCheck() {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ marginTop: "70px" }}>
      <Box>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Pending Appointements" value="1" />
              <Tab label="Scheduled Appointements" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1"><PendingAppouintments/></TabPanel>
          <TabPanel value="2"><AcceptedAppointment/></TabPanel>
        </TabContext>
      </Box>
    </Box>
  );
}

export default AppointmentsCheck;