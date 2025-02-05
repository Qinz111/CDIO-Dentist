import React, { useState, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { Modal, Button, Form } from "react-bootstrap";

const Admin = () => {
  const calendarRef = useRef(null);
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });

  // Khi admin click để thêm lịch làm việc
  const handleDateSelect = (selectInfo) => {
    setNewEvent({
      title: "",
      start: selectInfo.startStr,
      end: selectInfo.endStr,
    });
    setShowModal(true);
  };

  // Khi admin lưu lịch làm việc mới
  const handleSaveEvent = () => {
    setEvents([...events, newEvent]);
    setShowModal(false);
  };

  // Khi admin xóa lịch làm việc
  const handleEventClick = (clickInfo) => {
    if (
      window.confirm(
        `Bạn có chắc muốn xóa lịch "${clickInfo.event.title}" không?`
      )
    ) {
      clickInfo.event.remove();
    }
  };

  return (
    <div className="admin-calendar-container">
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
        initialView="dayGridMonth"
        selectable={true}
        editable={true}
        events={events}
        select={handleDateSelect}
        eventClick={handleEventClick}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
        }}
      />

      {/* Modal để nhập thông tin lịch làm việc */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Thêm lịch làm việc</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Tiêu đề</Form.Label>
              <Form.Control
                type="text"
                value={newEvent.title}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, title: e.target.value })
                }
              />
            </Form.Group>
            <Button variant="primary" onClick={handleSaveEvent}>
              Lưu lịch làm việc
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Admin;
