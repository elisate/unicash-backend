import Shop from "../models/shopsModel.js";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// **Create a new shop with file uploads**
export const createShop = async (req, res, next) => {
  try {
    const { shopName, shopTIN, shopLocation, shopEmail, shopContact } = req.body;
    const RegCertificate = req.files?.RegCertificate?.map(file => file.path) || [];
    const agreementDoc = req.files?.agreementDoc?.map(file => file.path) || [];
    const images = req.files?.images?.map(file => file.path) || [];

    const shop = new Shop({
      shopName,
      shopTIN,
      shopLocation,
      shopEmail,
      shopContact,
      RegCertificate,
      agreementDoc,
      images,
    });
    await shop.save();
    res.status(201).json(shop);
  } catch (error) {
    next(error);
  }
};

// **Get all shops**
export const getShops = async (req, res, next) => {
  try {
    const shops = await Shop.find();
    res.status(200).json(shops);
  } catch (error) {
    next(error);
  }
};

// **Get a single shop by ID**
export const getShopById = async (req, res, next) => {
  try {
    const shop = await Shop.findById(req.params.id);
    if (!shop) return res.status(404).json({ message: "Shop not found" });
    res.status(200).json(shop);
  } catch (error) {
    next(error);
  }
};

// **Update a shop by ID with file uploads**
export const updateShopById = async (req, res, next) => {
  try {
    const { shopName, shopTIN, shopLocation, shopEmail, shopContact } = req.body;
    const shop = await Shop.findById(req.params.id);
    if (!shop) return res.status(404).json({ message: "Shop not found" });

    const RegCertificate = req.files?.RegCertificate?.map(file => file.path) || shop.RegCertificate;
    const agreementDoc = req.files?.agreementDoc?.map(file => file.path) || shop.agreementDoc;
    const images = req.files?.images?.map(file => file.path) || shop.images;

    // Update shop fields
    shop.shopName = shopName || shop.shopName;
    shop.shopTIN = shopTIN || shop.shopTIN;
    shop.shopLocation = shopLocation || shop.shopLocation;
    shop.shopEmail = shopEmail || shop.shopEmail;
    shop.shopContact = shopContact || shop.shopContact;
    shop.RegCertificate = RegCertificate;
    shop.agreementDoc = agreementDoc;
    shop.images = images;

    await shop.save();
    res.status(200).json(shop);
  } catch (error) {
    next(error);
  }
};

// **Delete a shop by ID**
export const deleteShopById = async (req, res, next) => {
  try {
    const shop = await Shop.findById(req.params.id);
    if (!shop) return res.status(404).json({ message: "Shop not found" });

    await Shop.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Shop deleted successfully" });
  } catch (error) {
    next(error);
  }
};
