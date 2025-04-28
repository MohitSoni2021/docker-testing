import Redis from "ioredis";
import {
  addList,
  appendData,
  deleteKey,
  getKey,
  increamentKey,
  setKey,
  addSet,
  addHash,
  getHash,
} from "./Commands.js";

const redis = new Redis({
  host: "localhost",
  port: 6379,
});

async function testConnection() {
  try {
    const reply = await redis.ping();
    console.log("Redis says:", reply);
    // addSet("testingSet", ["Hello", "THIS", "IS", "A", "SET", "NEW", "DATA"]);
    addHash("testinghash2", {
      87: { name: "Mohit Soni", age: 19, course: "BTECH CSE" },
    });
    getHash("testinghash2");
    // deleteKey("testingdata");
  } catch (err) {
    console.error("Failed to connect to Redis:", err);
  }
}

testConnection();
