import { Car } from "../model/car.model.js";
import jwt from 'jsonwebtoken'
import { User } from "../model/user.model.js";
import { cloudfiles } from "../utils/cloudinary.js"; 

const addCar = async (req, res) => {
    const {title, description ,price, features, brand, model, condition, year, body_type, seats, color, fuel_type, mileage, transmission, drivetrain, power, battery_capacity, charge_port, charge_speed, charge_time, length, width, height, cargo_volume} = req.body
    try {
        const existUser = await User.findById(req.decoded.userId)
        if (!existUser) { return res.status(400).json({ message: 'user not found' }) }
        
        if (existUser.role === 'admin') {
            const uploadfile = req.files.map(file =>  cloudfiles(file.path));
            const result = await Promise.all(uploadfile)

            if(result.some(url => url === null)) {return res.status(500).json({message: 'some file failed to upload', result})}

            const car = new Car ({ title, description ,price, features, brand, model, condition, year, body_type, seats, color, fuel_type, mileage, transmission, drivetrain, power, battery_capacity, charge_port, charge_speed, charge_time, length, width, height, cargo_volume, images: result })

            console.log('car..................', car);
            
            await car.save()
            res.status(200).json({ car })
            // console.log(product);
        }
    } catch (error) {
        console.log('error in add cardata', error);
    }
}

const getCar = async (req, res) => {
    Car.find()
        .then((cardata) => {
            res.json({ cardata })
        })
        .catch((err) => {
            console.log(err);
        })
}

const deletCar = async (req, res) => {
    try {
        const existUser = await User.findById(req.decoded.userId)
        console.log('existuser delet', existUser);
        if (existUser.role === 'admin') {
            await Car.findByIdAndDelete(req.params.id);
            res.status(200).json({ message: 'car data deleted' })
        } else {
            res.status(400).json({ message: 'user is not admin' })
        }
    } catch (error) {
        console.log('error in deletProduct', error);
    }
}

const updateCar = async (req, res) => {
    const {title, description ,price, features, brand, model, condition, year, body_type, seats, color, fuel_type, mileage, transmission, drivetrain, power, battery_capacity, charge_port, charge_speed, charge_time, length, width, height, cargo_volume} = req.body
    try {
        const existUser = await User.findById(req.decoded.userId)
        if (existUser.role === 'admin') {
            const uploadfile = req.files.map(file =>  cloudfiles(file.path));
            const result = await Promise.all(uploadfile)

            if(result.some(url => url === null)) {return res.status(500).json({message: 'some file failed to upload', result})}

            const data = { title, description ,price, features, brand, model, condition, year, body_type, seats, color, fuel_type, mileage, transmission, drivetrain, power, battery_capacity, charge_port, charge_speed, charge_time, length, width, height, cargo_volume }
            if (req.files) {
                data.images = result
            }
            await Car.findByIdAndUpdate(req.params.id, data, { new: true });
            res.status(200).json({ message: 'Car data updated' })
            // console.log('data...............', data);
        } else {
            res.status(400).json({ message: 'user is not admin' })
        }
    } catch (error) {
        console.log('error in updatePoduct', error);
    }
}


export {addCar, getCar, deletCar, updateCar}
