import gamemodesData from './gamemodes.js'
import Card from './card';

console.log(gamemodesData);
let gmCards = gamemodesData.map((gm) => { return <Card props = {`${gm}`}></Card> });
console.log("Cards",gmCards);
export default function App(){
    return(
        <div>
            {gmCards}
        </div>
    );
}