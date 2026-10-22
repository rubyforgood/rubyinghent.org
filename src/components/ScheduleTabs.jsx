import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const days = [
  {
    name: "Monday",
    date: "February 1",
    activities: [
      ["9:00-10:00am", "Check In"],
      ["10:00-11:00am", "Team Formation and Setup (note: we'll send out projects ahead of time so you can clone down and get them running ahead of time)"],
      ["11:00-12:00pm", "Team Norming and Project overviews by team leads"],
      ["12:00-1:00pm", "Lunch"],
      ["1:00-5:30pm", "Coding! We encourage pairing and mobbing."],
      ["5:30-Late", "Dinner, drinks, socializing!"],
    ],
  },
  {
    name: "Tuesday",
    date: "February 2",
    activities: [
      ["9:00am-12:pm", "Coding"],
      ["12:00-1:00pm", "Lunch"],
      ["1:00-5:30pm", "Coding! We encourage pairing and mobbing."],
      ["5:30-Late", "Dinner, drinks, socializing!"],
    ],
  },
  {
    name: "Wednesday",
    date: "February 3",
    activities: [
      ["9:00 AM", "Coding"],
      ["12:00 PM", "Lunch"],
      ["1:00 PM", "Coding"],
      ["4:00 PM", "Demos what we've accomplished (we'll have our stakeholders on a video call so they can see how we've helped them!)"],
      ["5:30-Late", "Dinner, drinks, socializing!"],
    ],
  },
];

export default function ScheduleTabs() {
  return (
    <Tabs forceRenderTabPanel>
      <TabList>
        {days.map((day) => <Tab key={day.name}>{day.name}</Tab>)}
      </TabList>
      {days.map((day) => (
        <TabPanel key={day.name}>
          <h2>{`${day.name}, ${day.date}`}</h2>
          <ul>
            {day.activities.map(([time, description]) => (
              <li key={time}><strong>{time}</strong> - {description}</li>
            ))}
          </ul>
        </TabPanel>
      ))}
    </Tabs>
  );
}
