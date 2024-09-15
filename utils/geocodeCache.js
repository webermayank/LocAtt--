const cache = new Map();

export const getCachedGeocode = (lat, lng) => {
  const key = `${lat},${lng}`;
  return cache.get(key);
};

export const setCachedGeocode = (lat, lng, data) => {
  const key = `${lat},${lng}`;
  cache.set(key, data);
};
