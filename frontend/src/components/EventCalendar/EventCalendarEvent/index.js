import React from 'react';
import './style.scss';

import { connect } from 'react-redux';
import moment from 'moment';

import Image from '../../Image';

const EventCalendarEvent = React.memo(({ event }) => {

    return (
        <div className="EventCalendarEvent">
            <div className="EventCalendarEvent--main">
                <Image className="EventCalendarEvent--image" image={event.image} width={600} height={300} />
                <div className="EventCalendarEvent--content">
                    <span className="EventCalendarEvent--content__date">{moment(event.begins).format('DD.MM.YYYY')}</span>
                    <span className="EventCalendarEvent--content__title">{event.name}</span>
                    <span className="EventCalendarEvent--content__location">{event.locationDescription}</span>
                </div>
            </div>
            <div className="EventCalendarEvent--onhover">
                <div className="EventCalendarEvent--onhover-main">
                    <span className="EventCalendarEvent--onhover__title">{event.name}</span>
                    <span className="EventCalendarEvent--onhover__subtitle">{moment(event.begins).format('DD.MM.YYYY')} | {event.locationDescription}</span>
                    <span className="EventCalendarEvent--onhover__desc">{event.shortDescription || 'No description available...'}</span>
                </div>
                <div className="EventCalendarEvent--onhover__buttons">
                    {event.linkToEventSite ? (
                        <a className="EventCalendarEvent--onhover__button" href={event.linkToEventSite}>Event website</a>
                    ) : null}
                    {event.linkToTickets ? (
                        <a className="EventCalendarEvent--onhover__button" href={event.linkToTickets}>Get Tickets</a>
                    ) : null}
                </div>
            </div>
        </div>
    );
});

const mapStateToProps = (state, ownProps) => {
    const { event } = ownProps;
    if (event.image || !event.eventconcept) {
        return {
            event
        }
    }
    return {
        event: {
            ...event,
            image: event.eventconcept.image,
        }
    }
}

export default connect(mapStateToProps)(EventCalendarEvent);
