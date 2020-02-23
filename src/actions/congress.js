export const CONGRESS_FETCH_REQUESTED = 'CONGRESS_FETCH_REQUESTED';
export const CONGRESS_FETCH_SUCCEEDED = 'CONGRESS_FETCH_SUCCEEDED';
export const FILTER_CONGRESS_REQUESTED = 'FILTER_CONGRESS_REQUESTED';
export const FILTER_CONGRESS_NAME_REQUESTED = 'FILTER_CONGRESS_NAME_REQUESTED';
export const FILTER_CONGRESS_PARTY_REQUESTED = 'FILTER_CONGRESS_PARTY_REQUESTED';
export const FILTER_CONGRESS_GENDER_REQUESTED = 'FILTER_CONGRESS_GENDER_REQUESTED';

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

export const filterCongressByNameRequested = value => ({
    type: FILTER_CONGRESS_NAME_REQUESTED,
    value
});

export const filterCongressByPartyRequested = value => ({
    type: FILTER_CONGRESS_PARTY_REQUESTED,
    value
});

export const filterCongressByGenderRequested = value => ({
    type: FILTER_CONGRESS_GENDER_REQUESTED,
    value
});
