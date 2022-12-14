import superagent from "superagent";

describe("Status code", function () {
  test("status code === 200", async () => {
    const response = await superagent.get("https://reqres.in/api/users?page=2");
    expect(response.status).toBe(200);
  });
});

describe("Response contains the correct value", () => {
  test("data.id contains correct value ", async () => {
    const res = await superagent.get("https://reqres.in/api/unknown/2");
    expect(res.body.data.id).toEqual(2);
  });
});

describe("Response contains the correct value", () => {
  test("data.name contains correct value", async () => {
    const res = await superagent.get("https://reqres.in/api/unknown/2");
    expect(res.body.data.name).toMatch("fuchsia rose");
  });
});

describe("Response does not contain invalid values", () => {
  test("data.name does not contain invalid values", async () => {
    const res = await superagent.get("https://reqres.in/api/unknown/2");
    expect(res.body.data.name).not.toMatch("fuchsiaa rose");
  });
});

describe("Response contains values", () => {
  test("responsive is not undefined", async () => {
    const res = await superagent.get("https://reqres.in/api/unknown/2");
    expect(res.body.data.name).not.toBeUndefined();
  });
});

describe("Responsive gives an error", () => {
  test("response gives 404 error", async () => {
    try {
      await superagent.get("https://reqres.in/api/users/23");
    } catch (err: any) {
      console.log(err.message);
      expect(err.status).toBe(404);
    }
  });
});

describe("Creating a new user", () => {
  test("successful creation of a new user", async () => {
    let response: any;
    try {
      response = await superagent
        .post("https://reqres.in/api/users")
        .set("Content-Type", "application/json")
        .send({
          name: "morpheus",
          job: "leader",
        });
    } catch (error: any) {
      throw new Error(`The system gave an error ${error}`);
    }
    console.log("response => ", response.body);
    expect(response.body.job).toEqual("leader");
    expect(response.body.name).toEqual("morpheus");
    expect(response.body.id).toBeDefined();
    expect(response.body.createdAt).toBeDefined();
  });
});

describe("Creating a new user", () => {
  const dataObj: { name: string; job: string } = {
    name: "morpheus",
    job: "leader",
  };
  test("successful creation of a new user", async () => {
    const res = await superagent
      .post("https://reqres.in/api/users")
      .set("Content-Type", "application/json")
      .send({
        name: "morpheus",
        job: "leader",
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body.name).toEqual(dataObj.name);
    expect(res.body.job).toEqual(dataObj.job);
    expect(res.body.id).toBeDefined();
    expect(res.body.createdAt).toBeDefined();
  });
});

describe("Deleting a user", () => {
  test("successful deletion of user data", async () => {
    try {
      await superagent.delete("https://reqres.in/api/users/2");
    } catch (error: any) {
      expect(error.status).toBe(204);
      expect(error.body).toBe(expect.anything()); //тут не пойму как проверить иначе, кроме как проверки на то, что ответ не Undefined и не Null
    }
  });
});

describe("Unsuccessful login", () => {
  test("failed user authorization", async () => {
    try {
      await superagent
        .post("https://reqres.in/api/login")
        .set("Content-Type", "application/json")
        .send({
          email: "peter@klaven",
        });
    } catch (error: any) {
      expect(error.response.body.error).toEqual("Missing password");
      expect(error.status).toEqual(400);
    }
  });
});

describe("User registration", () => {
  test("successful registration of a new user", async () => {
    const res = await superagent
      .post("https://reqres.in/api/register")
      .set("Content-Type", "application/json")
      .send({
        email: "eve.holt@reqres.in",
        password: "pistol",
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body.id).toEqual(4);
    expect(res.body.token).toEqual("QpwL5tke4Pnpja7X4");
  });
});
