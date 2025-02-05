import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import './App.css'
import PetList from './components/PetList'
import SearchPets from './components/SearchPets'
import GetSighthounds from './utilities/petfinder-Api'
import NextButton from './components/NextPrevButtons'
import Hero from './components/Hero'
import Header from './components/Header'
import Filters from './components/Filters'
import PaginationInfo from './components/PaginationInfo'



function App() {

  const [searchData, setSearchData] = useState(null)
  const [pagination, setPagination] = useState(null)
  const [loading, setLoading] = useState(false)
  
  const [filters, setFilters] = useState({ 
    gender: "any",
    age: "any",
    house_trained : false,
    good_with_dogs : false,
    good_with_cats : false,
    good_with_children : false 
  });

  const [showFilters, setShowFilters] = useState(false)

  // console.log(filters)

  const handleSearch = async () => {
    console.log("handleSearch")
    setLoading(true)
    const data = await GetSighthounds(filters)
    console.log(data.animals)
    setSearchData(data.animals)
    setPagination(data)
    setLoading(false)
  }

  const handleNextPrevPage = (data) => {
    console.log(data)
    setLoading(true)
    setSearchData(data.animals)
    setPagination(data)
    setLoading(false)
  }

  const handleShowFilters = () => {
    // console.log("handleShowFilters")
    setShowFilters(!showFilters)
  }

  return (
    <>
      {/* <Header /> */}

      <div className="bg-background-primary font-baloo">
        <Hero />
        
        <div>
          {!showFilters ?
            <button className="border-1 p-2 ml-2 rounded w-48" onClick={handleShowFilters}>Show Filters <FontAwesomeIcon icon={faChevronDown} /></button>
            :
            <button className="border-1 p-2 ml-2 rounded w-48" onClick={handleShowFilters}>Hide Filters <FontAwesomeIcon icon={faChevronUp} /></button>
          }
        </div>
        {showFilters && <Filters onFilterChange={setFilters} />}
        <SearchPets onSearch={handleSearch} />
        {!loading && pagination && <PaginationInfo data={pagination}/>}
        {!loading && pagination && <NextButton data={pagination} onNext={handleNextPrevPage} loading={setLoading} /> }
        {!loading && searchData && <PetList data={searchData} />}
        {loading && <p className="text-center">Loading Snoots!</p>}
      </div>
      
    </>
  )
}

export default App
