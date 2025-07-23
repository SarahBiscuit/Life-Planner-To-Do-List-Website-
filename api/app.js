import express from "express";
const app = express();
import bodyParser from "body-parser";

import { addItem, getItems, deleteItem } from './api/items.js';