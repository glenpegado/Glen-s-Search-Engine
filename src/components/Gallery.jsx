import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useGlobalContext } from '../context/context';
let apiKey = import.meta.env.VITE_API_KEY;

let url = `https://api.unsplash.com/search/photos?client_id=${apiKey}`;


function Gallery() {
  // context
  const { search } = useGlobalContext();

  //useQuery
  let result = useQuery({
    queryKey: ['12345', search],
    queryFn: async () => {
      let { data } = await axios.get(`${url}&query=${search}`);
      return data;
    },
  });

  //variables
  let imgArr = result?.data?.results;

  //RETURN
  if (result.isLoading) return <h4 className='image-container'>...Loading</h4>;
  if (result.isError) return <h4 className='image-container'>Error</h4>;
  if (imgArr.length < 1) return <h4 className='image-container'>No Results</h4>;
  return (
    <section className='image-container'>
      {/* loop image Array */}
      {imgArr?.map((el) => {
        let url = el.urls.regular;
        return (
          <img src={url} alt={el.alt_description} key={el.id} className='img' />
        );
      })}
    </section>
  );
}

export default Gallery;
