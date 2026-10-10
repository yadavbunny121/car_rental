import imagekit from "../configs/imageKit.js";
import Booking from "../models/Booking.js";
import Car from "../models/Car.js";
import User from "../models/User.js";
import fs from "fs";
// to Change the role of user
export const changeRoleToOwner = async (req, res) => {
  try {
    const { _id } = req.user;
    await User.findByIdAndUpdate(_id, { role: "owner" });

    res.json({
      success: true,
      message:
        "Role changed to owner successfully , Now You can List your Cars",
    });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// API to List Csrs

export const addCar = async (req, res) => {
  try {
    const { _id } = req.user;

    const car = JSON.parse(req.body.carData);
    const imageFile = req.file;

    if (!imageFile) {
      return res.json({ success: false, message: "No image uploaded" });
    }

    // Upload to ImageKit using a stream
    const response = await imagekit.files.upload({
      file: fs.createReadStream(imageFile.path),
      fileName: imageFile.originalname,
    });

    console.log("ImageKit Response:", response);

    const image = response.url;

    await Car.create({
      ...car,
      owner: _id,
      image,
    });

    // cleanup temp file
    fs.unlinkSync(imageFile.path);

    res.json({ success: true, message: "Car Added Successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// API to List Owner car

export const getOwnerCars = async (req, res) => {
  try {
    const { _id } = req.user;

    const cars = await Car.find({ owner: _id });

    res.json({ success: true, cars });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// API to toggle car availability

export const toggleCarAvailability = async (req, res) => {
  try {
    const { _id } = req.user;
    const { carId } = req.body;

    const car = await Car.findById(carId);
    if (!car) {
      return res.json({
        success: false,
        message: "Car not found",
      });
    }

    // cheking car belomgs to the user
    if (car.owner.toString() !== _id.toString()) {
      return res.json({ success: false, message: "Unauthorized" });
    }
    car.isAvaliable = !car.isAvaliable;
    await car.save();
    res.json({ success: true, message: "Availability Toggled" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// API to Delete the car

export const deleteCar = async (req, res) => {
  try {
    const { _id } = req.user;
    const { carId } = req.body;

    const car = await Car.findById(carId);

    // cheking car belomgs to the user
    if (car.owner.toString() !== _id.toString()) {
      return res.json({ success: false, message: "Unauthorized" });
    }
    car.owner = null;
    car.isAvailable = false;
    await car.save();
    res.json({ success: true, message: "Car Removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// API to get Dashboard Data

export const getDashboardData = async (req, res) => {
  try {
    const { _id, role } = req.user;
    if (role !== "owner") {
      return res.json({
        success: false,
        message: "Unauthorized [ You are not an Owner ]",
      });
    }

    const cars = await Car.find({ owner: _id });
    const bookings = await Booking.find({ owner: _id })
      .populate("car")
      .sort({ createdAt: -1 });

    const pendingBookings = await Booking.find({
      owner: _id,
      status: "pending",
    });
    const confirmedBookings = await Booking.find({
      owner: _id,
      status: "confirmed",
    });

    // Calculate Monthly Revenue from bookings where status is confirmed

    const monthlyRevenue = bookings
      .slice()
      .filter((booking) => booking.status === "confirmed")
      .reduce((acc, booking) => acc + booking.price, 0);

    const dashboardData = {
      totalCars: cars.length,
      totalBookings: bookings.length,
      pendingBookings: pendingBookings.length,
      confirmedBookings: confirmedBookings.length,
      recentBookings: bookings.slice(0, 3),
      monthlyRevenue,
    };
    res.json({ success: true, dashboardData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// API to update user image

export const updateUserImage = async (req, res) => {
  try {
    const { _id } = req.user;
    const imageFile = req.file;

    if (!imageFile) {
      return res.json({ success: false, message: "No image uploaded" });
    }

    // Upload to ImageKit using a stream
    const response = await imagekit.files.upload({
      file: fs.createReadStream(imageFile.path),
      fileName: imageFile.originalname,
    });

    console.log("ImageKit Response:", response);

    const image = response.url;
    await User.findByIdAndUpdate(_id,{image});
    res.json({
      success:true,
      message:"User Image Updated Successfully"
    })
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
