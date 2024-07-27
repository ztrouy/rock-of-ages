import RockList from "../components/RockList.jsx"

const MyRocks = ({ rocks, fetchRocks }) => {
    const fetchMyRocks = () => {
        fetchRocks("?owner=current")
    }
    
    return <RockList rocks={rocks} fetchRocks={fetchMyRocks}/>
}

export default MyRocks