export const getMovieDetails = async({params}) => {

    const id =params.movieID;
    try {
       const response = await fetch(
            ` https://www.omdbapi.com/?i=${id}&apikey=84ac28b2`
        )
        const data = response.json();
        return data;
    } catch (error) {
        console.log(error);
        
    }
}