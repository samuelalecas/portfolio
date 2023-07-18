import { useState, useEffect } from "react";

export interface UseFetchProps {
  url: string;
}

export const useFetch = <T>({ url }: UseFetchProps) => {
  const [data, setData] = useState<T | null>(null);
  const [hasError, setHasError] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  const fetchData = async (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();

    setIsFetching(true);

    try {
      const resp = await fetch(url);
      const dataBuffer = await resp.json();
      setData(dataBuffer);
      setIsFetching(false);
    } catch (error) {
      setHasError(true);
      setIsFetching(false);
    }
  };

  useEffect(() => {
    (async () => {
      await fetchData();
    })();
  }, []);

  return { data, hasError, isFetching, fetchData };
};
