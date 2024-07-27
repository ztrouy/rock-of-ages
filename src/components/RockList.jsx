import { useEffect } from "react"

const RockList = ({ rocks, fetchRocks }) => {
    useEffect(() => {
        fetchRocks()
    }, [])

    const handleDelete = (id) => {
        const deleteOptions = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${JSON.parse(localStorage.getItem("rock_token")).token}`
            }
        }

        fetch(`http://localhost:8000/rocks/${id}`, deleteOptions).then(() => {
            fetchRocks()
        })
    }

    const displayRocks = () => {
        if (rocks && rocks.length) {
            return rocks.map(rock => <div key={`key-${rock.id}`} className="border p-5 border-solid hover:bg-fuchsia-500 hover:text-violet-50 rounded-md border-violet-900 mt-5 bg-slate-50">
                <div>
                    {rock.name} ({rock.type.label}) weighs {rock.weight} kg
                </div>
                <div>
                    In the collection of {rock.user.firstName} {rock.user.lastName}
                </div>
                {location.pathname.includes("/mine") && (
                    <button 
                        className="button rounded-md bg-red-700 text-blue-100 p-2 mt-4"
                        onClick={() => handleDelete(rock.id)}
                    >
                        Delete
                    </button>
                )}
            </div>)
        }

        return <h3>Loading Rocks...</h3>
    }

    return (
        <>
            <h1 className="text-3xl">Rock List</h1>
            {displayRocks()}
        </>
    )
}

export default RockList