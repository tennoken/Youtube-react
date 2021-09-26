class YoutubeFetch {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
  }

  async mostPopular() {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?key=${this.key}&part=snippet&chart=mostPopular&maxResults=25`,
      this.getRequestOptions,
    );
    const result = await response.json();
    return result.items;
  }

  async search(query) {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?key=${this.key}&type=video&part=snippet&q=${query}&chart=mostPopular&maxResults=25`,
      this.getRequestOptions,
    );
    const result = await response.json();
    const items = result.items.map((item) => ({
      ...item,
      id: item.id.videoId,
    }));
    return items;
  }
}

export default YoutubeFetch;
