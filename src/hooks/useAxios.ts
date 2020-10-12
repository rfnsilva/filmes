import useSWR from 'swr';
import axios from 'axios';
import { Cookie } from 'next-cookie'

export function useAxios(url: string) {
  const { data } = useSWR(url, async url => {
    console.log('url')
    const response = await axios.get(url)
    const data = await response.data;
    console.log(data)

    return data;
  });

  return data
}
