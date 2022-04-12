import {React,useCallback,  useEffect} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useWeb3React } from '@web3-react/core'
import { useGraphSummonerIDs } from '../services/graph/hooks'
import useRarityLibrary from '../hooks/useRarityLibrary'
import useIsWindowVisible from '../hooks/useIsWindowVisible'
import { useDispatch ,useSelector} from 'react-redux'
import { updateSummoners, setLoading } from '../reducers/summonerDataReducers.js'
import Summoners from '../pages/Summoners'
import NotFound from '../pages/404'

const chunkArrayByNumber = (items, elements) => {
  const res = []
  for (let i = 0; i < items.length; i += elements) {
      const chunk = items.slice(i, i + elements)
      res.push(chunk)
  }
  return res
}

const Main = () => {

  const {  account, chainId, library } = useWeb3React() 

  const ids = useGraphSummonerIDs(account)

  const { summonersFull } = useRarityLibrary()

  const windowVisible = useIsWindowVisible()

  const dispatch = useDispatch()
  
  const status = useSelector(state => state.summoners.status)

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
  }, [ids, windowVisible, fetchSummonersData, library, chainId, account,status])

  
  return ( 
    <BrowserRouter>
        <Routes>
            <Route index element={<Summoners />}   />
            <Route path='*' element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Main