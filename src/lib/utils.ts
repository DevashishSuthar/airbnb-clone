const getUserRatings = (ratings: number) => {
    if (Number.isInteger(ratings)) {
        return ratings.toFixed(1);
    }
    return ratings.toFixed(2);
};

export {
    getUserRatings
};