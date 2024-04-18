import { FaRegCalendarAlt } from "react-icons/fa";
import CalendarDialog from "./CalendarDialog";
import { Button } from "react-aria-components";
import { useState, useRef } from "react";
import { format, parseISO } from "date-fns";

const DueDateInput = () => {
  const [calIsOpen, setCalIsOpen] = useState(true);

  // temp state to hold the ISO string representation of the date chosen
  const [isoDate, setIsoDate] = useState("");

  const buttonRef = useRef(null);

  const formattedDate = isoDate ? format(parseISO(isoDate), "do LLL") : "No due date";

  return (
    <>
      <Button
        onPress={() => setCalIsOpen(!calIsOpen)}
        ref={buttonRef}
        className="flex gap-2 items-center focus:ring-2 ring-orange-400 ring-offset-2 outline-none shadow-sm bg-white px-2 py-1 rounded-md text-slate-500"
      >
        <span className="font-semibold text-nowrap">Due: {formattedDate}</span>
        <FaRegCalendarAlt />
      </Button>
      <CalendarDialog
        triggerRef={buttonRef}
        isOpen={calIsOpen}
        onOpenChange={setCalIsOpen}
        isoDate={isoDate}
        setIsoDate={setIsoDate}
      />
    </>
  );
};

export default DueDateInput;
