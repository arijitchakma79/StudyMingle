import React from "react";
import { Avatar, useChatContext } from "stream-chat-react";

// Define a functional component called TeamChannelPreview that takes props channel and type
const TeamChannelPreview = ({ channel, type }) => {

    // Use the useChatContext hook to access the current channel and client
    const { channel: activeChannel, client } = useChatContext();

    // Define a nested functional component called ChannelPreview
    const ChannelPreview = () => {
        // Render the channel's name
        return (
            <p>
                # {channel?.data?.name}
            </p>
        );
    }

    // Define a nested functional component called DirectPreview
    const DirectPreview = () => {
        // Get an array of members in the channel and filter out the current user
        const members = Object.values(channel.state.members).filter(({ user }) => user.id !== client.userID);

        // Render the avatar and name of the other member in the direct conversation
        return (
            <div>
                <Avatar
                    image={members[0]?.user?.image}
                    name={members[0]?.user?.fullName}
                    size='25'
                />
                <p>{members[0]?.user?.fullName}</p>
            </div>
        );
    }

    return (
        <div onClick={() => {
            console.log(channel);
        }}>
            {/* Render either ChannelPreview or DirectPreview based on the 'type' prop */}
            {type === 'team' ? <ChannelPreview /> : <DirectPreview />}
        </div>
    );
}

export default TeamChannelPreview;
