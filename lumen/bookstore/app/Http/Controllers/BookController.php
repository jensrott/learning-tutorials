<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Book;

class BookController extends Controller
{
    /**
     * 
     * Show all books
     * @return Response
     */
    public function showBooks() 
    {
        return response()->json(Book::all());
    }

    /**
     * 
     * Show specific book
     * @param String $id
     * @return Response
     */
    public function showBook($id) 
    {
        return response()->json(Book::find($id));
    }

    /**
     * Store a new book.
     * @param  Request  $request
     * @return Response
     */
    public function create(Request $request) 
    {
        $this->validate($request, [
            'title' => 'required',
            'author' => 'required',
            'description' => 'required'
        ]);

        $book = Book::create($request->all());
        return response()->json($book, 201);
    }

    /**
     * Update a book.
     * @param  String $id
     * @param  Request $request
     * @return Response
     */
    public function update($id, Request $request) 
    {
        $book = Book::findOrFail($id);
        $book->update($request->all());
        return response()->json($book, 200);
    }

    /**
     * Delete a book.
     * @param  String $id
     * @param  Request $request
     * @return Response
     */
    public function destroy($id, Request $request) 
    {
        $book = Book::findOrFail($id);
        $book->delete();
        return response()->json("Deleted book with id: {$id}", 200);
    }
}
