import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();

app.listen(3000,() => {
    console.log("Server is running on port 3000");
});
