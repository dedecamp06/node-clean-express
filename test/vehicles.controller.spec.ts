import request from "supertest";
import { app } from "../src/main/application/app";
import { connectDB } from "../src/infra/mongodb/config/config";

beforeAll(async () => {
  await connectDB();
});

let vehicleId: string | null = "";

describe("Vehicle Routes", () => {
  describe("POST /api/vehicles", () => {
    it("should create a vehicle and return a 201 status code", async () => {
      const newVehicle = {
        make: "Toyota",
        model: "Corolla",
        year: "2024",
      };
      const response = await request(app)
        .post("/api/vehicles")
        .send(newVehicle);
      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty("status", 201);
      expect(response.body).toHaveProperty(
        "message",
        "Server created in request!"
      );
      expect(response.body).toHaveProperty("Created");
      vehicleId = response.body.Created;
    });
  });

  describe("POST /api/vehicles", () => {
    it("should a error with no body and return a 400 status code", async () => {
      const response = await request(app)
        .patch(`/api/vehicles/${vehicleId}`)
        .send({});
      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty("status", 400);
      expect(response.body).toHaveProperty("message", "Params is not found!");
    });
  });

  describe("PATCH /api/vehicles/:id", () => {
    it("should update an existing vehicle and return a 200 status code", async () => {
      const vehicleUpdate = {
        make: "Toyota",
        model: "Camry",
        year: "2025",
      };
      const response = await request(app)
        .patch(`/api/vehicles/${vehicleId}`)
        .send(vehicleUpdate);
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("status", 200);
      expect(response.body).toHaveProperty(
        "message",
        "Server completed the request as expected!"
      );
      expect(response.body).toHaveProperty("object.acknowledged", true);
      expect(response.body).toHaveProperty("object.modifiedCount", 1);
    });
  });

  describe("PATCH /api/vehicles/:id", () => {
    it("should a error with no body and return a 400 status code", async () => {
      const response = await request(app)
        .patch(`/api/vehicles/${vehicleId}`)
        .send({});
      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty("status", 400);
      expect(response.body).toHaveProperty("message", "Params is not found!");
    });
  });

  describe("GET /api/vehicles/:id", () => {
    it("should return a single vehicle with a 200 status code", async () => {
      const response = await request(app).get(`/api/vehicles/${vehicleId}`);
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("status", 200);
      expect(response.body).toHaveProperty(
        "message",
        "Server completed the request as expected!"
      );
      expect(response.body).toHaveProperty("object._id", vehicleId);
    });
  });

  describe("GET /api/vehicles", () => {
    it("should return a structured object with an array of vehicles and a status code of 200", async () => {
      const response = await request(app).get("/api/vehicles");
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("status", 200);
      expect(response.body).toHaveProperty(
        "message",
        "Server completed the request as expected!"
      );
      expect(response.body).toHaveProperty("object");
      expect(Array.isArray(response.body.object)).toBe(true);
      expect(response.body.object.length).toBeGreaterThan(0);
    });
  });

  describe("DELETE /api/vehicles/:id", () => {
    it("should delete an existing vehicle and return a 200 status code", async () => {
      const response = await request(app).delete(`/api/vehicles/${vehicleId}`);
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("status", 200);
      expect(response.body).toHaveProperty(
        "message",
        "Server completed the request as expected!"
      );
      expect(response.body).toHaveProperty("object.acknowledged", true);
      expect(response.body).toHaveProperty("object.deletedCount", 1);
    });
  });
});
