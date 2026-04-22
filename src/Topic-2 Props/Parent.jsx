import Card from "./Card";

const Parent = () => {

    const player = {
        username: "Rohit Sharma",
        age: 38,
        team: "MI",
        jersy: 45,
        skill: ["batting","bowling", "captaincy"],
        address: {
            country: "India",
            state: {
                name: "Maharashtra",
                city: "Mumbai"
            },
        }
    }

    return <div className="parent-component">
            
            {/* <Card username="Virat Kohli" age={36} team="RCB" skill="batting" jersy={18} /> */}

            <Card player={player} />
    </div>
}




export default Parent;