<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function() {
    return "Visit the api at /api/v1";
});

$router->group(['prefix' => 'api/v1'], function () use ($router) {
    $router->get('/books', ['uses' => 'BookController@showBooks']);
    $router->post('/books', ['uses' => 'BookController@create']);
    $router->get('/books/{id}', ['uses' => 'BookController@showBook']);
    $router->delete('/books/{id}', ['uses' => 'BookController@destroy']);
    $router->patch('/books/{id}', ['uses' => 'BookController@update']);
});
