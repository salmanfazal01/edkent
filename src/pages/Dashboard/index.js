import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import React, { useState } from "react";
import CustomCollapse from "../../components/CustomCollapse";
import CustomTabs from "../../components/CustomTabs";
import TabCard from "../../components/TabCard";
import Analytics from "../../containers/Analytics";
import SettingsIcon from "@material-ui/icons/Settings";

const tabsData = {
  "Tab 1": [
    {
      image:
        "https://www.svgimages.com/svg-image/s10/bar-diagram-graph-up-arrow-78085-256x256.png",
      title: "50/200",
      subtitle: "TYPE 1",
    },
    {
      image:
        "https://i.pinimg.com/originals/86/7a/58/867a58f6ca67bc58f315b318ad00cd60.png",
      title: "1356",
      subtitle: "TYPE 2",
    },
    {
      image: "https://icon-library.com/images/icon-finance/icon-finance-7.jpg",
      title: "1258",
      subtitle: "TYPE 3",
    },
    {
      image:
        "https://www.bluemarblegeo.com/knowledgebase/global-mapper-21-1/images/Buttons/Analysis/AnalysisToolbar_CreateElevationGridfrom3DData_256.png",
      title: "534",
      subtitle: "TYPE 4",
    },
  ],
  "Tab 2": [
    {
      image:
        "https://www.svgimages.com/svg-image/s10/bar-diagram-graph-up-arrow-78085-256x256.png",
      title: "50/200",
      subtitle: "TYPE 1",
    },
    {
      image:
        "https://i.pinimg.com/originals/86/7a/58/867a58f6ca67bc58f315b318ad00cd60.png",
      title: "1356",
      subtitle: "TYPE 2",
    },
  ],
};

const collapseData = [
  {
    category: "Some Dummy Category Title Text 1",
    Icon: SettingsIcon,
    items: [
      {
        title: "Title 1",
        description: "Lorem Ipsum is simply dummy text of the printing...",
      },
      {
        title: "Title 2",
        description: "Lorem Ipsum is simply dummy text of the printing...",
      },
      {
        title: "Title 3",
        description: "Lorem Ipsum is simply dummy text of the printing...",
      },
      {
        title: "Title 4",
        description: "Lorem Ipsum is simply dummy text of the printing...",
      },
      {
        title: "Title 5",
        description: "Lorem Ipsum is simply dummy text of the printing...",
      },
    ],
  },
  {
    category: "Some Dummy Category Title Text 2",
    Icon: SettingsIcon,
    items: [
      {
        title: "Title 1",
        description: "Lorem Ipsum is simply dummy text of the printing...",
      },
      {
        title: "Title 2",
        description: "Lorem Ipsum is simply dummy text of the printing...",
      },
      {
        title: "Title 3",
        description: "Lorem Ipsum is simply dummy text of the printing...",
      },
      {
        title: "Title 4",
        description: "Lorem Ipsum is simply dummy text of the printing...",
      },
      {
        title: "Title 5",
        description: "Lorem Ipsum is simply dummy text of the printing...",
      },
    ],
  },
  {
    category: "Some Dummy Category Title Text 3",
    Icon: SettingsIcon,
    items: [
      {
        title: "Title 1",
        description: "Lorem Ipsum is simply dummy text of the printing...",
      },
      {
        title: "Title 2",
        description: "Lorem Ipsum is simply dummy text of the printing...",
      },
      {
        title: "Title 3",
        description: "Lorem Ipsum is simply dummy text of the printing...",
      },
      {
        title: "Title 4",
        description: "Lorem Ipsum is simply dummy text of the printing...",
      },
      {
        title: "Title 5",
        description: "Lorem Ipsum is simply dummy text of the printing...",
      },
    ],
  },
];

const useStyles = makeStyles((theme) => ({
  collapseContainer: {
    marginBottom: "10px",
  },
  collapseButton: {
    cursor: "pointer",
  },
  collapseTitle: {
    fontWeight: 500,
    fontSize: "18px",
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState("Tab 1");

  return (
    <Grid container spacing={2}>
      {/* Collapse */}
      <Grid item xs={12} className={classes.collapseContainer}>
        <CustomCollapse title={"Lorem Ipsum"}>
          <Grid container spacing={2} justify="space-between">
            {collapseData.map((category, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <List component="nav" aria-label="main mailbox folders">
                  <ListItem button>
                    <ListItemIcon>{<category.Icon />}</ListItemIcon>
                    <ListItemText primary={category.category} />
                  </ListItem>

                  {category.items.map((item, j) => (
                    <ListItem button key={j}>
                      <ListItemIcon>0{j}</ListItemIcon>
                      <ListItemText
                        primary={item.title}
                        secondary={item.description}
                      />
                    </ListItem>
                  ))}
                </List>
              </Grid>
            ))}
          </Grid>
        </CustomCollapse>
      </Grid>

      {/* Tabs */}
      <Grid item xs={12}>
        <CustomTabs
          items={Object.keys(tabsData)}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </Grid>

      {/* Tabs Cards */}
      <Grid item xs={12}>
        <Grid container spacing={2}>
          {tabsData[activeTab].map((item, i) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
              <TabCard {...item} />
            </Grid>
          ))}
        </Grid>
      </Grid>

      {/* Analytics */}
      <Grid item xs={12}>
        <Analytics />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
