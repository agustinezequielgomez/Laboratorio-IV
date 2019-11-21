<?php

use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use \Slim\App;
use Controllers\UsuariosController;
return function(App $app)
{
  $app->group('/Usuario', function()
  {
    $this->get('/', UsuariosController::class . ':traerTodos'); 
    $this->get('/teachers', UsuariosController::class . 'GetTeachers');
    $this->get('/{id}', UsuariosController::class . ':traerPorId');
  });
};
?>