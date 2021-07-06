import React, { Component } from "react";
import ReactTooltip from "react-tooltip";
import { Link } from "react-router-dom";

class SideBar extends Component {
  render() {
    return (
      <div
        class="btn-group-vertical justify-content-start bg-secondary"
        role="group"
        aria-label="Basic example"
        style={{ padding: "2px" }}
      >
        <button
          data-tip
          onClick={this.props.handleDrawer}
          data-for="fileSystem"
          type="button"
          className="btn btn-secondary mb-1"
          style={{
            maxHeight: "40px",
            width: "40px",
            borderRadius: "5px" /*, boxShadow : '0px 0px 3px 3px gray'*/,
          }}
        >
          <i class="fas fa-copy"></i>
        </button>
        <ReactTooltip
          id="fileSystem"
          place="top"
          effect="solid"
          backgroundColor="white"
          textColor="black"
        >
          File System
        </ReactTooltip>

        <Link
          to={{
            pathname: "/default/ide",
          }}
        >
          <button
            data-tip
            data-for="communication"
            type="button"
            className="btn btn-secondary mb-1 "
            style={{ maxHeight: "40px", width: "40px", borderRadius: "5px" }}
          >
            <i class="fas fa-comments"></i>
          </button>
          <ReactTooltip
            id="communication"
            place="right"
            effect="solid"
            backgroundColor="white"
            textColor="black"
          >
            Communication
          </ReactTooltip>
        </Link>

        <button
          data-tip
          data-for="liveShare"
          type="button"
          className="btn btn-secondary mb-1 "
          style={{ maxHeight: "40px", width: "40px", borderRadius: "5px" }}
        >
          <i class="fas fa-share-square"></i>
        </button>
        <ReactTooltip
          id="liveShare"
          place="right"
          effect="solid"
          backgroundColor="white"
          textColor="black"
        >
          Live Share
        </ReactTooltip>

        <Link to="/default/code-review">
          <button
            data-tip
            data-for="review"
            type="button"
            className="btn btn-secondary mb-1 "
            style={{ maxHeight: "40px", width: "40px", borderRadius: "5px" }}
          >
            <i class="fas fa-pen"></i>
          </button>
          <ReactTooltip
            id="review"
            place="right"
            effect="solid"
            backgroundColor="white"
            textColor="black"
          >
            Review
          </ReactTooltip>
        </Link>

        <Link to="/default/tasks">
          <button
            data-tip
            data-for="tasks"
            type="button"
            className="btn btn-secondary mb-1 "
            style={{ maxHeight: "40px", width: "40px", borderRadius: "5px" }}
          >
            <i class="fas fa-tasks"></i>
          </button>
          <ReactTooltip
            id="tasks"
            place="right"
            effect="solid"
            backgroundColor="white"
            textColor="black"
          >
            Tasks
          </ReactTooltip>
        </Link>
      </div>
    );
  }
}

export default SideBar;
