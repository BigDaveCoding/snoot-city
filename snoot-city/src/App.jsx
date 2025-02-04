import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PetList from './components/PetList'
import SearchPets from './components/SearchPets'
import GetSighthounds from './utilities/petfinder-Api'

function App() {

  const [searchData, setSearchData] = useState(null)

  const handleSearch = async () => {
    console.log("handleSearch")
    const data = await GetSighthounds()
    setSearchData(data)
    console.log(data)
  }

  return (
    <>
      <p className="text-5xl text-red-500 underline underline-offset-10">testing</p>
      <SearchPets onSearch={handleSearch} />
      {searchData && <PetList data={searchData} />}
      
    </>
  )
}

export default App
