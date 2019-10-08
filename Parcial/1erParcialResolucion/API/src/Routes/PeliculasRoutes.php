<?php
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use \Slim\App;
use Controllers\PeliculasController;
return function(App $app)
{
  $app->group('/Peliculas', function()
  {
    $this->get('/', PeliculasController::class . ':traerTodos'); 
    $this->get('/{id}', PeliculasController::class . ':traerPorId');
    $this->post('/fileUpload', PeliculasController::class.':fileUpload');
    $this->post('/', PeliculasController::class . ':Create');
    $this->post('/{id}', PeliculasController::class . ':Update');
    $this->delete('/{id}', PeliculasController::class . ':Delete');
    $this->get('/description/{descripcion}', PeliculasController::class. ':traerPorDescricion');
  });
};
?>