import { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import PetList from '../components/PetList'
import SearchPets from '../components/SearchPets'
import GetSighthounds from '../utilities/petfinder-Api'
import NextButton from '../components/NextPrevButtons'
import Hero from '../components/Hero'
import Header from '../components/Header'
import Filters from '../components/Filters'
import PaginationInfo from '../components/PaginationInfo'



function Homepage() {

  // const [searchData, setSearchData] = useState(null)
  // const [pagination, setPagination] = useState(null)

  const searchDataRef = useRef(null)
  const paginationRef = useRef(null)

  const [loading, setLoading] = useState(false)
  
  const [filters, setFilters] = useState({ 
    gender: "any",
    age: "any",
    house_trained : false,
    good_with_dogs : false,
    good_with_cats : false,
    good_with_children : false,
    name : "",
    limit : 20 
  });

  const [showFilters, setShowFilters] = useState(false)

  // console.log(filters)
  console.log(searchDataRef)

  const handleSearch = async () => {
    console.log("handleSearch")
    setLoading(true)
    const data = await GetSighthounds(filters)
    console.log(data.animals)
    // setSearchData(data.animals)
    // setPagination(data)

    searchDataRef.current = data.animals;
    paginationRef.current = data;

    setLoading(false)
  }

  const handleNextPrevPage = (data) => {
    console.log(data)
    setLoading(true)
    // setSearchData(data.animals)
    // setPagination(data)

    searchDataRef.current = data.animals;
    paginationRef.current = data;

    setLoading(false)
  }

  const handleShowFilters = () => {
    // console.log("handleShowFilters")
    setShowFilters(!showFilters)
  }

  useEffect(() => {
    // Only call the API if no data is present in useRef
    if (!searchDataRef.current) {
      handleSearch();
    }
  }, []);

  return (
    <>
      {/* <Header /> */}

      <div className="bg-background-primary font-baloo">
        
        <Hero />

        <SearchPets onSearch={handleSearch} className="text-background-primary uppercase bg-logo-font-color font-medium text-xl p-2 ml-2 rounded-3xl w-8/12" />

        <div className="flex py-4">
          {!showFilters ?
            <button className="underline underline-offset-4 font-medium text-xl p-2 ml-2 rounded w-48" onClick={handleShowFilters}>Show Filters <FontAwesomeIcon icon={faChevronDown} /></button>
            :
            <button className="underline underline-offset-4 font-medium text-xl p-2 ml-2 rounded w-48" onClick={handleShowFilters}>Hide Filters <FontAwesomeIcon icon={faChevronUp} /></button>
          }
        </div>

        {showFilters && <Filters onFilterChange={setFilters} onSearch={handleSearch} />}

        {!loading && paginationRef.current && <PaginationInfo data={paginationRef.current}/>}

        {!loading && paginationRef.current && <NextButton data={paginationRef.current} onNext={handleNextPrevPage} loading={setLoading} /> }

        {!loading && searchDataRef.current && <PetList data={searchDataRef.current} />}

        {loading && <p className="text-center">Loading Snoots!</p>}

      </div>
      
    </>
  )
}

export default Homepage
