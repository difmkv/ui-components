/*
import { fetch } from "";
import { axiosClient } from "src/axiosClient";

const mockedAxiosClient = axiosClient as jest.Mocked<typeof axiosClient>;

const mockedData = {
  results: [{ key: "value" }, { key: "value" }],
};

const params = {};

const options = {};

describe("fetch", () => {
  beforeEach(() => {
    jest.clearAllMocks();

    mockedAxiosClient.get.mockImplementationOnce(() => {
      return Promise.resolve({ data: mockedData });
    });
  });

  it("should fetch once", async () => {
    await fetch(params, options);

    expect(mockedAxiosClient.get).toHaveBeenCalledTimes(1);
  });

  it("should hit the right endpoint", async () => {
    await fetch(params, options);

    expect(mockedAxiosClient.get.mock.calls[0][0]).toEqual(
      `/endpoint/${mockedData.results[0]}/endpoint`
    );
  });
});
*/
