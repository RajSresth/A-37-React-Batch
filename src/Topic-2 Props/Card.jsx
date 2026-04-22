


const Card = (props) => {

  console.log("props:",props); // { player: {}}

  const {username, age, team, skill, jersy,address} = props?.player;
  const {name,city} = address?.state;

  return (
    <>
      <h4>Username: {username}</h4>
      <h4>Age: {age}</h4>
      <h4>Team: {team}</h4>
      <h4>Skill: {skill[2]}</h4>
      <h4>Jersy: {jersy}</h4>
      <h4>City: {city}</h4>
      <h4>State: {name}</h4>
    </>
  );
};

export default Card;




