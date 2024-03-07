import React from "react";
import Styles from "./Banner.module.css";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Companyinfo from "../CompanyInfo/Companyinfo";
import Contact from "../Contact/Contact";
import Faq from "../Faq/Faq";
import { Style } from "@mui/icons-material";
import Button from "../../Buttons/Button";
import TopWidget from "../Widgets/TopWidget";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Banner = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <section className={Styles["banner"]}>
      <div className={`${Styles["container"]} container`}>
        <div className={Styles["company-info-wrap"]}>
          <div className={Styles["banner-left"]}>
            <div className={Styles["banner-bg"]}></div>
            <div className={Styles["company-dp"]}></div>
            <div className={Styles["company-details"]}>
              <div className={Styles["personal-details"]}>
                <h3 className={Styles["company-name"]}>
                  Unified Credit Solution Pvt. Ltd
                </h3>
                <p className={Styles["status"]}>
                  Status: <span className={Styles["active"]}> Active</span>
                </p>
              </div>
                <div className={Styles["tooltip-container"]}>
                  <span class={Styles["tooltip"]}>Click Me To Update</span>
                  <Button className={Styles['update-btn']} >Update</Button>
                </div>
            </div>
          </div>
          <div className={Styles["banner-right"]}>
            <TopWidget/>
          </div>
        </div>

        <div className={Styles["overview"]}>
          <h2 className={Styles["title"]}>About</h2>
          <p className={Styles["overview-para"]}>
            UNIFIED CREDIT SOLUTIONS PRIVATE LIMITED is a incorporated on 06
            July 1995. It is classified as Company limited by Shares and is
            registered at Registrar of Companies, ROC Delhi. Its authorized
            share capital is Rs. 40,000,000.00 and its paid up capital is Rs.
            40,000,000.00. It is involved in other business activities services.
            As per records from Ministry of Corporate Affairs (MCA), Its balance
            sheet was last filed on 31 March 2023
          </p>
        </div>
        <div className="">
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Company Info" {...a11yProps(0)} />
                <Tab label="Director Details" {...a11yProps(1)} />
                <Tab label="Financial Report" {...a11yProps(2)} />
                <Tab label="Key Personnel" {...a11yProps(3)} />
                <Tab label="Company Prev Name" {...a11yProps(4)} />
              </Tabs>
            </Box>
            <CustomTabPanel
              value={value}
              index={0}
              className={Styles["company-info"]}
            >
              <div className={Styles["info"]}>
                <div className={Styles["info-header"]}>
                  <h2 className={Styles["info-title"]}>Company Information</h2>
                  <p>
                    Basic Data Updated:{" "}
                    <span className={Styles["updated"]}>15Days ago</span>
                  </p>
                </div>
                <Companyinfo />
              </div>
            </CustomTabPanel>
            <CustomTabPanel
              value={value}
              index={1}
              className={Styles["company-info"]}
            >
              Item Two
            </CustomTabPanel>
            <CustomTabPanel
              value={value}
              index={2}
              className={Styles["company-info"]}
            >
              Item Three
            </CustomTabPanel>
            <CustomTabPanel
              value={value}
              index={3}
              className={Styles["company-info"]}
            >
              Item Four
            </CustomTabPanel>
            <CustomTabPanel
              value={value}
              index={4}
              className={Styles["company-info"]}
            >
              Item Five
            </CustomTabPanel>
          </Box>
        </div>
        <div className={Style["contact"]}>
          <Contact />
        </div>
        <div className={Styles["faq"]}>
          <Faq />
        </div>
      </div>
    </section>
  );
};

export default Banner;
