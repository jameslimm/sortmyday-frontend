import { getLocalTimeZone, CalendarDate } from "@internationalized/date";

import {
  Button,
  Calendar,
  CalendarCell,
  CalendarGrid,
  Dialog,
  Heading,
  Popover,
} from "react-aria-components";

import { GrCaretNext } from "react-icons/gr";
import { GrCaretPrevious } from "react-icons/gr";

const CalendarDialog = ({
  triggerRef,
  isOpen,
  onOpenChange,
  isoDate,
  setIsoDate,
  clearDateLabel = "",
}) => {
  // React Aria calendar - accepts and returns date in a custom format object
  // triggerRef - the DOM ref of the element that triggers the calendar dialog (for positioning)
  // isOpen - boolean.  If dialog shown?
  // onOpenChange - an event handler, called when calendar requests that it's closed (click outside, etc)
  // isoDate / setIsoDate - the ISO date (standard JS toIsoString)

  const handleDateChange = (calObj) => {
    // handle a click on a calendar date.  A custom calObj object is passed, use it's
    // toDate method to convert to JS date then convert to ISO string and save
    // back to parent state.
    setIsoDate(calObj.toDate(getLocalTimeZone()).toISOString());
    // close the dialog
    onOpenChange(false);
  };

  const handleClearDate = () => {
    setIsoDate("");
    onOpenChange(false);
  };

  // set the default date shown in the calendar to be either
  // based on the passed ISO String (if valid) or today's date.
  const parseDateTimeStamp = Date.parse(isoDate) || new Date().getTime();
  const newDate = new Date(parseDateTimeStamp);

  // set the default date currently selected in the calendar.
  const defaultDate = new CalendarDate(
    newDate.getFullYear(),
    newDate.getMonth() + 1,
    newDate.getDate()
  );

  const animateInClass =
    "animate-in fade-in placement-bottom:slide-in-from-top-1 placement-top:slide-in-from-bottom-1 ease-out duration-200";
  const animateOutClass =
    "animate-out fade-out placement-bottom:slide-out-to-top-1 placement-top:slide-out-to-bottom-1 ease-in duration-150";

  return (
    <Popover
      triggerRef={triggerRef}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      className={({ isEntering, isExiting }) =>
        `${isEntering ? animateInClass : ""} ${isExiting ? animateOutClass : ""}`
      }
    >
      <Dialog className="bg-white p-5" aria-label="Due date Calendar">
        <Calendar aria-label="Due date" defaultValue={defaultDate} onChange={handleDateChange}>
          <header className="flex w-full justify-between mb-4">
            <Button slot="previous">
              <GrCaretPrevious />
            </Button>
            <Heading className="text-xl font-medium text-slate-700" />
            <Button slot="next">
              <GrCaretNext />
            </Button>
          </header>
          <CalendarGrid>
            {(date) => (
              <CalendarCell
                date={date}
                className="w-8 h-8 flex items-center justify-center data-[selected=true]:bg-slate-200 text-slate-700 data-[outside-month]:text-slate-200 focus:bg-slate-200 hover:bg-slate-200 transition-all duration-75 rounded-lg"
              />
            )}
          </CalendarGrid>
        </Calendar>
        {clearDateLabel && (
          <div className="flex justify-center mt-2">
            <Button
              className="bg-slate-500 text-nowrap px-2 py-1 text-m font-semibold rounded-md text-slate-50"
              onPress={handleClearDate}
            >
              {clearDateLabel}
            </Button>
          </div>
        )}
      </Dialog>
    </Popover>
  );
};

export default CalendarDialog;
