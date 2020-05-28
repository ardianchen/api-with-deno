// import interface book
import { Book } from "../interface/book.ts";
// import koneksi database agar bisa digunakan
import { client } from '../database/config/config.ts'

// Berikut query untuk get all books
const getAllBooks = async ({ response }: { response: any }) => {
  const books: Book[] = await client.query("select * from books");
  response.body = {
    success: true,
    data: books,
  };
};

// Berikut query untuk get one book
const getOneBook = async (
  { params, response }: { params: any; response: any },
) => {
  let Book: Book = await client.query(
    "select * from books where id = ?",
    [params.id],
  );
  response.body = {
    success: true,
    data: Book,
  };
};

// Berikut query untuk menginsert one book
const postOneBook = async (
  { params, request, response }: {
    params: any;
    request: any;
    response: any;
  },
) => {
  const result = await request.body();
  const bookfix: Book = result.value;
  const results = await client.query(
    "INSERT INTO books(title,description,price) values(?,?,?)",
    [bookfix.title, bookfix.description, bookfix.price],
  );
  response.body = {
    success: true,
    data: null,
  };
};

// Berikut query untuk update one book
const putOneBook = async (
  { params, request, response }: {
    params: { id: string };
    request: any;
    response: any;
  },
) => {
  const result = await request.body();

  const book: Book = result.value;
  const results = await client.query(
    "update books set title = ?,description=?,price=? where id=?",
    [book.title, book.description, book.price, params.id],
  );
  response.body = {
    success: true,
    data: null,
  };
};

// berikut query untuk mendelete one book
const deleteOneBook = async (
  { params, response }: { params: any; response: any },
) => {
  let result = await client.execute(
    `delete from books where id = ?`,
    [params.id],
  );
  response.body = {
    success: true,
    data: null,
  };
};

// lalu export agar bisa dipanggil di file lain
export default {
  getAllBooks, getOneBook, postOneBook, putOneBook, deleteOneBook
}