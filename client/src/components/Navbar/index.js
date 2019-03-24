import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import RecipeSearchIcon from "@material-ui/icons/ImageSearch";
import DashboardIcon from "@material-ui/icons/TableChart";
import { Link } from "react-router-dom";
import UserOptions from "./Sidebar/UserOptions";
import "./style.css";

function ButtonAppBar(props) {
  return (
    <div>
      <AppBar position="static">
        <Toolbar className="navFlex">
          <Tabs
            className="navText"
            variant="scrollable"
            // scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
          >
            <Link to={"/search"} className="navText">
              {" "}
              <Tab
                label="Search"
                icon={<RecipeSearchIcon className="navcons" />}
              />
            </Link>
            <Link to={"/dashboard"} className="navText">
              <Tab
                label="Dashboard"
                icon={<DashboardIcon className="navcons" />}
              />
            </Link>
            <UserOptions
              navtext="navText"
              navButton="navButton"
              navcon="navcons"
              sidebarLoginButtons="sidebarLoginButtons"
              sidebarLoginText="sidebarLoginText"
              sidebarSaveButton="sidebarSaveButton"
              sidebarSavePlacement="sidebarSavePlacement"
            />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default ButtonAppBar;
