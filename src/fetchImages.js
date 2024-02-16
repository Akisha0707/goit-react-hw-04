import axios from 'axios';

const fetchImages = async (message, page, per_page) => {
  const keyApi = '8WljGh1dq48AOFZW3zSlYSx3-vUvfxbCL-dKI_bgnUY';

  const request = await axios.get(`https://api.unsplash.com/photos/`, {
    params: { message, page, per_page: 6 },
  });

  return request.data.hits;
};

// export default fetchImages;
