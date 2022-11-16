const Videos = require("../models/videos.models");

class VideosServices {
    static async getAll(){
        try {
            const result = await Videos.findAll({
                attributes: ["id", "title", "url", "courseId"]
            });
            return result; 
        } catch (error) {
            throw error
        }
    }

    static async create(newVideo){
        try {
            const result = await Videos.create(newVideo);
            return result;
        } catch (error) {
            throw error
        }
    }

    static async update(updateData, videoId){
        try {
            const result = await Videos.update(updateData, {
                where: { id: videoId }
            });
            return result;
        } catch (error) {
            throw error
        }
    }

    static async delete(videoId){
        try {
            const result = await Videos.destroy({
                where: { id: videoId }
            })
            return result;
        } catch (error) {
            throw error
        }
    }
}

module.exports = VideosServices;