// Importing necessary dependencies and components from external libraries/modules
import React, { useState } from "react";
import { useChatContext } from "stream-chat-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

// Defining the SearchComponent functional component
const SearchComponent = () => {
  // Using the 'useState' hook to manage state for the search query and loading indicator
  const [query, setQuery] = useState(""); // Initializes 'query' state as an empty string
  const [isLoading, setLoading] = useState(false); // Initializes 'isLoading' state as 'false'
  
  // Function to fetch channels based on the search query
  const getChannels = async (text) => {
    try {
      // TODO: Fetch channels based on the search query (text)
      // This is a placeholder comment for where you would implement the channel fetching logic.
    } catch (error) {
      // If an error occurs during channel fetching, clear the search query
      setQuery("");
    }
  };

  // Event handler function for the search input field
  const onSearch = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    setLoading(true); // Sets the loading state to 'true' to indicate that a search is in progress
    setQuery(event.target.value); // Updates the 'query' state with the input value
    getChannels(event.target.value); // Calls 'getChannels' function to fetch channels based on the search query
  };

  // Rendering the search input field with an icon
  return (
    <div className="flex items-center bg-white rounded-full shadow-md p-2">
      <div className="text-gray-400 mr-2">
        {/* Rendering a search icon using FontAwesome */}
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <input
        className="bg-transparent focus:outline-none w-full text-black"
        placeholder="Search"
        type="text"
        value={query}
        onChange={onSearch}
      />
    </div>
  );
};

// Exporting the SearchComponent as the default export of this module
export default SearchComponent;
