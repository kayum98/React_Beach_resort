import React from "react";
import { withRoomConsumer } from "../Context";
import Loading from "./Loading";
import RoomFillter from "./RoomFillter";
import RoomList from "./RoomList";

function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomFillter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </>
  );
}
export default withRoomConsumer(RoomContainer);

// import React from "react";
// import { RoomConsumer } from "../Context";
// import Loading from "./Loading";
// import RoomFillter from "./RoomFillter";
// import RoomList from "./RoomList";
// const RoomContainer = () => {
//   return (
//     <RoomConsumer>
//       {(value) => {
//         const { loading, sortedRooms, rooms } = value;
//         if (loading) {
//           return <Loading />;
//         }
//         return (
//           <div>
//             <RoomFillter rooms={rooms} />
//             <RoomList rooms={sortedRooms} />
//           </div>
//         );
//       }}
//     </RoomConsumer>
//   );
// };

// export default RoomContainer;
