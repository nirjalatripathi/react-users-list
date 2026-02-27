function UserCard ({ name, age, profession}) {
    return (
        <div>
            <h3> {name}</h3>
            <p> Age: {age}</p>
            <p> Profession: {profession}</p>

        </div>
    );

}
export default function Assignment2() {
    return (
        <div> 
            <h1> User Cards</h1>
            <UserCard name="Nirjala" age={19} profession="Student"/>
            <UserCard name="Nirajan" age={22} profession="Teacher"/>
            <UserCard name="Sita" age={26} profession="Developer"/>

        </div>
    );
}