import github from "./github";


// Manual mocks are defined by writing a module in a __mocks__/ subdirectory immediately adjacent to the module.
// For example, to mock a module called user in the models directory, create a file called user.js and put it in the models/__mocks__ directory.
// Note that the __mocks__ folder is case-sensitive, so naming the directory __MOCKS__ will break on some systems.
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