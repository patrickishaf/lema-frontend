import httpClient from "@/utils/httpclient";

const userService = {
  async getUsers() {
    const data = await httpClient.get("/users");
    return data;
  },
}

export default userService;