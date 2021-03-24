import {
  Twitter,
  Home,
  NotificationsNone,
  Search,
  MailOutline,
  BookmarkBorder,
  MoreHoriz,
  ListAlt,
} from "@material-ui/icons";
import React from "react";
import SidebarOption from "./SidebarOption";
import "./Sidebar.css";
import { Button } from "@material-ui/core";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Twitter className="sidebar__icon" />

      <SidebarOption text="Home" Icon={Home} active={true} />
      <SidebarOption text="Notifications" Icon={NotificationsNone} />
      <SidebarOption text="Explore" Icon={Search} />
      <SidebarOption text="Messages" Icon={MailOutline} />
      <SidebarOption text="Bookmarks" Icon={BookmarkBorder} />
      <SidebarOption text="Lists" Icon={ListAlt} />
      <SidebarOption text="More" Icon={MoreHoriz} />
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
};

export default Sidebar;
