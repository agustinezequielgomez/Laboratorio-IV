<?php
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use \Slim\App;
use Controllers\VentasController;
return function(App $app)
{
  $app->group('/Ventas', function()
  {
    $this->get('/', VentasController::class . ':traerTodos'); 
    $this->get('/{id}', VentasController::class . ':traerPorId');
    $this->post('/', VentasController::class . ':Create');
    $this->post('/{id}', VentasController::class . ':Update');
    $this->delete('/{id}', VentasController::class . ':Delete');
  });
};
?>