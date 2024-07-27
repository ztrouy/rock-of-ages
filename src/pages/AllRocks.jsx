import RockList from "../components/RockList.jsx"

const AllRocks = ({ rocks, fetchRocks }) => {
    return <RockList rocks={rocks} fetchRocks={fetchRocks}/>
}

export default AllRocks