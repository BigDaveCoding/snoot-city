import { useEffect, useState } from 'react'
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
import { useLocation } from 'react-router-dom'



function Homepage({manualNavigation, setManualNavigation}) {

  const [searchData, setSearchData] = useState(null)
  const [pagination, setPagination] = useState(null)
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
  // console.log(searchData)

  const location = useLocation();
  // console.log(location)

  const saveScrollPos = () => {
    sessionStorage.setItem("scrollPosition", window.scrollY);
    // console.log("session storage", sessionStorage.getItem("scrollPosition"));
  };

  // Restore the scroll position from sessionStorage
  const restoreScrollPosition = () => {
    if(manualNavigation) {
      console.log("manual Navigation from nav bar or logo")
      window.scrollTo(0,0)
      setManualNavigation(false)
    } else{
      const savedScrollPosition = sessionStorage.getItem('scrollPosition');
        if (savedScrollPosition) {
          // console.log('Restoring scroll position to:', savedScrollPosition);

          setTimeout(() => {
            window.scrollTo(0, parseInt(savedScrollPosition, 10));
          }, 50); 
        } else {
          console.log('No saved scroll position found.');
        }

    }
    
  };

  useEffect(() => {
    restoreScrollPosition();

    window.addEventListener('scroll', saveScrollPos);

    return () => {
      window.removeEventListener('scroll', saveScrollPos);
    };
  }, [location]); // Runs when location changes


  const handleSearch = async () => {
    console.log("handleSearch")
    setLoading(true)
    const data = await GetSighthounds(filters)
    console.log(data.animals)

    setSearchData(data.animals)
    setPagination(data)

    sessionStorage.setItem("searchData", JSON.stringify(data.animals));
    sessionStorage.setItem("pagination", JSON.stringify(data));

    setLoading(false)
  }

  const handleNextPrevPage = (data) => {
    console.log(data)
    setLoading(true)
    setSearchData(data.animals)
    setPagination(data)

    sessionStorage.setItem("searchData", JSON.stringify(data.animals));
    sessionStorage.setItem("pagination", JSON.stringify(data));

    setLoading(false)
  }

  const handleShowFilters = () => {
    // console.log("handleShowFilters")
    setShowFilters(!showFilters)
  }

  useEffect(() => {
    const savedSearchData = sessionStorage.getItem("searchData");
    const savedPagination = sessionStorage.getItem("pagination");

    if (savedSearchData && savedPagination) {
      // If data is found in sessionStorage, use it to populate state
      setSearchData(JSON.parse(savedSearchData));
      setPagination(JSON.parse(savedPagination));
    } else {
      handleSearch(); // If no data, make an API request
    }
  }, []);

  return (
    <>
      {/* <Header /> */}

      <div className="bg-background-primary font-baloo">
        
        <Hero />

        <SearchPets onSearch={handleSearch} className="text-background-primary uppercase bg-logo-font-color font-medium text-xl p-2 ml-2 rounded-3xl w-8/12 md:w-5/12 cursor-pointer" />

        <div className="flex py-4">
          {!showFilters ?
            <button className="underline underline-offset-4 font-medium text-xl p-2 ml-2 rounded w-48 cursor-pointer" onClick={handleShowFilters}>Show Filters <FontAwesomeIcon icon={faChevronDown} /></button>
            :
            <button className="underline underline-offset-4 font-medium text-xl p-2 ml-2 rounded w-48 cursor-pointer" onClick={handleShowFilters}>Hide Filters <FontAwesomeIcon icon={faChevronUp} /></button>
          }
        </div>

        {showFilters && <Filters onFilterChange={setFilters} onSearch={handleSearch} />}

        {!loading && pagination && <PaginationInfo data={pagination}/>}

        {!loading && pagination && <NextButton data={pagination} onNext={handleNextPrevPage} loading={setLoading} /> }

        {!loading && searchData && <PetList data={searchData} />}

        {loading && <p className="text-center">Loading Snoots!</p>}

        {!loading && pagination && <PaginationInfo data={pagination}/>}

        {!loading && pagination && <NextButton data={pagination} onNext={handleNextPrevPage} loading={setLoading} /> }

      </div>
      
    </>
  )
}

export default Homepage
