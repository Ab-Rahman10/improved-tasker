export const formValidate = (obj) => {
    for (let key in obj) {
        if (!obj[key] && obj[key] !== false && obj[key] !== 0) {
            return true; // If any data is empty;
        }
    }
};
