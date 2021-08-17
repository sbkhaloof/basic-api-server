'use strict'
const server = require('../src/server');
const supertest = require('supertest');
const request = supertest(server.server);


describe('express serve', () => {

    describe('API food', () => {

        it("food get test", async () => {
            const response = await request.get(`/food`);
            expect(response.status).toEqual(200);
        });

        it('check post food ', async () => {
            const reqBody = {
                "foodName": "euwwwuue",
                "foodType": "oooooooo",
            }
            const response = await request.post('/food').send(reqBody);
            expect(response.status).toEqual(201);
        });

        it("check update food", async () => {

            const response = await request.put('/food/3');
            expect(response.status).toEqual(200);

        });
        it("food delete test", async () => {
            const response = await request.delete(`/food/2`);
            expect(response.status).toEqual(204);
        });

    })
    describe('api clothes', () => {
        it('clothes get test', async () => {
            const response = await request.get(`/clothes`);
            expect(response.status).toEqual(200);
        });
        it('check post clothes ', async () => {
            const reqBody = {
                "name": "euwwwuue",
                "type": "oooooooo",
            }
            const response = await request.post('/clothes').send(reqBody);
            expect(response.status).toEqual(201);
        });
        it("check update clothes", async () => {

            const response = await request.put('/clothes/3');
            expect(response.status).toEqual(200);

        });
        it("clothes delete test", async () => {
            const response = await request.delete(`/clothes/2`);
            expect(response.status).toEqual(204);
        });

    })
    describe('Api server', () => {

        it('should check the Every Thing Is Working Good', async () => {
            //arrange
            let param = '/';
            let status = 200;
            let text = 'Every Thing Is Working Good';
            //act
            const response = await request.get(param);
            //assert
            expect(response.status).toBe(status);
            expect(response.text).toBe(text);

        });
        it("handles not found request", async () => {
            const response = await request.get("/notttfouuundreqquuest");
            expect(response.status).toEqual(404);
        });

        // bad method
        it("handles my internal server errors", async () => {
            const response = await request.post("/bad");
            expect(response.status).toEqual(404);
        });
         // bad method
    it("handles my internal server errors", async () => {
        const response = await request.get("/badmethod");
        expect(response.status).toEqual(500);
      });
    })
})







