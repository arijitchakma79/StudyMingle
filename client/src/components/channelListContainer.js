// Importing necessary dependencies and components from external libraries/modules
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { SearchComponent, TeamChannelList, TeamChannelPreview } from './'
import { ChannelList, useChatContext } from "stream-chat-react";

// Defining a functional component called SideBar
const SideBar = () => {
  return (
    // JSX code for rendering the sidebar
    <div className="w-1/4 bg-blue-800 py-6 px-4 text-white">
      {/* Sidebar content */}
      <div className="text-center">
        {/* Rendering a FontAwesome icon (book icon) */}
        <FontAwesomeIcon icon={faBook} size="1.5x" />
      </div>
    </div>
  );
};

// Defining a functional component called AppHeader
const AppHeader = () => {
  return (
    // JSX code for rendering the application header
    <div className="h-screen w-3/4 bg-blue-600 py-6 px-4 text-white text-20">
      {/* Rendering the application name */}
      <p>StudyMingle</p>
      <div>
        {/* Rendering the SearchComponent component */}
        <SearchComponent />
        {/* Rendering the ChannelList component */}
        <ChannelList 
          filters={{}} // Filters for channel list (in this case, no filters)
          channelRenderFilterFn={() => {}} // Function for rendering individual channels
          List={(listProps) => (
            // Rendering the TeamChannelList component with some props
            <TeamChannelList {...listProps} type="team" />
          )}
          Preview={(previewProp) => {
            <TeamChannelPreview {...previewProp} type ='team'/>
          }}
        />

          <ChannelList 
          filters={{}} // Filters for channel list (in this case, no filters)
          channelRenderFilterFn={() => {}} // Function for rendering individual channels
          List={(listProps) => (
            // Rendering the TeamChannelList component with some props
            <TeamChannelList {...listProps} type="messaging" />
          )}
          Preview={(previewProp) => {
            <TeamChannelPreview {...previewProp} type ='messaging'/>
          }}
        />
      </div>
    </div>
  );
};

// Defining a functional component called ChannelListContainer
const ChannelListContainer = () => {
  return (
    // JSX code for rendering the channel list container
    <div className="flex w-80">
      {/* Rendering the SideBar component */}
      <SideBar />
      {/* Rendering the AppHeader component */}
      <AppHeader />
    </div>
  );
};

// Exporting the ChannelListContainer component as the default export of this module
export default ChannelListContainer;
