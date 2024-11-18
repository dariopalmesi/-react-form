import animes from "../data/anime.js"
import { useState } from "react"

export default function AppMain() {
    const [anime, setAnime] = useState(animes)
    const [newAnime, setNewAnime] = useState('')

    function addAnime(e) {
        e.preventDefault()
        console.log(e);
        setAnime([
            ...anime,
            newAnime
        ])
        setNewAnime('')
    }






    return (
        <main>
            <div className="container">
                <form onSubmit={addAnime} className="mt-4">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" value={newAnime} onChange={e => setNewAnime(e.target.value)} />
                        <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Send</button>
                    </div>
                    <ul className="list-group mt-4">
                        {animes.map((anime, index) => (< li key={index} className="list-group-item d-flex justify-content-between" >{anime}
                            <button> <i className="bi bi-trash-fill"></i></button>
                        </li>))}
                    </ul>
                </form>
            </div >
        </main >
    )
}