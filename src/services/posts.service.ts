import httpClient from "@/utils/httpclient";

const postsService = {
  async getPostsByUserId(userId: number) {
    const posts = await httpClient.get(`/posts?userId=${userId}`);
    return posts;
  },

  async deletePostById(id: number) {
    const result = await httpClient.delete(`/posts/${id}`);
    return result;
  }
}

export default postsService;