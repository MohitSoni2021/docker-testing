import Redis from "ioredis";

const redis = new Redis({
  host: "localhost",
  port: 6379,
});

export const setKey = async (key, value) => {
  await redis.set(key, value);
  console.log("data saved!!!");
};

export const getKey = async (key) => {
  const response = await redis.get(key);
  console.log(response);
};

export const deleteKey = async (key) => {
  await redis.del(key);
  console.log("Successfully Deleted !!!");
};

export const increamentKey = async (key) => {
  const response = await redis.incr(key);
  console.log(response);
};

export const decKey = async (key) => {
  console.log(await redis.decr(key));
};

export const appendData = async (key, value) => {
  console.log(await redis.append(key, value));
};

export const addList = async (key, value) => {
  console.log(await redis.lpush(key, ...value));
};

export const addSet = async (key, value) => {
  console.log(await redis.sadd(key, ...value));
};

export const addHash = async (key, value) => {
  console.log(await redis.hset(key, value));
};

export const getHash = async (key) => {
  console.log(await redis.hget(key, 87));
};
