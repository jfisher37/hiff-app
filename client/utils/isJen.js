let soIsItJen = false;

export const itIsJen = (email) => {
  
    if (email === "jen@herbie.com") {
        soIsItJen = true;
        console.log("It is Jen!")
    };
};

export const isJen = async () => {
 return soIsItJen;
}


export default isJen;