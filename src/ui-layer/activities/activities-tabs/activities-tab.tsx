import {
  SelectTabData,
  SelectTabEvent,
  Tab,
  TabList,
  TabValue,
} from "@fluentui/react-components";
import {
  AccessibilityCheckmark24Regular,
  AddCircle24Regular,
} from "@fluentui/react-icons";
import { useState } from "react";
import AllActivities from "../all-activities/all-activities";
import AddActivity from "../add-activity/add-activity";

const ActivitiesTab = () => {
  const [selectedValue, setSelectedValue] =
    useState<TabValue>("all_activities");

  const onTabSelect = (_event: SelectTabEvent, data: SelectTabData) => {
    setSelectedValue(data.value);
  };

  return (
    <>
      <TabList selectedValue={selectedValue} onTabSelect={onTabSelect}>
        <Tab
          id="all_activities"
          icon={<AccessibilityCheckmark24Regular />}
          value="all_activities"
        >
          All Activities
        </Tab>
        <Tab
          id="add_activity"
          icon={<AddCircle24Regular />}
          value="add_activity"
        >
          Add Activity
        </Tab>
      </TabList>
      <div className="p-6">
        {selectedValue === "all_activities" && <AllActivities />}
        {selectedValue === "add_activity" && <AddActivity />}
      </div>
    </>
  );
};

export default ActivitiesTab;
