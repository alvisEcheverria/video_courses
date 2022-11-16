const { Router } = require('express');
const { getAllVideos, createVideo, updateVideo, deleteVideo } = require('../controllers/videos.controllers');
const authVerification = require("../middlewares/auth.middlewares");

const router = Router();

router.get('/videos', getAllVideos);

router.post('/videos', authVerification, createVideo);

router.put('/videos/:videoId', authVerification, updateVideo);

router.delete('/videos/:videoId', authVerification, deleteVideo);

module.exports = router;