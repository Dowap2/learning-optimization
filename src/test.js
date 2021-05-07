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

//true와 false를 테스트
test("number 0 is falsy 1 is truthy", () => {
  expect(0).toBeFalsy();
  expect(1).toBeTruthy();
});

//위에순으로 함수의 길이 특정원소 체크
test("array", () => {
  const colors = ["Red", "Yellow", "Blue"];
  expect(colors).toHaveLength(3);
  expect(colors).toContain("Yellow");
  expect(colors).not.toContain("Green");
});

//정규식 체크
test("string", () => {
  expect(getUser(1).email).toBe("user1@test.com");
  expect(getUser(2).email).toMatch(/.*test.com$/);
});

function getUserError(id) {
  if (id <= 0) throw new Error("Invalid ID");
  return {
    id,
    email: `user${id}@test.com`
  };
}

//예외처리
test("throw when id is non negative", () => {
  expect(getUserError(-1)).toThrow();
  expect(getUserError(-1)).toThrow("Invalid ID");
});
