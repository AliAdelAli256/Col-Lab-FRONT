import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import Terminal from "react-console-emulator";
import { Drawer } from "@material-ui/core";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Collapse } from "reactstrap";

import "./projectPage.css";
import SideBar from "../newComponents/SideBar";

const drawerWidth = 180;



const useStyles = makeStyles((theme) => ({
  root: {
    height: 240,
    flexGrow: 1,
    maxWidth: 400,
  },
  drawer: {
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    position: "absolute",
    left: "42.8px",
    top: "60px",
    overflow: "hidden",
    height: "100%",
  },
}));

function Ide(props) {
  const [membersNames, setMembersNames] = useState([
    "Ali Adel",
    "Abdullah Baher",
    "Ahmed Salama",
    "Mohammed Hatem",
    "Salah Mustafa",
    "Shehab Khaled",
  ]);
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleTerminal = () => {
    setIsOpen(!isOpen);
    if (isOpen === true) {
      document.getElementById("collapse").innerHTML =
        "<li class='fas fa-angle-up'></li>";
      document.getElementById("collapse").style.right = "20px";
      document.getElementById("collapse").style.top = "42rem";
    } else if (isOpen === false) {
      document.getElementById("collapse").innerHTML =
        "<li class='fas fa-angle-down'></li>";
      document.getElementById("collapse").style.right = "20px";
      document.getElementById("collapse").style.top = "26.2rem";
    }
  };

  const handleDrawer = () => {
    setOpen(!open);
    if (open === false) {
      document.getElementById("ide-mr").style.marginLeft = "180px";
      document.getElementById("ide-mr").style.width = "82vw";
      document.getElementById("terminal-mr").style.marginLeft = "180px";
      document.getElementById("terminal-mr").style.width = "82vw";
    } else if (open === true) {
      document.getElementById("ide-mr").style.marginLeft = "10px";
      document.getElementById("ide-mr").style.width = "94vw";
      document.getElementById("terminal-mr").style.marginLeft = "10px";
      document.getElementById("terminal-mr").style.width = "94vw";
    }
  };

  const options = {
    language: "javascript",
    automaticLayout: true,
    selectOnLineNumbers: true,
    renderIndentGuides: true,
    colorDecorators: true,
    cursorBlinking: "blink",
    autoClosingQuotes: "always",
    find: {
      autoFindInSelection: "always",
    },
    snippetSuggestions: "inline",
  };

  const errorText = "Please enter appropriate command, type help to know more.";

  return (
    <div className="flex-row">
      <SideBar handleDrawer={handleDrawer} showRun={true}/>

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
        backgroundColor="rgb(108, 117, 125);"
        style={{ zIndex: "1" }}
      >
        <div className="sidebar">
          <TreeView
            className={classes.root}
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
          >
            <TreeItem nodeId="1" label="public">
              <TreeItem
                nodeId="2"
                label="index.html"
                style={{ color: "#000" }}
              />
              <TreeItem nodeId="3" label="manifest.json" />
              <TreeItem nodeId="4" label="logo.png" />
            </TreeItem>
            <TreeItem nodeId="5" label="src">
              <TreeItem nodeId="10" label="index.js" />
              <TreeItem nodeId="6" label="component">
                <TreeItem nodeId="7" label="tree">
                  <TreeItem nodeId="8" label="tree-view.js" />
                  <TreeItem nodeId="9" label="tree-item.js" />
                </TreeItem>
              </TreeItem>
            </TreeItem>
          </TreeView>
        </div>
      </Drawer>

      <div className="flex-column">
        <button
          id="collapse"
          onClick={handleTerminal}
          type="button"
          class="btn btn-secondary btn-sm"
          style={{
            zIndex: "1",
            right: "20px",
            position: "absolute",
            marginTop: "10px",
            top: "26.2rem",
            transition: "ease-in-out 0.3s",
          }}
        >
          <i class="fas fa-angle-down"></i>
        </button>
      </div>

      <div className="flex-column">
        <div type="text" id="ide-mr" className="code">
          <Editor theme="vs-dark" options={options} />
        </div>

        <Collapse isOpen={isOpen}>
          <div id="terminal-mr">
            <Terminal
              errorText={errorText}
              ignoreCommandCase
              noEchoBack
              promptLabel={">"}
              className="main-terminal"
              contentClassName="main-terminal-content"
              promptLabelClassName="text-white"
              inputClassName="text-white"
            />
          </div>
        </Collapse>
      </div>
    </div>
  );
}

export default Ide;
