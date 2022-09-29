import { React } from 'react';
import { useSelector } from 'react-redux';

const MyMissions = () => {
  const missions = useSelector((state) => state.missionsReducer).filter(
    (rocket) => rocket.active === true,
  );

  if (missions.length === 0) {
    return (
      <>
        <div>
          <h1>My Missions:</h1>
          <p>You have no missions</p>
        </div>
      </>
    );
  }
  return (
    <div>
      <h1>My Missions:</h1>
      {missions.map((mission) => (
        <p key={mission.mission_id}>
          {mission.mission_name}
        </p>
      ))}
    </div>
  );
};

export default MyMissions;
