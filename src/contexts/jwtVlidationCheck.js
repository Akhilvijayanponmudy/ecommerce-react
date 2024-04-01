
const JwtValidateExpiry = (response) => {
    if (response) {
        if (response.status === 299) {
            // localStorage.removeItem('accessToken');
            return false;

        }else{
            return true;
        }
    }
}

export default JwtValidateExpiry;