/** @type {import('./$types').PageLoad} */
export const load = async ({ fetch }) => {
  const fetchPosts = async () => {
    const response = await fetch(
      'https://hacker-news.firebaseio.com/v0/topstories.json'
    );
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let result = await reader.read();
    let text = '';
    while (!result.done) {
      text += decoder.decode(result.value);
      result = await reader.read();
    }

    text = text.replace('[', '').replace(']', '').split(',');

    const postsResponse = [];
    for (let i = 0; i < 10; i++) {
      postsResponse.push(fetchBody(text[i]));
    }

    const complete = await Promise.all(postsResponse);
    return complete;
  };

  const fetchBody = async (postId) => {
    const response = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${postId}.json`,
      {
        method: 'GET',
        header: { 'Content-type': 'application/json' },
      }
    );

    return response.json();
  };

  return {
    posts: fetchPosts(),
  };
};
