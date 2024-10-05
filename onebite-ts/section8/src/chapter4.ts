// 템플릿 리터럴 타입

type Color = "red" | "black" | "green";

type Animal = "dog" | "cat" | "chicken";

type ColorAnimal = `${Color}-${Animal}`; // 조합
