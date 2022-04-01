import {React,useCallback,  useEffect} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useWeb3React } from '@web3-react/core'
import { useGraphSummonerIDs } from './services/graph/hooks'
import useRarityLibrary from './hooks/useRarityLibrary'
import useIsWindowVisible from './hooks/useIsWindowVisible'
import { useDispatch } from 'react-redux'
import { updateSummoners, setLoading } from './reducers/summonerDataReducers.js'
import Summoners from './pages/Summoners'
import NotFound from './pages/404'
import Header from './components/Header.js';
import Footer from './components/Footer.js';

const chunkArrayByNumber = (items, elements) => {
  const res = []
  for (let i = 0; i < items.length; i += elements) {
      const chunk = items.slice(i, i + elements)
      res.push(chunk)
  }
  return res
}

const App = () => {

  const {  account, chainId, library } = useWeb3React() 

  const ids = useGraphSummonerIDs(account)

  const { summonersFull } = useRarityLibrary()

  const windowVisible = useIsWindowVisible()

  const dispatch = useDispatch()

  const fetchSummonersData = useCallback(
    async (ids) => {
        const chunks = chunkArrayByNumber(ids, 70)
        let fetchers = []
        for (let chunk of chunks) {
            fetchers.push(summonersFull(chunk))
        }
        const fetcherChunks = chunkArrayByNumber(fetchers, 10)
        let full_data = []
        for (let fChunk of fetcherChunks) {
            const chunkResponse = await Promise.all(fChunk)
            full_data = full_data.concat(...chunkResponse)
        }
        const summoners_full_data = [].concat(...full_data)     
        dispatch(updateSummoners(summoners_full_data))
        dispatch(setLoading(false))

    },
    [summonersFull]
  )

  useEffect(() => {
      if (!ids || !library || !chainId || !account || !windowVisible) return
      fetchSummonersData(ids)
  }, [ids, windowVisible, fetchSummonersData, library, chainId, account])

  
  return (
    <>
      <Header/>
      <BrowserRouter>
          <Routes>
              <Route index element={<Summoners />}   />
              <Route path='*' element={<NotFound/>}/>
          </Routes>
      </BrowserRouter>
      <Footer/>
    </> 
  )
}
export default App