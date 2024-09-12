import { Jobs } from "../types";

const fetchData = async (): Promise<Jobs | null> => {
  try {
    const response = await fetch('/data.json')
    return await response.json()
  } catch (error) {
    console.log("Error fetching data:", error);
    return null
  }
};

export default fetchData;
