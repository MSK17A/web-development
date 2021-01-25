import Card from './Card';

const CardList = ({ robots }) => {
    const CardArray = robots.map((items, i) => {
        return <Card
            key={i}
            id={items.id}
            name={items.name}
            email={items.email} />
    })

    return (
        <div className="tc">
            {CardArray}
        </div>

    )
}

export default CardList;