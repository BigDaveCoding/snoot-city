import { useState } from 'react'
import './App.css'
import PetList from './components/PetList'
import SearchPets from './components/SearchPets'
import GetSighthounds from './utilities/petfinder-Api'
import NextButton from './components/NextPrevButtons'
function App() {

  const [searchData, setSearchData] = useState(null)
  const [pagination, setPagination] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSearch = async () => {
    console.log("handleSearch")
    setLoading(true)
    const data = await GetSighthounds()
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

  return (
    <>
      {/* <p className="text-5xl text-red-500 underline underline-offset-10">testing</p> */}
      <SearchPets onSearch={handleSearch} />
      {!loading && pagination && <NextButton data={pagination} onNext={handleNextPrevPage} loading={setLoading} /> }
      {!loading && searchData && <PetList data={searchData} />}
      {loading && <p className="text-center">Loading Snoots!</p>}
      
    </>
  )
}

export default App
