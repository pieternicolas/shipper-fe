import { useCallback, useMemo, useState } from 'react';

const dataPerPage = 5;

const usePagination = <T>(data: T[]) => {
  const [page, setPage] = useState<number>(1);

  const totalPages: number = useMemo(() => data.length / dataPerPage, [data]);
  const pagedData: T[] = useMemo(
    () => data.slice((page - 1) * dataPerPage, page * dataPerPage),
    [data, page],
  );

  const nextEnabled: boolean = useMemo(
    () => page < totalPages,
    [page, totalPages],
  );
  const previousEnabled: boolean = useMemo(() => page > 1, [page]);

  const setNextPage = useCallback((): void => {
    if (nextEnabled) {
      setPage(page + 1);
    }
  }, [nextEnabled, page]);

  const setPreviousPage = useCallback((): void => {
    if (previousEnabled) {
      setPage(page - 1);
    }
  }, [previousEnabled, page]);

  return {
    pagedData,
    currentPage: page,
    totalPages,
    setNextPage,
    setPreviousPage,
    nextEnabled,
    previousEnabled,
  };
};

export default usePagination;
