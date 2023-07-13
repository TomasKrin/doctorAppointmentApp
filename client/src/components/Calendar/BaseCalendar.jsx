import "moment/locale/lt";

import { Calendar, momentLocalizer } from "react-big-calendar";

import moment from "moment";

moment.locale("lt");

const localizer = momentLocalizer(moment);

const formats = {
  timeGutterFormat: "HH:mm",
  eventTimeRangeFormat: ({ start, end }, culture, localizer) =>
    `${localizer.format(start, "HH:mm", culture)} - ${localizer.format(end, "HH:mm", culture)}`,
};

const BaseCalendar = (props) => {
  return (
    <div>
      <Calendar {...props} localizer={localizer} formats={formats} />
    </div>
  );
};

export default BaseCalendar;
