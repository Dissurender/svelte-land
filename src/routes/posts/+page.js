/** @type {import('./$types').PageLoad} */
export const load = async ({ fetch }) => {
  const fetchPosts = async () => {
    const response = await fetch('http://localhost:8080/api/best', {
      method: 'GET',
      header: { 'Content-type': 'application/json' },
    });

    return response.json();
  };

  return {
    posts: fetchPosts(),
  };
};
