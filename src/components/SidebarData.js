import React from "react";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import PeopleIcon from "@mui/icons-material/People";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";

export const SidebarData = [
  {
    title: "Book",
    icon: <LibraryBooksIcon />,
    link: "/book",
  },
  {
    title: "User",
    icon: <PeopleIcon />,
    link: "/user",
  },
  {
    title: "Books Issued",
    icon: <LocalLibraryIcon />,
    link: "/bookIssued",
  },
];
