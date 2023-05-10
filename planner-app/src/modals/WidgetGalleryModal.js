import React, { useState } from 'react'
import ClockWidget from '../widgets/ClockWidget'
import ReminderListWidget from '../widgets/ReminderWidget'
import TimerWidget from '../widgets/TimerWidget'
import CalendarWidget from '../widgets/CalendarWidget'
 
export default function WidgetGalleryModal({ setShowWidgetModal, selectedWidgetArea, widgets, setWidgets }) {
    const [galleryWidgets, setGalleryWidgets] = useState([
        { component: <ClockWidget />, name: "Date and Time" },
        { component: <ReminderListWidget />, name: "Reminder List" },
        { component: <TimerWidget />, name: "Timer" },
        { component: <CalendarWidget />, name: "Calendar" },
    ])
    return (
        <div className="modal"
            onClick={(e) => {
                setShowWidgetModal(false)
            }}
        >
            <div className="modal-content">
                <div className="modal-header">
                    <h2>Widget Gallery</h2>
                    <div>
                        {galleryWidgets.map((widget, index) => {
                            return (
                                <div key={index} className='widget-gallery-item'
                                    onClick={() => {
                                        setWidgets([...widgets, {
                                            id: new Date().getTime(),
                                            component: widget.component,
                                            area: selectedWidgetArea
                                        }])
                                        setShowWidgetModal(false)
                                    }}
                                >
                                    <div className='row'>
                                        <div className='widget-gallery-item-name'>{widget.name}</div>
                                        <div className='widget-gallery-item-add-button'>+</div>
                                    </div>
                                    {widget.component}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
