import React from 'react'
import { useParams } from 'react-router-dom'
import { appId, serversecret } from '../Helper';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
const Room = () => {
    const { roomid } = useParams();
    const myMeeying = async(elem) => {
        const appID = appId;
        const serverSecret = serversecret;
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomid, Date.now().toString(), "Shiv");
        // Create instance object from Kit Token.
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        // start the call
        zp.joinRoom({
            container:elem,
            sharedLinks: [
                {
                  name: 'Personal link',
                  url:`http://localhost:3000/room/${roomid}`
                },
              ],      
            scenario: {
                mode:ZegoUIKitPrebuilt.OneONoneCall
               },       
        })
    }
    return (
        <div>
            <div ref = {myMeeying}     />
        </div>
    )
}

export default Room