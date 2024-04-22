import { FaRegCalendarAlt } from "react-icons/fa";
import CalendarDialog from "./CalendarDialog";
import { Button } from "react-aria-components";
import { useState, useRef } from "react";
import { format, parseISO } from "date-fns";

const DueDateInput = ({ dueDate, setDueDate, isDisabled = false }) => {
  const [calIsOpen, setCalIsOpen] = useState(false);

  const buttonRef = useRef(null);
  const buttonText = dueDate ? "Due: " + format(parseISO(dueDate), "do LLL") : "Set Due Date";

  return (
    <>
      <Button
        onPress={() => setCalIsOpen(!calIsOpen)}
        isDisabled={isDisabled}
        ref={buttonRef}
        className="flex gap-2 items-center focus:ring-2 ring-orange-400 ring-offset-2 outline-none shadow-sm bg-white px-2 py-1 rounded-md text-slate-500"
      >
        <span className="font-semibold text-nowrap">{buttonText}</span>
        <FaRegCalendarAlt />
      </Button>
      <CalendarDialog
        triggerRef={buttonRef}
        isOpen={calIsOpen}
        onOpenChange={setCalIsOpen}
        isoDate={dueDate}
        setIsoDate={setDueDate}
        clearDateLabel="Clear Due Date"
      />
    </>
  );
};

export default DueDateInput;
