import useSWR from 'swr';
import axios from 'axios';
import { Cookie } from 'next-cookie'

export function useAxios<Data = any>(url: string) {
  const { data, error } = useSWR<Data>(url, async url => {
    const response = await axios.get(url)
    const data = await response.data;
    console.log(data)

    return data;
  });

  return { data, error }
}
