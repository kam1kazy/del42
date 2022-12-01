import React, { useState } from "react"
import PropTypes from "prop-types"

import { Tabs, Tab, Box, Card, CardContent } from "@mui/material"

import FormArea from "./myCompany/StepperCreateCompany"

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  }
}

export default function Navigations() {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <>
      <Card variant="outlined" sx={{ mt: 5 }}>
        <CardContent>
          <Box sx={{ width: "100%", marginBottom: "10px", marginTop: "10px" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Акции" {...a11yProps(0)} />
                <Tab label="Карточка товара" {...a11yProps(1)} />
                <Tab label="Каталог" {...a11yProps(2)} />
              </Tabs>
            </Box>
          </Box>
        </CardContent>
      </Card>

      <Card variant="outlined" sx={{ mt: 6, mb: 10 }}>
        <CardContent>
          <TabPanel value={value} index={0}>
            <FormArea />
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
        </CardContent>
      </Card>
    </>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}
