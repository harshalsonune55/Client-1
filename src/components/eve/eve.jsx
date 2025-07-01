import "./eve.css";
export default function Events() {
    return (
        <div className="events-container">
            <h1 className="heading">
                Upcoming <span>Events</span>
            </h1>
            <div className="event-list">
                {/* Event 1 */}
                <div className="event-row">
                    <div className="event-date">
                        <p className="date">11 Dec 2024</p>
                        <p className="time">Early morning for auspicious rituals</p>
                    </div>
                    <div className="event-content">
                        <div className="text-section">
                            <h2>Gita Jayanti</h2>
                            <p>
                                Gita Jayanti is the celebration of the day when Lord Krishna imparted the sacred teachings of the Bhagavad Gita to Arjuna on the battlefield of Kurukshetra. 
                                It falls on the 11th day of the waxing moon in the month of Margashirsha (usually in December). The festival marks the birth 
                                of the Gita as a scripture, inspiring devotees to reflect on its teachings. 
                                It is observed with prayers, recitations, and the chanting of Gita verses, 
                                with many devotees observing fasts to seek spiritual blessings.
                            </p>
                            <button className="join-btn">Join Now</button>
                        </div>
                        <div className="image-section">
                            <img
                                src="https://ganpateshwarbaba.netlify.app/img/GitaJayanti.jpeg"
                                alt="Gita Jayanti"
                            />
                        </div>
                    </div>
                </div>
                {/* event 2 */}
                <div className="event-row">
                    <div className="event-date">
                        <p className="date">12 Dec 2024</p>
                        <p className="time">thrusday 11:30</p>
                    </div>
                    <div className="event-content">
                        <div className="text-section">
                            <h2>Vaikuntha Ekadashi</h2>
                            <p>
                                Gita Jayanti is the celebration of the day when Lord Krishna
                                imparted the sacred teachings of the Bhagavad Gita to Arjuna on
                                the battlefield of Kurukshetra. It falls on the 11th day of the
                                waxing moon in the month of Margashirsha (usually in December).
                                The festival marks the birth of the Gita as a scripture,
                                inspiring devotees to reflect on its teachings. It is observed
                                with prayers, recitations, and the chanting of Gita verses, with
                                many devotees observing fasts to seek spiritual blessings.
                            </p>
                            <button className="join-btn">Join Now</button>
                        </div>
                        <div className="image-section">
                            <img
                                src="https://ganpateshwarbaba.netlify.app/img/vaikunta.jpg"
                                alt="Vaikuntha Ekadashi"
                            />
                        </div>
                    </div>
                </div>
                {/* event 3 */}
                <div className="event-row">
                    <div className="event-date">
                        <p className="date">15 Dec 2024</p>
                        <p className="time">Sunday 6:10 AM</p>
                    </div>
                    <div className="event-content">
                        <div className="text-section">
                            <h2>Margashirsha Purnima</h2>
                            <p>
                                Gita Jayanti is the celebration of the day when Lord Krishna
                                imparted the sacred teachings of the Bhagavad Gita to Arjuna on
                                the battlefield of Kurukshetra. It falls on the 11th day of the
                                waxing moon in the month of Margashirsha (usually in December).
                                The festival marks the birth of the Gita as a scripture,
                                inspiring devotees to reflect on its teachings. It is observed
                                with prayers, recitations, and the chanting of Gita verses, with
                                many devotees observing fasts to seek spiritual blessings.
                            </p>
                            <button className="join-btn">Join Now</button>
                        </div>
                        <div className="image-section">
                            <img
                                src="https://ganpateshwarbaba.netlify.app/img/Margashirsha.jpeg"
                                alt="Margashirsha Purnima"
                            />
       
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}