'use strict';

const server = require('../src/server');
const supertest = require('supertest');


const request = supertest(server.server);

describe('middleware',()=>{
    describe('api server',()=>{

        it('should check eveery thing is work good',async()=>{
            //arrange
            let status=200;
            let param='/';
            let text='Every Thing Is Working Good';
            //act
            const response=await request.get(param);
            //assert
            expect(response.status).toBe(status);
            expect(response.text).toBe(text);
        })
        it('should check error 404 not found',async()=>{
            let status=404;
            let param='/notfound';
            const response=await request.get(param);
            expect(response.status).toBe(status);
            
        })
        it('should check internal server error 500',async()=>{
            let status=500;
            let param='/bad';
            const response=await request.get(param);
            expect(response.status).toBe(status)
        })
    })
    describe('food server',()=>{
        let obj={
            "foodName": "euwwwuue",
            "foodType": "oooooooo",
        }
       it('should test get food',async()=>{
           const response=await request.get('/food');
           expect(response.status).toEqual(200);
       })
       it('should test post food',async()=>{
        const reqBody = {
            "foodName": "euwwwuue",
            "foodType": "oooooooo",
        }
        const response = await request.post('/food').send(reqBody);
        expect(response.status).toEqual(201);
       })
       it('should test put food',async()=>{
        const response = await request.put('/food/3').send(obj);
        expect(response.status).toEqual(200);
       })
       it("should test food delete ", async () => {
        const response = await request.delete(`/food/2`);
        expect(response.status).toEqual(204);
    });
        });
        describe('clothes server',()=>{
            const cloObj={
                "name": "euwwwuue",
                "type": "oooooooo",
            }
            it('should test get clothes',async()=>{
                const response=await request.get('/clothes');
                expect(response.status).toEqual(200);
            })
            it('should test post clothes',async()=>{
                const reqBody = {
                    "name": "euwwwuue",
                    "type": "oooooooo",
                }
                const response = await request.post('/clothes').send(reqBody);
                expect(response.status).toEqual(201);
            })
            it('should check put clothes',async()=>{
                const response = await request.put('/clothes/3').send(cloObj);
            expect(response.status).toEqual(200);

            })
            it("clothes delete test", async () => {
                const response = await request.delete(`/clothes/2`);
                expect(response.status).toEqual(204);
            });
        })
    })
    
