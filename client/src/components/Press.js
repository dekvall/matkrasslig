import React from 'react'

const Press = () => {

    const mediaApperance = [
        {
            "header": "Vinnare av Hack The Crisis 2020",
            "name": "Hack the Crisis pressmeddelande",
            "link": "https://www.mynewsdesk.com/se/hack-for-sweden/pressreleases/winners-of-hack-the-crisis-2989133",
            "description": "Det var några långa dagar och nätter, men det gick bra tillslut"}
    ]

    return (
        <div>
            {mediaApperance.map((e, i) => {
                return <div key={i}>
                        <h3>{e.header}</h3>
                        <a href={e.link}>{e.name}</a>
                        <p>{e.description}</p>
                    </div>
            })}
        </div>
    )
}

export default Press