import useSWR from 'swr';
import axios from 'axios';
import {apiSearch} from '../services/apis'

export function useAxios<Data = any>(url: string) {
  console.log('data')
  const { data, error } = useSWR<Data>(url, async url => {
    console.log(url)
    const response = await apiSearch.get(url);
    const data = await response.data;
    console.log(data)

    return data;
  });

  return { data, error }
}
