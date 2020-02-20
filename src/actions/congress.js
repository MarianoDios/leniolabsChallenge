export const CONGRESS_FETCH_REQUESTED = 'CONGRESS_FETCH_REQUESTED';
export const CONGRESS_FETCH_SUCCEEDED = 'CONGRESS_FETCH_SUCCEEDED';
export const FILTER_CONGRESS_REQUESTED = 'FILTER_CONGRESS_REQUESTED';

export const receiveCongress = congress => ({
    type: CONGRESS_FETCH_SUCCEEDED,
    congress
});

export const requestCongress = () => ({
    type: CONGRESS_FETCH_REQUESTED
});

export const filterCongressRequested = value => ({
    type: FILTER_CONGRESS_REQUESTED,
    value
});
