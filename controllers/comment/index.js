import mongoose from 'mongoose';
import commentModel from '../../models/comment/index.js';
import withError from '../../utils/response/withError.js';
import withSuccess from '../../utils/response/withSuccess.js';

export default class CommentController {
  async get(req, res) {
    try {
      const getdata = await commentModel.find();
      withSuccess(res, 200, 'Comment ditemukan', getdata ?? []);
    } catch (error) {
      withError(res, 500, error.message);
    }
  }

  async getOne(req, res) {
    const { id } = req.params;
    try {
      const getdata = await commentModel.findOne({ _id: id });
      withSuccess(res, 200, 'Comment ditemukan', getdata ?? []);
    } catch (error) {
      withError(res, 500, error.message);
    }
  }

  async create(req, res) {
    const { username, comment } = req.body;

    const session = await mongoose.startSession();
    session.startTransaction();

    try {
      const newcomment = new commentModel({
        username: username,
        comment: comment,
      });

      const save = await newcomment.save();

      await session.commitTransaction();
      withSuccess(res, 201, 'Data berhasil ditambahkan', save);
    } catch (error) {
      withError(res, 500, error.message);
      await session.abortTransaction();
    } finally {
      session.endSession();
    }
  }

  async update(req, res) {
    const { id } = req.params;
    try {
      const doUpdate = await commentModel.updateOne(
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
      const doDelete = await commentModel.deleteOne({ _id: id });
      withSuccess(res, 200, 'Data berhasil dihapus', doDelete);
    } catch (error) {
      withError(res, 500, error.message);
    }
  }
}
