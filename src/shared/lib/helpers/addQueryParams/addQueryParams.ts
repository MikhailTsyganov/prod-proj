export const getQueryParams = (params: Record<string, string | undefined>) => {
  const searchParams = new URLSearchParams(location.search);

  Object.entries(params).forEach(([key, value]) => {
    if (value) {
      searchParams.set(key, value);
    }
  });

  return String(searchParams);
};

// Функция добавления параметров строки запроса в URL

export const addQueryParams = (params: Record<string, string>) => {
  const newParams = getQueryParams(params);
  window.history.pushState(null, '', `?${newParams}`);
};
