import gamemodesData from './gamemodes.js'
import Card from './card';

console.log(gamemodesData);
const gmCards = gamemodesData.map(gm =>{
        return <Card gamemode = {gm.gamemode} description = {gm.description} img = {gm.img} minPlayers = {gm.minPlayers} maxPlayers = {gm.maxPlayers} ></Card> 
    });

console.log("Cards",gmCards);
export default function App(){
    return(
        <div className='gamemodes'>
            {gmCards}
        </div>
    );
}