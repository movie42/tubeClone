import express from "express";
import app from "./app";

const PORT = 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
