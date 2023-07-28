import videoModel from '../../models/video/index.js';
import withError from '../../utils/response/withError.js';
import withSuccess from '../../utils/response/withSuccess.js';

export default class VideoController {
  async get(req, res) {
    try {
      const getdata = await videoModel.find();
      withSuccess(res, 200, 'Video ditemukan', getdata ?? []);
    } catch (error) {
      withError(res, 500, error.message);
    }
  }

  async getOne(req, res) {
    const { id } = req.params;
    try {
      const getdata = await videoModel.findOne({ _id: id });
      withSuccess(res, 200, 'Video ditemukan', getdata ?? []);
    } catch (error) {
      withError(res, 500, error.message);
    }
  }

  async create(req, res) {
    const { title, urlThumbnail } = req.body;

    try {
      const video = new videoModel({
        title: title,
        urlThumbnail: urlThumbnail,
      });

      const save = await video.save();

      withSuccess(res, 201, 'Data berhasil ditambahkan', save);
    } catch (error) {
      withError(res, 500, error.message);
    }
  }

  async update(req, res) {
    const { id } = req.params;
    try {
      const doUpdate = await videoModel.updateOne(
        { _id: id },
        { ...req.body },
        { new: true }
      );
      withSuccess(res, 201, 'Data berhasil diubah', doUpdate);
    } catch (error) {
      withError(res, 500, error.message);
    }
  }

  async delete(req, res) {
    const { id } = req.params;

    try {
      const doDelete = await videoModel.deleteOne({ _id: id });
      withSuccess(res, 200, 'Data berhasil dihapus', doDelete);
    } catch (error) {
      withError(res, 500, error.message);
    }
  }
}
