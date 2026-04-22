

const Card = () => {
    
   const user = {
        username: "Sarvesh Kumar",
        age: 27,
        city: "Delhi",
        email: "sarvesh@gmail.com",
        pic: "https://avatars.githubusercontent.com/u/128676130?v=4"
   }

    return <>
                {/* I am Comment in Card Component */}
                <h2>Hello Developers</h2>
                <h3>Username: {user.username}</h3>
                <h3>Team: {user.team}</h3>
                <h3>Skill: {user.skill}</h3>
                <h4>Jersy: {user.jersy}</h4>
                <img src={user.pic} alt="" />
            </>
}

export default Card;