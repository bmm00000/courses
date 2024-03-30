export interface Person {
  username: string;
  email: string;
}

export type Color = "red" | "green" | "blue";

// when this file gets compiled to js, it will end up like something like: export {} (like en empty module)
