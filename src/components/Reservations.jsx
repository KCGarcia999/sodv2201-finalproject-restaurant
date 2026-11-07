function Reservations(){
    return(
    <>
        <div className="reservations">
            <h2>Reservations</h2>
        </div>

        <div>
            <form>
                <label htmlFor="date">Enter a date: </label>
                <input type="datetime-local" id="date" />
                <label htmlFor="people">Enter the amount of people (max 8):</label>
                <input type="number" id="people" max="8"/>
            </form>
        </div>
    </>
    )
}

export default Reservations