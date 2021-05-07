test("1 is 1", () => {
  expect(1).toBe(1);
});

function getUser(id) {
  return {
    id,
    email: `user${id}@test.com`
  };
}

//성공예시
test("return a user object", () => {
  expect(getUser(1)).toEqual({
    id: 1,
    email: `user1@test.com`
  });
});

//실패예시
test("return a user object", () => {
  expect(getUser(1)).toBe({
    id: 1,
    email: `user1@test.com`
  });
});
