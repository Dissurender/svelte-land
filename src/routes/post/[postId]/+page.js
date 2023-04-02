export const load = async ({ fetch, params }) => {
  const fetchBody = async (postId) => {
    const response = await fetch(
      `http://localhost:8080/api/${postId}`,
      {
        method: 'GET',
        header: { 'Content-type': 'application/json' },
      }
    );

    return response.json();
  };

  return {
    post: fetchBody(params.postId),
  };
};
