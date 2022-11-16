const VideosServices = require('../services/videos.services');

const getAllVideos = async (req, res, next) =>{
    try {
        const result = await VideosServices.getAll();
        res.json(result);
    } catch (error) {
        next({
            message: 'No se pudieron obtener los vídeos.',
            status: 400,
            errorContent: error
        })
    }
}

const createVideo = async (req, res, next) =>{
    try {
        const newVideo = req.body;
        const result = await VideosServices.create(newVideo);
        res.json(result);
    } catch (error) {
        next(
            {
                message: 'No se pudo crear el vídeo.',
                status: 400,
                errorContent: error
            })
    }
}

const updateVideo = async (req, res, next) =>{
    try {
        const { videoId } = req.params;
        const { title, url } = req.body;
        const result = await VideosServices.update({ title, url }, videoId);
        res.json(result);
    } catch (error) {
        next({
            message: "No se pudo actualizar, tal vez seas un robot o no tengas los permisos.",
            status: 400,
            errorContent: error
        });
    }
};

const deleteVideo = async (req, res, next) =>{
    try {
        const { videoId } = req.params;
        const result = await VideosServices.delete(videoId);
        res.json(result);
    } catch (error) {
        next({
            message: 'No se pudo eliminar el vídeo, tal vez seas un robot o no tengas los permisos.',
            status: 400,
            errorContent: error
        })
    }
}

module.exports = {
    getAllVideos,
    createVideo,
    updateVideo,
    deleteVideo
}