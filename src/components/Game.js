import CardTable from "./CardTable";



function Game() {
    return (
        <div>
            <CardTable round={1} />
            <CardTable round={2} />
            <CardTable round={3} />
        </div>
    )
}


export default Game;