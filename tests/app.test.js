const request = require('supertest');
const app = require('../app');

let authToken = ''; 

beforeAll(async () => {
  // Perform login to get authorization token
  const loginData = {
    email: 'waqarulhaq220@gmail.com', 
    password: 'password1',
  };
  const response = await request(app)
    .post('/user/login')
    .send(loginData);
  authToken = response.text;
  console.log("AUTH", authToken);
});

describe('Test API Endpoints', () => {

  it('should get COVID data for a specific country', async () => {
    const isoCode = 'AFG'; // AFG for AFGHANISTAN
    const response = await request(app)
      .get(`/api/${isoCode}`)
      .set('Authorization', `${authToken}`); 
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('location', 'Afghanistan');
  });

  it('should add COVID data for a new country', async () => {
    const newCountryData = {
      ISO: 'ABC',
      location: 'New Country',
      total_cases: 1000,
    };
    const response = await request(app)
      .post('/api')
      .set('Authorization', `${authToken}`)
      .send(newCountryData);
    expect(response.status).toBe(200);
    expect(response.body).toMatchObject(newCountryData);
  });

  it('should update COVID data for a specific country', async () => {
    const isoCode = 'AFG';
    const updatedData = {
      location: 'Updated Country',
      total_cases: 1500,
    };
    const response = await request(app)
      .put(`/api/${isoCode}`)
      .set('Authorization', `${authToken}`)
      .send(updatedData);
    expect(response.status).toBe(200);
    expect(response.body).toMatchObject(updatedData); 
  });

  it('should delete COVID data for a specific country', async () => {
    const isoCode = 'DEU';
    const response = await request(app)
      .delete(`/api/${isoCode}`)
      .set('Authorization', `${authToken}`);
    expect(response.status).toBe(200);
    expect(response.text).toBe('Deleted Successfully'); 
  });

  it('should delete all COVID data', async () => {
    const response = await request(app)
      .delete('/api')
      .set('Authorization', `${authToken}`);
    expect(response.status).toBe(200);
  });

});
