import axios, { AxiosInstance } from "axios";

class UserCalls {
  private apiClient: AxiosInstance;

  constructor() {
    this.apiClient = axios.create({
      baseURL: "http://localhost:3000",//process.env.REACT_APP_API_BASE_URL,
      responseType: "json",
    });

    console.log("process.env.REACT_APP_API_BASE_URL",process.env.REACT_APP_API_BASE_URL)
  }

  public async listUsers(): Promise<any> {
    console.log("process.env.REACT_APP_API_BASE_URL2",process.env.REACT_APP_API_BASE_URL)
    try {
      const response = await this.apiClient.get("/api/user/list-users");
      return response.data;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error; // Můžete ho zde vyhodit znovu, pokud chcete, aby chyba byla zpracována jinde.
    }
  }
}

const userCallsInstance = new UserCalls();

// Exportujte metodu `listUsers` jako šipkovou funkci, aby `this` správně odkazoval na `userCallsInstance`
export const userCalls = {
  listUsers: async (): Promise<any> => userCallsInstance.listUsers(),
};