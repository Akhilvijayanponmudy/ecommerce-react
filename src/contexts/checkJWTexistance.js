const getJWTtoken = () => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
        return null;
    }
    return accessToken;
};

export default getJWTtoken;
