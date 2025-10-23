# Get With Friends

[My Notes](notes.md)

An application that allows friends, compadres, and/or work buddies to schedule times together to meet, work, hangout, eat together, or whatever else they want to do together. Utilises a shared calendar experience only accessible by those who have an account associated with the specified calendar to keep the privacy of the friend/work group.


<!-- > [!NOTE]
>  This is a template for your startup application. You must modify this `README.md` file for each phase of your development. You only need to fill in the section for each deliverable when that deliverable is submitted in Canvas. Without completing the section for a deliverable, the TA will not know what to look for when grading your submission. Feel free to add additional information to each deliverable description, but make sure you at least have the list of rubric items and a description of what you did for each item. -->

<!-- > [!NOTE]
>  If you are not familiar with Markdown then you should review the [documentation](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) before continuing. -->

## 🚀 Specification Deliverable

<!-- > [!NOTE]
>  Fill in this sections as the submission artifact for this deliverable. You can refer to this [example](https://github.com/webprogramming260/startup-example/blob/main/README.md) for inspiration. -->

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] Proper use of Markdown
- [X] A concise and compelling elevator pitch
- [X] Description of key features
- [X] Description of how you will use each technology
- [X] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references.

### Elevator pitch

Ever been part of a friend group, work team, animation cohort, or community group and have struggled to schedule a good time to get together, whether it be for eating, hanging out, working, animating, having fun, or serving? Get With Friends allows you to facilitate this often complex task by allowing realtime updates to a group calendar where anyone in the group can put down events, meetings, get togethers, etc. and allow others to react and RSVP simply and quickly. Simple, fast, and collaborative.

### Design

<!-- ![Design image](placeholder.png) -->

<!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. -->

```mermaid
sequenceDiagram
    actor You 
    participant Server 
    actor Friend 
    You->>Server: Add event (Get Together for Dinner) 
    Server-->>Friend: Event added (Get Together for Dinner) 
    Friend->>Server: React to new event (thumbs up) 
    Server-->>You: Reaction to event (thumbs up) 
    Friend->>Server: Give suggestion ("Costa Vida?") 
    Server-->>You: Suggestion posted ("Costa Vida?") 
    You->>Server: Update event (Get Together at Costa Vida) 
    Server-->>Friend: Event updated (Get Together at Costa Vida) 
```

### Key features

- User authentication over HTTPS
- Private group calendars and schedules
- Interactive calendar
- Active updates to events
- Custom events
- Ability to react to events
- Post suggestions to specific events

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - Correct structure for three pages, including: login/register, calendar management, and the selected calendar itself
- **CSS** - Well structured calendar interface, effective menus that are well styled and colored
- **React** - Login and registration fields, calendar selection menu, and event creation, reaction, and suggesting
- **Service** - Backend endpoints for:
    - login
    - registration
    - calendar retrieval
    - calendar event info retrieval
    - update calendar/event(s) (add, update, delete, suggest, react, etc.)
- **DB/Login** - Store securely user info, permissions, and calendar access. Store calendar/event info. Authenticate access before retrieval and modification
- **WebSocket** - Reactions, suggestions, and new/updated events broadcasted to all associated users in the group as they happen

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] **Server deployed and accessible with custom domain name** - [My server link](https://getwithfriends.click).

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] **HTML pages** - Made the index page into the login; added about, registration, and calendar pages
- [X] **Proper HTML element usage** - Created tables, links, buttons, fields, etc. for future actual use in as neat a way as possible with HTML
- [X] **Links** - Links from each page to some other page, usually in a sensible order
- [X] **Text** - Some descriptions, titles, headers, paragraphs, etc.
- [X] **3rd party API placeholder** - Holiday place holder that will use data pulled from a 3rd party API
- [X] **Images** - One image placeholder currently in the about page
- [X] **Login placeholder** - The index page currently has login and a link to registration
- [X] **DB data placeholder** - Events put into the calendars at a future date will be stored with its respective calendar
- [X] **WebSocket placeholder** - Reactions to events will happen in real time through WebSocket

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] **Header, footer, and main content body** - Was a bit interesting to experiment with values, and will continue to do so to make it more unique, but this is what I got for the moment
- [X] **Navigation elements** - Tried to move them around a bit more, but still got a few kinks to work out there, but functions as is
- [X] **Responsive to window resizing** - Calendar could maybe use a bit more work, but everything else sizes well
- [X] **Application elements** - Got a decent looking calendar, buttons, text fields, etc.
- [X] **Application text content** - Sized, moved around, and fiddled with text and where it goes on the page
- [X] **Application images** - Still have the one image for the moment, but might add one or two to the home page in the background

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] **Bundled using Vite** - I put everything together for Vite to work
- [X] **Components** - Made the different components for each page
- [X] **Router** - Started routing the different pages together

## 🚀 React part 2: Reactivity deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] **All functionality implemented or mocked out** - Still got some basic functions to implement, but I am considering removing them for simplicity
- [X] **Hooks**

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Node.js/Express HTTP service** - I did not complete this part of the deliverable.
- [ ] **Static middleware for frontend** - I did not complete this part of the deliverable.
- [ ] **Calls to third party endpoints** - I did not complete this part of the deliverable.
- [ ] **Backend service endpoints** - I did not complete this part of the deliverable.
- [ ] **Frontend calls service endpoints** - I did not complete this part of the deliverable.
- [ ] **Supports registration, login, logout, and restricted endpoint** - I did not complete this part of the deliverable.


## 🚀 DB deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Stores data in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Stores credentials in MongoDB** - I did not complete this part of the deliverable.

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable.
