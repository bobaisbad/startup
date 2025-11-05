import React from 'react';
import './calendars.css';

export function Base({ events, setter }) {
    // React.useEffect(() => {}, []);
    
    localStorage.setItem('eventID', 0);

    // let events = [];
    events.push({ time: 'All Day',
                monday: { id: '', name: '' },
                tuesday: { id: '', name: '' },
                wednesday: { id: '', name: '' },
                thursday: { id: '', name: '' },
                friday: { id: '', name: '' },
                saturday: { id: '', name: '' },
                sunday: { id: '', name: '' } });

    events.push({ time: '12:00 AM',
                monday: { id: '', name: '' },
                tuesday: { id: '', name: '' },
                wednesday: { id: '', name: '' },
                thursday: { id: '', name: '' },
                friday: { id: '', name: '' },
                saturday: { id: '', name: '' },
                sunday: { id: '', name: '' } });
    
    events.push({ time: '1:00 AM',
                monday: { id: '', name: '' },
                tuesday: { id: '', name: '' },
                wednesday: { id: '', name: '' },
                thursday: { id: '', name: '' },
                friday: { id: '', name: '' },
                saturday: { id: '', name: '' },
                sunday: { id: '', name: '' } });

    events.push({ time: '2:00 AM',
                monday: { id: '', name: '' },
                tuesday: { id: '', name: '' },
                wednesday: { id: '', name: '' },
                thursday: { id: '', name: '' },
                friday: { id: '', name: '' },
                saturday: { id: '', name: '' },
                sunday: { id: '', name: '' } });

    events.push({ time: '3:00 AM',
                monday: { id: '', name: '' },
                tuesday: { id: '', name: '' },
                wednesday: { id: '', name: '' },
                thursday: { id: '', name: '' },
                friday: { id: '', name: '' },
                saturday: { id: '', name: '' },
                sunday: { id: '', name: '' } });

    events.push({ time: '4:00 AM',
                monday: { id: '', name: '' },
                tuesday: { id: '', name: '' },
                wednesday: { id: '', name: '' },
                thursday: { id: '', name: '' },
                friday: { id: '', name: '' },
                saturday: { id: '', name: '' },
                sunday: { id: '', name: '' } });
    
    events.push({ time: '5:00 AM',
                monday: { id: '', name: '' },
                tuesday: { id: '', name: '' },
                wednesday: { id: '', name: '' },
                thursday: { id: '', name: '' },
                friday: { id: '', name: '' },
                saturday: { id: '', name: '' },
                sunday: { id: '', name: '' } });
    
    events.push({ time: '6:00 AM',
                monday: { id: '', name: '' },
                tuesday: { id: '', name: '' },
                wednesday: { id: '', name: '' },
                thursday: { id: '', name: '' },
                friday: { id: '', name: '' },
                saturday: { id: '', name: '' },
                sunday: { id: '', name: '' } });

    events.push({ time: '7:00 AM',
                monday: { id: '', name: '' },
                tuesday: { id: '', name: '' },
                wednesday: { id: '', name: '' },
                thursday: { id: '', name: '' },
                friday: { id: '', name: '' },
                saturday: { id: '', name: '' },
                sunday: { id: '', name: '' } });

    events.push({ time: '8:00 AM',
                monday: { id: '', name: '' },
                tuesday: { id: '', name: '' },
                wednesday: { id: '', name: '' },
                thursday: { id: '', name: '' },
                friday: { id: '', name: '' },
                saturday: { id: '', name: '' },
                sunday: { id: '', name: '' } });
    
    events.push({ time: '9:00 AM',
                monday: { id: '', name: '' },
                tuesday: { id: '', name: '' },
                wednesday: { id: '', name: '' },
                thursday: { id: '', name: '' },
                friday: { id: '', name: '' },
                saturday: { id: '', name: '' },
                sunday: { id: '', name: '' } });

    events.push({ time: '10:00 AM',
                monday: { id: '', name: '' },
                tuesday: { id: '', name: '' },
                wednesday: { id: '', name: '' },
                thursday: { id: '', name: '' },
                friday: { id: '', name: '' },
                saturday: { id: '', name: '' },
                sunday: { id: '', name: '' } });

    events.push({ time: '11:00 AM',
                monday: { id: '', name: '' },
                tuesday: { id: '', name: '' },
                wednesday: { id: '', name: '' },
                thursday: { id: '', name: '' },
                friday: { id: '', name: '' },
                saturday: { id: '', name: '' },
                sunday: { id: '', name: '' } });
    
    events.push({ time: '12:00 PM',
                monday: { id: '', name: '' },
                tuesday: { id: '', name: '' },
                wednesday: { id: '', name: '' },
                thursday: { id: '', name: '' },
                friday: { id: '', name: '' },
                saturday: { id: '', name: '' },
                sunday: { id: '', name: '' } });
    
    events.push({ time: '1:00 PM',
                monday: { id: '', name: '' },
                tuesday: { id: '', name: '' },
                wednesday: { id: '', name: '' },
                thursday: { id: '', name: '' },
                friday: { id: '', name: '' },
                saturday: { id: '', name: '' },
                sunday: { id: '', name: '' } });
    
    events.push({ time: '2:00 PM',
                monday: { id: '', name: '' },
                tuesday: { id: '', name: '' },
                wednesday: { id: '', name: '' },
                thursday: { id: '', name: '' },
                friday: { id: '', name: '' },
                saturday: { id: '', name: '' },
                sunday: { id: '', name: '' } });

    events.push({ time: '3:00 PM',
                monday: { id: '', name: '' },
                tuesday: { id: '', name: '' },
                wednesday: { id: '', name: '' },
                thursday: { id: '', name: '' },
                friday: { id: '', name: '' },
                saturday: { id: '', name: '' },
                sunday: { id: '', name: '' } });

    events.push({ time: '4:00 PM',
                monday: { id: '', name: '' },
                tuesday: { id: '', name: '' },
                wednesday: { id: '', name: '' },
                thursday: { id: '', name: '' },
                friday: { id: '', name: '' },
                saturday: { id: '', name: '' },
                sunday: { id: '', name: '' } });
    
    events.push({ time: '5:00 PM',
                monday: { id: '', name: '' },
                tuesday: { id: '', name: '' },
                wednesday: { id: '', name: '' },
                thursday: { id: '', name: '' },
                friday: { id: '', name: '' },
                saturday: { id: '', name: '' },
                sunday: { id: '', name: '' } });
    
    events.push({ time: '6:00 PM',
                monday: { id: '', name: '' },
                tuesday: { id: '', name: '' },
                wednesday: { id: '', name: '' },
                thursday: { id: '', name: '' },
                friday: { id: '', name: '' },
                saturday: { id: '', name: '' },
                sunday: { id: '', name: '' } });

    events.push({ time: '7:00 PM',
                monday: { id: '', name: '' },
                tuesday: { id: '', name: '' },
                wednesday: { id: '', name: '' },
                thursday: { id: '', name: '' },
                friday: { id: '', name: '' },
                saturday: { id: '', name: '' },
                sunday: { id: '', name: '' } });

    events.push({ time: '8:00 PM',
                monday: { id: '', name: '' },
                tuesday: { id: '', name: '' },
                wednesday: { id: '', name: '' },
                thursday: { id: '', name: '' },
                friday: { id: '', name: '' },
                saturday: { id: '', name: '' },
                sunday: { id: '', name: '' } });
    
    events.push({ time: '9:00 PM',
                monday: { id: '', name: '' },
                tuesday: { id: '', name: '' },
                wednesday: { id: '', name: '' },
                thursday: { id: '', name: '' },
                friday: { id: '', name: '' },
                saturday: { id: '', name: '' },
                sunday: { id: '', name: '' } });
    
    events.push({ time: '10:00 PM',
                monday: { id: '', name: '' },
                tuesday: { id: '', name: '' },
                wednesday: { id: '', name: '' },
                thursday: { id: '', name: '' },
                friday: { id: '', name: '' },
                saturday: { id: '', name: '' },
                sunday: { id: '', name: '' } });

    events.push({ time: '11:00 PM',
                monday: { id: '', name: '' },
                tuesday: { id: '', name: '' },
                wednesday: { id: '', name: '' },
                thursday: { id: '', name: '' },
                friday: { id: '', name: '' },
                saturday: { id: '', name: '' },
                sunday: { id: '', name: '' } });

        // console.log(events);
        localStorage.setItem('events', JSON.stringify(events));
        setter(events);

    // const infoPath = '/' + /[0-9]*/;
    // console.log(infoPath);
}