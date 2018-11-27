import github from "./github";

// jest.mock("./request");

describe("should get user from github", () => {
  it('should load user data', () => {
    return github.getUser('fitzpaid')
    .then(data => {
      expect(data).toBeDefined()
      expect(data.entity.name).toEqual('Ian Fitzpatrick')
    })
  })
});