import productModel from '../../models/product/index.js';
import withError from '../../utils/response/withError.js';
import withSuccess from '../../utils/response/withSuccess.js';

export default class ProductController {
  async get(req, res) {
    try {
      const getdata = await productModel.find();
      withSuccess(res, 200, 'Product ditemukan', getdata ?? []);
    } catch (error) {
      withError(res, 500, error.message);
    }
  }

  async getOne(req, res) {
    const { id } = req.params;
    try {
      const getdata = await productModel.findOne({ _id: id });
      withSuccess(res, 200, 'Product ditemukan', getdata ?? []);
    } catch (error) {
      withError(res, 500, error.message);
    }
  }

  async create(req, res) {
    const { title, url, price, urlThumbnail } = req.body;

    try {
      const product = new productModel({
        title: title,
        url: url,
        price: price,
        urlThumbnail: urlThumbnail,
      });

      const save = await product.save();

      withSuccess(res, 201, 'Data berhasil ditambahkan', save);
    } catch (error) {
      withError(res, 500, error.message);
    }
  }

  async update(req, res) {
    const { id } = req.params;
    try {
      const doUpdate = await productModel.updateOne(
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
      const doDelete = await productModel.deleteOne({ _id: id });
      withSuccess(res, 200, 'Data berhasil dihapus', doDelete);
    } catch (error) {
      withError(res, 500, error.message);
    }
  }
}
